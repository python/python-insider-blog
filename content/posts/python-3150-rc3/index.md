---
title: Python 3.15.0 candidate 3 is here!
publishDate: '2026-10-02'
author: Hugo van Kemenade
description: 'Following tradition, a surprise rc3!'
tags:
  - releases
published: true
---

[Following](https://discuss.python.org/t/adding-a-third-3-12-release-candidate/33605)
[recent](https://discuss.python.org/t/incremental-gc-and-pushing-back-the-3-13-0-release/65285)
[tradition](https://discuss.python.org/t/early-3-14-0-rc2-and-extra-rc3/102151),
here's a surprise third release candidate for Python 3.15.0!

We got some last-minute lazy-import release blockers, and it makes sense to
include them in 3.15.0 final. It also makes sense to give a bit of time to test
them properly, so this week's planned 3.15.0 final is postponed until next week,
and here's an extra 3.15.0rc3.

https://www.python.org/downloads/release/python-3150rc3/

**This is a candidate preview of Python 3.15**

This release, **3.15.0rc3**, is the final planned release candidate, containing around 156 bugfixes, build improvements and documentation changes from 82 contributors since 3.15.0rc2. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release.

The next release of Python 3.15 will be 3.15.0 final, scheduled for 2026-10-09.

There will be ***no ABI changes*** from this point forward in the 3.15 series, and the goal is that there will be as few code changes as possible.

# Call to action

We ***strongly encourage*** maintainers of third-party Python projects to [prepare their projects for 3.15](https://hugovk.dev/blog/2026/help-test-python-315/) during this phase, and publish Python 3.15 wheels on PyPI to be ready for the final release of 3.15.0, and to help other projects do their own testing. Any binary wheels built against Python 3.15.0 release candidates ***will work*** with future versions of Python 3.15. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it's as close to the final release as we can get it, its use is ***not*** recommended for production environments.

## Core team: extra time to work on documentation

* Are all your changes properly documented?
* Are they mentioned in [What's New](https://docs.python.org/3.15/whatsnew/3.15.html)?
* Did you notice other changes with insufficient documentation?


## Major new features of the 3.15 series, compared to 3.14

Some of the major new features and changes in Python 3.15 are:

### Interpreter improvements

* [PEP 810](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-lazy-imports): Explicit lazy imports for faster startup times
* [PEP 814](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-frozendict): Add `frozendict` built-in type
* [PEP 661](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sentinel): Add `sentinel` built-in type
* [PEP 798](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-unpacking-in-comprehensions): Unpacking in comprehensions
* [PEP 686](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-utf8-default): Python now uses UTF-8 as the default encoding
* [PEP 829](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-startup-files): Package startup configuration files
* The [experimental JIT compiler](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-jit) has been significantly upgraded, with 7-8% geometric mean performance improvement on x86-64 Linux over the standard interpreter, and 11-12% speedup on AArch64 macOS over the tail-calling interpreter
* [Improved error messages](https://docs.python.org/3.15/whatsnew/3.15.html#improved-error-messages)

### Significant improvements in the standard library

* [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sampling-profiler): Tachyon: High frequency statistical sampling profiler
* [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-profiling-package): A dedicated profiling package for organizing Python profiling tools
* [More color](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-more-color)

### New typing features

* [PEP 728](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-typeddict): `TypedDict` with typed extra items
* [PEP 747](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-typeform): Annotating type forms with `TypeForm`
* [PEP 800](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-disjoint-base): Disjoint bases in the type system

### C API improvements

* [PEP 803, 820, 793](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-abi3t): Stable ABI for free-threaded builds and related C API
* [PEP 782](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-pybyteswriter): A new `PyBytesWriter` C API to create a Python bytes object
* [PEP 788](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-c-api-interpreter-finalization): Protection against finalization in the C API

### Build changes

* [PEP 831](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-frame-pointers): Frame pointers are enabled by default for improved system-level observability

### Release changes

* The official Windows 64-bit binaries now [use the tail-calling interpreter](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-windows-tail-calling-interpreter)
* The official macOS binaries now install free-threading support by default
* <small>(Hey, **fellow core team member,** if a feature you find important is missing from this list, let Hugo know.)</small>

For more details on the changes to Python 3.15, see [What’s new in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html).

## Attention macOS 27.0 `IDLE` or `tkinter` users

When running IDLE or other GUI applications that use the `tkinter` module, these
applications may hang when using an application's menu command that opens a
dialog (for example, IDLE's `About IDLE`, `Settings`, and `Open Module` commands)
resulting in a spinning beach ball with `Force Quit` needed.

This problem is due to an operating system behavior change in macOS 27.0 that is
believed to affect all current versions of the Tk graphics toolkit and thus the
`tkinter` module in all current Python versions.

If you depend on Tk-based applications (like IDLE) on macOS, you may want to
consider deferring installing macOS 27.0 until a Tk or macOS workaround is
available or testing that your application workflow is not affected. Follow
issue [#158053](https://github.com/python/cpython/issues/158053) for updates.

## More resources

* [Online documentation](https://docs.python.org/3.15/)
* [PEP 790](https://peps.python.org/pep-0790/), 3.15 release schedule
* Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues)
* [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

# And now for something completely different

> At this moment the bow was in the hands of Eurymachus, who was warming
it by the fire, but even so he could not string it, and he was greatly
grieved. He heaved a deep sigh and said, “I grieve for myself and for
us all; I grieve that I shall have to forgo the marriage, but I do not
care nearly so much about this, for there are plenty of other women in
Ithaca and elsewhere; what I feel most is the fact of our being so
inferior to Ulysses in strength that we cannot string his bow. This
will disgrace us in the eyes of those who are yet unborn.”

## Enjoy the new release

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a sunny autumnal Helsinki.

Your release team,
<br>Hugo van Kemenade
<br>Ned Deily
<br>Steve Dower
