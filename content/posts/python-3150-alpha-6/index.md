---
title: Python 3.15.0 alpha 6
publishDate: '2026-02-11'
updatedDate: '2026-02-11'
author: Hugo
description: 'This is an early developer preview of Python 3.15 www.python.org/downloads/release/python-3150a6/ Major new features of the 3.15 series, compared to 3.14 Pyt...'
tags:
  - releases
published: true
legacyUrl: /2026/02/python-3150-alpha-6.html
---

**This is an early developer preview of Python 3.15**

[www.python.org/downloads/release/python-3150a6/](https://www.python.org/downloads/release/python-3150a6/)

## Major new features of the 3.15 series, compared to 3.14

Python 3.15 is still in development. This release, 3.15.0a6, is the sixth of eight planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2026-05-05) and, if necessary, may be modified or deleted up until the release candidate phase (2026-07-28). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.15 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sampling-profiler): A new high-frequency, low-overhead, statistical sampling profiler and dedicated profiling package
-   [PEP 798](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-unpacking-in-comprehensions): Unpacking in comprehensions with `*` and `**`
-   [PEP 686](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-utf8-default): Python now uses UTF-8 as the default encoding
-   [PEP 782](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-pep782): A new `PyBytesWriter` C API to create a Python bytes object
-   [PEP 728](https://peps.python.org/pep-0728/): `TypedDict` with typed extra items
-   The [JIT compiler](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-jit) has been significantly upgraded, with 3-4% geometric mean performance improvement on x86-64 Linux over the standard interpreter, and 7-8% speedup on AArch64 macOS over the tail-calling interpreter
-   [Improved error messages](https://docs.python.org/3.15/whatsnew/3.15.html#improved-error-messages)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.15 will be 3.15.0a7, currently scheduled for 2026-03-10.

## More resources

-   [Online documentation](https://docs.python.org/3.15/)
-   [PEP 790](https://peps.python.org/pep-0790/), 3.15 release schedule
-   Report bugs at [](https://github.com/python/cpython/issues)[github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

## And now for something completely different

> By reason of these things, then, the whaling voyage was welcome; the great flood-gates of the wonder-world swung open, and in the wild conceits that swayed me to my purpose, two and two there floated into my inmost soul, endless processions of the whale, and, mid most of them all, one grand hooded phantom, like a snow hill in the air.

## Enjoy the new release

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf/donations/).

Regards as the snow slowly falls in Helsinki,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
