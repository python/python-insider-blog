---
title: 'Python 3.15.0 alpha 5 (yes, another alpha!)'
publishDate: '2026-01-14'
updatedDate: '2026-01-15'
author: Hugo van Kemenade
description: 'Note: 3.15.0a4 was accidentally built against  from 2025-12-23 instead of 2026-01-13, so this 3.15.0a5 is an extra release correctly built against 2026-01-14...'
tags:
  - releases
published: true
legacyUrl: /2026/01/python-3150-alpha-5-yes-another-alpha.html
---

*Note: 3.15.0a4 was accidentally built against `main` from 2025-12-23 instead of 2026-01-13, so this 3.15.0a5 is an extra release correctly built against 2026-01-14.*

**This is an early developer preview of Python 3.15**

[www.python.org/downloads/release/python-3150a5/](https://www.python.org/downloads/release/python-3150a5/)

## Major new features of the 3.15 series, compared to 3.14

Python 3.15 is still in development. This release, 3.15.0a5, is the fifth of ~seven~ eight planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2026-05-05) and, if necessary, may be modified or deleted up until the release candidate phase (2026-07-28). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.15 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sampling-profiler): A new high-frequency, low-overhead, statistical sampling profiler and dedicated profiling package
-   [PEP 686](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-utf8-default): Python now uses UTF-8 as the default encoding
-   [PEP 782](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-pep782): A new `PyBytesWriter` C API to create a Python bytes object
-   The [JIT compiler](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-jit) has been significantly upgraded, with 4-5% geometric mean performance improvement on x86-64 Linux over the standard interpreter, and 7-8% speedup on AArch64 macOS over the tail-calling interpreter
-   [Improved error messages](https://docs.python.org/3.15/whatsnew/3.15.html#improved-error-messages)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.15 will be 3.15.0a6, currently scheduled for 2026-02-10.

## More resources

-   [Online documentation](https://docs.python.org/3.15/)
-   [PEP 790](https://peps.python.org/pep-0790/), 3.15 release schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

## And now for something completely different

> At last it was given out that some time next day the ship would certainly sail. So next morning, Queequeg and I took a very early start.

## Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf/donations/).

Regards from a still snowfully subzero Helsinki,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
