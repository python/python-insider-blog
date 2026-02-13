---
title: Python 3.13.0 (final) released
publishDate: '2024-10-07'
updatedDate: '2024-10-07'
author: Thomas Wouters
description: 'Python 3.13.0 is now available https://www.python.org/downloads/release/python-3130/ This is the stable release of Python 3.13.0 Python 3.13.0 is the newest ...'
tags: []
published: true
legacyUrl: /2024/10/python-3130-final-released.html
---

# Python 3.13.0 is now available

[https://www.python.org/downloads/release/python-3130/](https://www.python.org/downloads/release/python-3130/)

# This is the stable release of Python 3.13.0

Python 3.13.0 is the newest major release of the Python programming language, and it contains many new features and optimizations compared to Python 3.12. (Compared to the last release candidate, 3.13.0rc3, 3.13.0 contains two small bug fixes and some documentation and testing changes.)

# [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-major-new-features-of-the-313-series-compared-to-312-3)Major new features of the 3.13 series, compared to 3.12

Some of the new major new features and changes in Python 3.13 are:

## [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-new-features-4)New features

-   A [new and improved interactive interpreter](https://docs.python.org/3.13/whatsnew/3.13.html#a-better-interactive-interpreter), based on [PyPy](https://pypy.org/)’s, featuring multi-line editing and color support, as well as [colorized exception tracebacks](https://docs.python.org/3.13/whatsnew/3.13.html#improved-error-messages).
-   An [*experimental* free-threaded build mode](https://docs.python.org/3.13/whatsnew/3.13.html#whatsnew313-free-threaded-cpython), which disables the Global Interpreter Lock, allowing threads to run more concurrently. The build mode is available as an experimental feature in the Windows and macOS installers as well.
-   A [preliminary, *experimental* JIT](https://docs.python.org/3.13/whatsnew/3.13.html#an-experimental-just-in-time-jit-compiler), providing the ground work for significant performance improvements.
-   The `locals()` builtin function (and its C equivalent) now has [well-defined semantics when mutating the returned mapping](https://docs.python.org/3.13/whatsnew/3.13.html#defined-mutation-semantics-for-locals), which allows debuggers to operate more consistently.
-   A modified version of [mimalloc](https://github.com/microsoft/mimalloc) is now included, optional but enabled by default if supported by the platform, and required for the free-threaded build mode.
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/3.13/whatsnew/3.13.html#other-language-changes), reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   The [dbm module](https://docs.python.org/3.13/library/dbm.html) has a new [dbm.sqlite3 backend](https://docs.python.org/3.13/whatsnew/3.13.html#dbm) that is used by default when creating new files.
-   The minimum supported macOS version was changed from 10.9 to 10.13 (High Sierra). Older macOS versions will not be supported going forward.
-   WASI is now a [Tier 2 supported platform](https://peps.python.org/pep-0011/#tier-2). Emscripten is no longer an [officially supported platform](https://peps.python.org/pep-0011/#no-longer-supported-platforms) (but [Pyodide](https://pyodide.org/) continues to support Emscripten).
-   iOS is now a [Tier 3 supported platform](https://peps.python.org/pep-0730/).
-   Android is now a [Tier 3 supported platform](https://peps.python.org/pep-0738/).

## [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-typing-5)Typing

-   Support for [type defaults in type parameters](https://peps.python.org/pep-0696/).
-   A new [type narrowing annotation](https://peps.python.org/pep-0742/), `typing.TypeIs`.
-   A new annotation for [read-only items in TypeDicts](https://peps.python.org/pep-0705/).
-   A new annotation for [marking deprecations in the type system](https://peps.python.org/pep-0702).

## [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-removals-and-new-deprecations-6)Removals and new deprecations

-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: `aifc`, `audioop`, `chunk`, `cgi`, `cgitb`, `crypt`, `imghdr`, `mailcap`, `msilib`, `nis`, `nntplib`, `ossaudiodev`, `pipes`, `sndhdr`, `spwd`, `sunau`, `telnetlib`, `uu`, `xdrlib`, `lib2to3`.
-   [Many other removals](https://docs.python.org/3.13/whatsnew/3.13.html#removed-modules-and-apis) of deprecated classes, functions and methods in various standard library modules.
-   C API [removals](https://docs.python.org/3.13/whatsnew/3.13.html#removed-c-apis) and [deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#deprecated-c-apis). (Some removals present in alpha 1 were reverted in alpha 2, as the removals were deemed too disruptive at this time.)
-   [New deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#new-deprecations), most of which are scheduled for removal from Python 3.15 or 3.16.

For more details on the changes to Python 3.13, see [What’s new in Python 3.13](https://docs.python.org/3.13/whatsnew/3.13.html).

# [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-more-resources-7)More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://peps.python.org/pep-0719/), 3.13 Release Schedule
-   Report bugs via [GitHub Issues](https://github.com/python/cpython/issues).
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)), and support [the Python community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-13-0-final-has-been-released/66972#p-196505-we-hope-you-enjoy-the-new-releases-8)We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to [the Python Software Foundation](https://www.python.org/psf-landing/).

Choo-choo from the release train,

Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
