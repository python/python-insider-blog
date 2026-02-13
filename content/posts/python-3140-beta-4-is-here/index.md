---
title: 'Python 3.14.0 beta 4 is here!'
publishDate: '2025-07-08'
updatedDate: '2025-07-08'
author: Hugo
description: 'It’s the final 3.14 beta! https://www.python.org/downloads/release/python-3140b4/ This is a beta preview of Python 3.14 Python 3.14 is still in development. ...'
tags:
  - releases
published: true
legacyUrl: /2025/07/python-3140-beta-4-is-here.html
---

[It’s](https://www.youtube.com/watch?v=cCim90WO1-4) the final 3.14 beta!

[https://www.python.org/downloads/release/python-3140b4/](https://www.python.org/downloads/release/python-3140b4/)

**This is a beta preview of Python 3.14**

Python 3.14 is still in development. This release, 3.14.0b4, is the last of four planned beta releases.

Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We ***strongly encourage*** maintainers of third-party Python projects to ***test with 3.14*** during the beta phase and report issues found to [the Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature-complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Tuesday 2025-07-22). Our goal is to have ***no ABI changes*** after beta 4 and as few code changes as possible after the first release candidate. To achieve that, it will be ***extremely important*** to get as much exposure for 3.14 as possible during the beta phase.

This includes creating pre-release wheels for 3.14, as it helps other projects to do their own testing. However, we recommend that your regular production releases wait until 3.14.0rc1, to avoid the risk of ABI breaks.

Please keep in mind that this is a preview release and its use is ***not*** recommended for production environments.

# Major new features of the 3.14 series, compared to 3.13

Some of the major new features and changes in Python 3.14 are:

## New features

*Note that PEPs [734](https://discuss.python.org/t/pep-734-multiple-interpreters-in-the-stdlib/41147/36) and [779](https://discuss.python.org/t/pep-779-criteria-for-supported-status-for-free-threaded-python/84319/123) are exceptionally new in beta 3!*

-   [PEP 779](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep779): Free-threaded Python is officially supported
-   [PEP 649](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep649): The evaluation of type annotations is now deferred, improving the semantics of using annotations.
-   [PEP 750](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep750): Template string literals (t-strings) for custom string processing, using the familiar syntax of f-strings.
-   [PEP 734](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep734): Multiple interpreters in the stdlib.
-   [PEP 784](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep784): A new module `compression.zstd` providing support for the Zstandard compression algorithm.
-   [PEP 758](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep758): `except` and `except*` expressions may now omit the brackets.
-   [Syntax highlighting in PyREPL](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pyrepl-highlighting), and support for color in [unittest](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-unittest), [argparse](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-argparse), [json](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-json) and [calendar](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-calendar) CLIs.
-   [PEP 768](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep768): A zero-overhead external debugger interface for CPython.
-   [UUID versions 6-8](https://docs.python.org/3.14/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 and 8 are up to 40% faster.
-   [PEP 765](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep765): Disallow `return`/`break`/`continue` that exit a `finally` block.
-   [PEP 741](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep741): An improved C API for configuring Python.
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [Improved error messages.](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   [Builtin implementation of HMAC](https://docs.python.org/3.14/whatsnew/3.14.html#hmac) with formally verified code from the HACL\* project.
-   A [new command-line interface](https://docs.python.org/3.14/whatsnew/3.14.html#asyncio-introspection-capabilities) to inspect running Python processes using asynchronous tasks.
-   The pdb module now supports [remote attaching to a running Python process](https://docs.python.org/3.14/whatsnew/3.14.html#remote-attaching-to-a-running-python-process-with-pdb).

(Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html). The next pre-release of Python 3.14 will be the first release candidate, 3.14.0rc1, scheduled for 2025-07-22.

## Build changes

-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler).

## Incompatible changes, removals and new deprecations

-   [Incompatible changes](https://docs.python.org/3.14/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   Overview of all [pending deprecations](https://docs.python.org/3.14/deprecations/index.html)

# Python install manager

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or from its [download page](https://www.python.org/downloads/latest/pymanager/). See [our documentation](https://docs.python.org/3.14/using/windows.html) for more information. The JSON file available for download below contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

All this talk of *π* and yet some say *π* is wrong. [Tau Day](https://www.tauday.com/) (June 28th, 6/28 in the US) celebrates *τ* as the “true circle constant”, as the ratio of a circle’s circumference to its radius, *C/r* = 6.283185… The [Tau Manifesto](https://www.tauday.com/tau-manifesto) declares *π* “a confusing and unnatural choice for the circle constant”, in part because “*2π* occurs with astonishing frequency throughout mathematics”.

If you wish to embrace *τ* the good news is [PEP 628](https://peps.python.org/pep-0628/) added [`math.tau`](https://docs.python.org/3/library/math.html#math.tau) to Python 3.6 in 2016:

> When working with radians, it is trivial to convert any given fraction of a circle to a value in radians in terms of `tau`. A quarter circle is `tau/4`, a half circle is `tau/2`, seven 25ths is `7*tau/25`, etc. In contrast with the equivalent expressions in terms of `pi` (`pi/2`, `pi`, `14*pi/25`), the unnecessary and needlessly confusing multiplication by two is gone.

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a cloudy Helsinki, looking forward to Prague and [EuroPython](https://ep2025.europython.eu/) next week,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
