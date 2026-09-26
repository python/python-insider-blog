---
title: One namespace to namespace them all (Python Language Summit 2026)
publishDate: '2026-09-30'
updatedDate: '2026-09-30'
author: Seth Larson
description: 'Pablo Galindo Salgado proposes a top-level `std` namespace for the Python standard library to prevent module shadowing and free up module names.'
tags: [language-summit, language-summit-2026]
published: true
---

Steering Council member and Release Manager Pablo Galindo Salgado opened the Language Summit this year to propose solutions to a problem that everyone who’s used Python has encountered at least once before.
The issue manifests as seemingly random `AttributeError` exceptions from modules like `json`, `math`, or `http` for names you know are correct. Why is the standard library suddenly raising errors?

```terminaloutput
$ cat game.py
import random
if int(input("Pick a number 1-10")) == random.randint(1, 10):
    print("You win!")

$ python game.py
AttributeError: module 'random' has no attribute 'randint' (???)

# Why is random.randint() not available???
```

The issue is usually that a module is “shadowing” the standard library module from a higher-precedence location in `sys.path`, such as your current working directory or a directory on `PYTHONPATH`. There is probably a file named `json.py` or `math.py` in your project, and that module takes precedence over the standard library module of the same name, which is only noticed once you start using the module elsewhere in your project.

```terminaloutput
$ ls
game.py   random.py

# random.py is being imported first, not the stdlib random

$ python game.py
AttributeError: module 'random' has no attribute 'randint'
```

This issue is caused by Python’s flat module namespace; there is no delineation between what is part of the standard library and what are third-party modules, either dependencies or project code.

Pablo noted that there is a low-cost option that solves this issue, available since Python 3.11: [the `-P` option](https://docs.python.org/3/using/cmdline.html#cmdoption-P), which, according to the documentation, “doesn’t prepend a potentially unsafe path to `sys.path`”, such as the current working directory. The problem is that most users are not running Python with this option enabled, or are depending on the current working directory being importable because they don’t install their own project code into the environment.

## New standard library module names are constrained

The problem goes beyond being confusing to users. Pablo explained that the flat namespace means that core developers often need to choose “awkward” names for new modules due to what’s already in use on the [Python Package Index (PyPI)](https://pypi.org/). This restriction applies even when a module is being adopted from PyPI into the standard library, such as PyYAML, which provides the `yaml` module. This is the reason that many new standard library modules have been suffixed with “lib” (such as `tomllib` or `graphlib`) or are unexpectedly named (such as `zoneinfo` instead of `timezone`).

What is one potential solution? Adding a new top-level namespace
for all standard library modules. Pablo suggested the name `std`
for this namespace, so users who want to guarantee they are importing
a standard library module would `import std.json` or `from std import json`, for example.

Pablo assured everyone that `import json` without the `std` namespace
would keep working basically forever (“We can’t break the world, that would be bad”).

```python
>>> import std.json, json
>>> std.json is json
True
>>> json.__name__
'json'  # unchanged
```

But Pablo didn’t exclude the idea of introducing *new* modules *exclusively*
in the `std` namespace as a method for encouraging users to begin adopting
the new `std` namespace:

```python
>>> import std.new_stdlib_module
# This would work for new modules.

>>> import new_stdlib_module
ImportError
# But new modules without 'std.' wouldn't work...
```

Python wouldn’t be alone, either. Many other programming languages have
already namespaced their standard library (or equivalent):

| Language | Namespace | Notes |
|----------|-----------|-------|
| Rust/C++ | `std::` | Reserved from day one |
| Java     | `java.*` | Enforced at the classloader |
| Go | `"fmt"` | Standard library known by path shape |
| Node.js | `node:fs` | Retrofitted, unspoofable |
| Python | `import os` | **(⚠) Flat, unreserved** |

## A tempting door opens: unbundling the standard library

Pablo shared that a potential side effect of reserving a new top-level namespace
for the Python standard library is that the standard library
could then more easily be “unbundled”. Unbundling the standard library
would mean that the stdlib modules would be upgradeable separately
from the Python interpreter and independently of each other, likely
distributed through PyPI.

Unbundling the standard library would provide a few benefits:

* Ship standard library modules via PyPI, versioned independently of the interpreter.
* Security fixes out-of-band, not waiting for a Python release.
* Faster iteration on modules that move quicker than Python core.

But there are trade-offs to unbundling, and we know of one concrete example.
Ruby “gemified” its standard library and ran into issues, such as long
deprecation periods (`require` took three release cycles), warnings from
transitive dependencies, and a CVE in the `uri` gem that went unpatched because the gem wasn’t
listed in [`Gemfile`](https://bundler.io/guides/gemfile.html), the Ruby equivalent of a package manifest.

## Discussion

Kushal Das shared that the shadowing issue was a “big problem for newcomers”, especially first-time Python users writing code doing arithmetic in a file named `math.py`.
Jukka Lehtosalo shared that he had also “personally encountered this problem”, and asked if there was “data about how often this happens”. Pablo didn’t have concrete data and shared that the error message has improved in recent Python versions.
Pablo didn’t want to over-focus on the shadowing issue and instead wanted to focus on what he believed was the larger issue: how the flat namespace affects how core developers choose standard library module names.

David Hewitt wondered whether there is a “security edge” to this proposal, positing that core developers are “more familiar with what is in the standard library” compared to a beginner, and asked whether this change could help learners know what is included in Python and what isn’t. Pablo pushed back on the security angle: “the standard library is huge, we could do [standard library module] trivia and we’d all fail”. He concluded that this could be another positive reason to adopt the proposal, but he didn’t want to oversell this aspect, either.

Guido van Rossum asked whether every stdlib module would eventually need to move under this proposal, which Pablo confirmed. As a follow-up, Guido asked whether this would mean touching imports across the entire standard library, which Pablo also confirmed, noting that this migration could be “mostly mechanical” and could include freezing all modules.

Peter Bierma asked whether the new `std` namespace would add performance costs, to which Pablo answered that the cost would be “effectively zero”.

Thomas Wouters imagined an incremental rollout of the new `std` namespace, proposing that new modules would land under the `std` namespace, with the possibility of a future mode that disables top-level shadowing entirely once enough of the ecosystem has moved.

Stefan Behnel felt that Python “should provide a way to confidently import from the standard library”. He offered a potential solution that would keep most code the same: limiting the proposal to `from` imports. The syntax would be `from std import random`, so the module name would be the same and the `std` namespace wouldn’t appear in user code. This would also avoid the issue of [`sys.modules`](https://docs.python.org/3/library/sys.html#sys.modules) duplicating the module. Guido concurred, noting that `from std` could be magic, a “special keyword”, Pablo added.

David Hewitt noted the precedent already set by the [`lazy` keyword](https://peps.python.org/pep-0810/) (new in Python 3.15) for changing the `import` statement without having to introduce a new module.
After a show of hands to get a temperature check on the idea of using a keyword, no one attending “hated the idea” and many attendees “loved the idea”.

Gregory P. Smith provided guidance with his “PEP hat” on, noting that the proposal was potentially trying to solve multiple issues at once. “Keep all the ideas on the table, but be particular about what you want to tackle”.
