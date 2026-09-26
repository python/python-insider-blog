---
title: Memory Snapshots for CPython (Python Language Summit 2026)
publishDate: '2026-09-30T12:00:04Z'
author: Seth Larson
description: 'Hood Chatham proposes memory snapshots and an initialization phase for speedier Python startups'
tags: [language-summit, language-summit-2026]
published: true
---

If you open up a new Python interpreter, close it, and then open a new Python interpreter again… how different are these two processes? Hood Chatham’s talk at the Language Summit aimed to provide a safe alternate “bootstrapping” path for the Python interpreter that forgoes running the same initialization from scratch each time and instead uses a “snapshot” of the Python process memory after initialization has completed.

In tests of snapshots in [Pyodide](https://pyodide.org/), executing a simple “Hello, world” program was around 4 times faster (0.353 seconds versus 1.406 seconds) when loading the Python interpreter from a memory snapshot compared to loading the Python interpreter from scratch without a snapshot. Node.js implemented V8 snapshots in v4.2.4 and saw ~33% improvements to startup time, but shortly after, in v4.8.4, snapshots were disabled due to the problem that Hood wanted to raise for discussion.


## Randomization where you don’t expect

The issue was one that was familiar to Python and many other languages: [denial-of-service through hash algorithm collisions](https://ocert.org/advisories/ocert-2011-003.html). This was a security issue reported to many programming languages at the same time, including Java, Ruby, PHP, and many other projects.

Python fixed this issue in Python 3.3, as did many other programming languages, by adding a random [“salt” to `hash()` calculations](https://docs.python.org/3/reference/datamodel.html#object.__hash__). The salt is randomized at program startup to prevent remote attackers from controlling the hash values of inputs, and thus causing a CPU denial-of-service by creating extremely unbalanced data structures that rely on object hash values being evenly distributed, like [`dict`](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) and [`set`](https://docs.python.org/3/tutorial/datastructures.html#sets).

The danger of snapshotting and restoring the memory of a Python process post-initialization is captured by Randall Munroe’s [xkcd “Random Number”](https://xkcd.com/221/) (image below licensed CC-BY-NC 2.5), where the fixed value of “4” was at some indeterminate time in the past chosen by a fair dice roll and is now reused whenever a new random number is requested.

![](image.png)

If a Python process were to begin “restoring from a memory snapshot”, effectively this is what would happen for hash seed randomization: a value that is expected to be randomized every time would become deterministic and shared across all snapshots. Hood noted that there were likely other places, especially in libraries and programs, where this assumption would break existing use-cases, too.

Hood proposed that the concept of an “initialization phase” be added to the Python language model, citing [RPython](https://rpython.readthedocs.io/en/latest/) and [SPy](https://github.com/spylang/spy) as two runtimes that have introduced an “explicit entrypoint to an initialization phase”. These entry points were useful for tree-shaking and pre-evaluation, respectively, but could be reused for the purpose of fixing issues related to adding memory snapshots to CPython. This initialization phase could be called again on re-initialization, allowing the runtime and third-party libraries to safely reintroduce randomness into the program if memory snapshotting were implemented.


## Discussion

Stefan Behnel referenced some similar functionality that Python already provides: the [`atexit` module](https://docs.python.org/3/library/atexit.html), which provides an [API for registering a callback function](https://docs.python.org/3/library/atexit.html#atexit.register) that is called when the Python process is exiting. Stefan wondered whether a `reinit` callback function could serve the needs Hood described.

Peter Bierma wondered whether improvements to initialization time could speed up startup enough that snapshotting would no longer be needed. Hood answered that there’s a “ton of work” to do when initializing Python, such as importing modules, and that a proposal to speed up initialization is “an order of magnitude more complex” than memory snapshotting and reinitialization. “I know how to implement snapshotting, I don’t know how to speed up the interpreter”.

Thomas Wouters wondered whether [lazy imports, defined in PEP 810](https://peps.python.org/pep-0810/) and coming to Python 3.15, would solve some of the issues with slow initialization. Hood was cautious, stating that lazy imports might make his specific use-case “worse before it gets better”, especially if memory snapshots were implemented for Python. Lazy imports mean that imported modules aren’t parsed and executed until a member of the module is accessed, so if an import isn’t required for a particular execution of a Python program, then its cost isn’t paid by the interpreter.

Snapshots, however, benefit performance because the cost to parse and execute all imports is paid a single time, the state is saved, and then it is “restored” in future executions to skip this part of the process. If imports aren’t resolved initially (such as when lazy imports are used), then the imports won’t be saved in the snapshot, and their cost will be paid on each Python execution, even if memory snapshots are implemented.

Hood also shared some details about the use-case he was interested in: using Python with [WebAssembly](https://webassembly.org/) and edge compute services. Edge compute services don’t necessarily have access to a filesystem at runtime, which lazy imports would require.

The conversation switched to [freezing modules](https://docs.python.org/3/using/cmdline.html#cmdoption-X). Pablo Galindo Salgado referenced some prior art at Alibaba for snapshots using a “memory dump and metadata table”. Guido van Rossum, speaking from experience on the Faster CPython team, noted that deep-freezing modules “didn’t affect startup that much” while adding complexity, and so “wasn’t worth it” from the team’s perspective. The team “didn’t spend much time trying to figure out why” this didn’t affect startup times.

Eric Snow added that another approach considered was freezing the memory of objects and introducing a “form of copy-on-write (COW)”, acknowledging that many objects aren’t going to change, so copying data can be avoided.
