---
title: 'Python 3.15.0a8, 3.14.4 and 3.13.13 are out!'
publishDate: '2026-04-07'
author: Hugo van Kemenade
description: 'A final alpha and two bug fixes are awaiting your upgrade.'
tags:
  - releases
published: true
---

## Python 3.15.0 alpha 8

*This is an early developer preview of Python 3.15*

https://www.python.org/downloads/release/python-3150a8/

### Major new features of the 3.15 series, compared to 3.14

Python 3.15 is still in development. This release, 3.15.0a8, is the final planned alpha release.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2026-05-05) and, if necessary, may be modified or deleted up until the release candidate phase (2026-07-28). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.15 are still being planned and written. Among the new major new features and changes so far:

* [PEP 810](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-lazy-imports): Explicit lazy imports
* [PEP 814](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-frozendict): `frozendict` built-in type
* [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sampling-profiler): A new high-frequency, low-overhead, statistical sampling profiler and dedicated profiling package
* [PEP 798](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-unpacking-in-comprehensions): Unpacking in comprehensions with `*` and `**`
* [PEP 686](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-utf8-default): Python now uses UTF-8 as the default encoding
* [PEP 728](https://peps.python.org/pep-0728/): `TypedDict` with typed extra items
* [PEP 747](https://docs.python.org/3.15/whatsnew/3.15.html#typing): Annotating type forms with `TypeForm`
* [PEP 782](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-pybyteswriter): A new `PyBytesWriter` C API to create a Python bytes object
* The [JIT compiler](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-jit) has been significantly upgraded, with 6-7% geometric mean performance improvement on x86-64 Linux over the standard interpreter, and 12-13% speedup on AArch64 macOS over the tail-calling interpreter
* The official Windows 64-bit binaries now [use the tail-calling interpreter](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-windows-tail-calling-interpreter)
* [Improved error messages](https://docs.python.org/3.15/whatsnew/3.15.html#improved-error-messages)
* <small>(Hey, **fellow core team member,** if a feature you find important is missing from this list, let Hugo know.)</small>

The next pre-release of Python 3.15 will be 3.15.0b1, scheduled for 2026-05-05.

### More resources

* [Online documentation](https://docs.python.org/3.15/)
* [PEP 790](https://peps.python.org/pep-0790/), 3.15 release schedule
* Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues)
* [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)


## Python 3.14.4

Python 3.14.4 is the fourth maintenance release of 3.14, containing around 337 bugfixes, build improvements and documentation changes since 3.14.3.

https://www.python.org/downloads/release/python-3144/

## Python 3.13.13

Python 3.13.13 is the lucky thirteenth maintenance release of 3.13, containing around 200 bugfixes, build improvements and documentation changes since 3.13.12.

https://www.python.org/downloads/release/python-31313/


## Enjoy the new releases

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf/donations/).

Your release team,<br>
Hugo van Kemenade<br>
Thomas Wouters<br>
Ned Deily<br>
Steve Dower<br>
Łukasz Langa
