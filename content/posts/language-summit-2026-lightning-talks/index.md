---
title: 'Lightning Talks (Python Language Summit 2026)'
publishDate: '2026-09-30T12:00:10Z'
author: Seth Larson
description: 'Lightning talks on a one-time ABI break, safer interruptions, EktuPy (Scratch but Python), an AGENTS.md file for CPython, and a call to read PEP 836.'
tags: [language-summit, language-summit-2026]
published: true
---

## One-time ABI breakage

By Mark Shannon

Why break the [Stable ABI](https://docs.python.org/3/c-api/stable.html)? Because there are 32 spare bits in the
[`PyObject`](https://docs.python.org/3/c-api/structures.html#c.PyObject) header that we currently can’t use.

```c
struct _object {
    Py_ssize_t ob_refcnt;  // Mark wants the high bits in this struct.
    PyTypeObject *ob_type;
};
```

Since [PEP 683](https://peps.python.org/pep-0683/) was accepted in Python 3.12,
`ob_refcnt` has effectively been treated as a 32-bit integer, but these
bits are still inaccessible for other uses to prevent breakages.
If the Python core team could repurpose these
bits, Mark could implement a better garbage collector and faster allocations.

Breaking the Stable ABI would be “easy to do... probably not painless though”,
in reference to users needing to port, recompile, and support multiple ABIs.

“Well... it’s going to happen anyway”, Mark said, referencing `abi3` and `abi3t` for
[free-threading](https://docs.python.org/3/howto/free-threading-python.html),
and how Python packages depending on the Stable ABI would need to move to the
new `abi3t` ABI.

Thomas Wouters provided an answer: wait until there is only a single Stable ABI, `abi3t`.
Free-threaded Python has not promised Stable ABI compatibility
for its object layout, unlike non-free-threaded Python, which exposed
details about `ob_refcnt` in the Stable ABI.

It was at this point that it began slowly dawning on Mark, to his horror, that free-threaded
Python may be solving his problem. After free-threading becomes the new Python default,
the Stable ABI that exposes the object header internals will be no more, and Mark
and team can make changes to the object header more freely. We’ll just have to be patient!

## Safer and Generic Interruptions

By Daniele Parmeggiani

Daniele presented a gap in implementing structured concurrency with threads in Python today:
the inability to safely interrupt tasks that failed or have been cancelled.

For example, let’s say there were two
I/O-bound parallel database queries sent as a result of a web request (task A and task B). If task A returned early with
an error, the result of task B would no longer be needed, because an exception would be raised anyway.
However, right now there is no way to cancel task B, so instead the result of task B is waited for
and then thrown away before propagating the exception from task A.

Interrupts are one way to implement this cancellation mechanism.
Daniele explained that the machinery to implement cancellations via interrupts is “already available in CPython,
but isn’t exposed at the Python level”. And why isn’t this functionality exposed? Because it’s a huge source of “footguns”.

Instead of exposing the unsafe functionality directly, Daniele would like to offer users
a way to handle interruptions safely. To do this, Daniele proposes adding uninterruptible scopes,
where a [context manager’s](https://docs.python.org/3/reference/datamodel.html#context-managers) `__enter__()` and `__exit__()` methods are
“shielded” from being interrupted and are guaranteed to execute.

“You can’t really rely on [context manager cleanups] with interruptions right now”.
If you read the documentation of the [`signal` module](https://docs.python.org/3/library/signal.html#note-on-signal-handlers-and-exceptions),
it tells you to turn off signals because they aren’t safe. “It’s a bit weird that the documentation for signals says that”.

“Is this good for performance? No, it adds more bytecode”, Daniele said, closing his presentation, “but
I’ve made sure to make Mark Shannon happy”. Daniele invited anyone who is interested
in an implementation of this functionality to contact him.

## EktuPy, Scratch but Python

By Kushal Das

Kushal Das brought a short presentation on a project he’d been working on to teach Python to the generation of young programmers who learned using Scratch. [Scratch](https://scratch.mit.edu/) is a programming language that is represented using blocks instead of text to create animations, games, and other media-focused programs.

EktuPy brings many of the features that are beloved in Scratch, such as the focus on media like games and animations, and the “remix” concept to give new programmers a working base to start with instead of a daunting blank canvas. EktuPy tries to bridge the gap between block-based programming languages and text-based languages like Python.

## AGENTS.md for CPython

By Gregory P. Smith

CPython, just like many other open source projects, has been seeing many contributions from folks using LLM agents. Gregory P. Smith and Łukasz Langa wanted to get a “vibe check” from core developers about adding a simple `AGENTS.md` file to the CPython repository. The hope was that even basic guidance about how to contribute to CPython (such as linking to the [Developer Guide](https://devguide.python.org/)) would improve the quality of the large number of pull requests made using agents.

Greg asked for a show of hands for “who would be against adding an `AGENTS.md` to the repository”, and no core developer hands were raised. “Oh, that was easier than I thought”. Thomas Wouters remarked that he “wished it wasn’t necessary” to have an `AGENTS.md`.

Another issue raised was that `AGENTS.md` files tend to receive many outside contributions from people wanting to add new things. Greg made it clear that the file would be kept very simple and “seldom change”, suggesting that the core team would “reject pull requests that modify the file”.

Seth Larson asked about quantifying the improvement to contributions, citing that the Python Security Response Team had seen increased volumes of LLM-generated reports. Changes to the [security policy](https://www.python.org/dev/security/) and adding a threat model appeared to work, but this was difficult to prove.

Łukasz shared his pessimistic view that CPython would someday have to stop accepting many outside contributions due to the large number of agent-driven contributions.


## Please read PEP 836 (JIT go brrr)

By Ken Jin

Closing out the Language Summit lightning talks, Ken Jin had a simple request: to [please read PEP 836](https://peps.python.org/pep-0836/). Ken had [only received 33 replies on the PEP discussion thread for PEP 836](https://discuss.python.org/t/pep-836-jit-go-brrr-the-path-to-a-supported-jit-compiler-for-cpython/108010), and encouraged core developers (and anyone reading this blog post) to read the PEP and “tell us what you disagree with”.
