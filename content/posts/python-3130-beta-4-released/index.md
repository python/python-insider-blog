---
title: Python 3.13.0 beta 4 released
publishDate: '2024-07-18'
updatedDate: '2024-07-18'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.13 beta 4. https://www.python.org/downloads/release/python-3130b4/ This is a beta preview of Python 3.13 Pyth...'
tags: []
published: true
legacyUrl: /2024/07/python-3130-beta-4-released.html
---

I'm pleased to announce the release of Python 3.13 beta 4. [https://www.python.org/downloads/release/python-3130b4/](https://www.python.org/downloads/release/python-3130b4/)

# This is a beta preview of Python 3.13

Python 3.13 is still in development. This release, 3.13.0b4, is the **final** beta release preview of 3.13.

Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We **strongly encourage** maintainers of third-party Python projects to **test with 3.13** during the beta phase and report issues found to [the Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Tuesday 2024-07-30). Our goal is to have **no ABI changes** after this final beta release, and as few code changes as possible after 3.13.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.13 as possible during the beta phase.

Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

# [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#major-new-features-of-the-313-series-compared-to-312-1)

# Major new features of the 3.13 series, compared to 3.12

Some of the new major new features and changes in Python 3.13 are:

## [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#new-features-2)New features

-   A [new and improved interactive interpreter](https://docs.python.org/3.13/whatsnew/3.13.html#a-better-interactive-interpreter), based on [PyPy](https://pypy.org)’s, featuring multi-line editing and color support, as well as colorized [exception tracebacks](https://docs.python.org/3.13/whatsnew/3.13.html#improved-error-messages).
-   An [*experimental* free-threaded build mode](https://docs.python.org/3.13/whatsnew/3.13.html#free-threaded-cpython), which disables the Global Interpreter Lock, allowing threads to run more concurrently. The build mode is available as an experimental feature in the Windows and macOS installers as well.
-   A [preliminary, *experimental* JIT](https://docs.python.org/3.13/whatsnew/3.13.html#experimental-jit-compiler), providing the ground work for significant performance improvements.
-   The `locals()` builtin function (and its C equivalent) now has [well-defined semantics when mutating the returned mapping](https://docs.python.org/3.13/whatsnew/3.13.html#defined-mutation-semantics-for-locals), which allows debuggers to operate more consistently.
-   The (cyclic) garbage collector is now [incremental](https://docs.python.org/3.13/whatsnew/3.13.html#incremental-garbage-collection), which should mean shorter pauses for collection in programs with a lot of objects.
-   A modified version of [mimalloc](https://github.com/microsoft/mimalloc) is now included, optional but enabled by default if supported by the platform, and required for the free-threaded build mode.
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/3.13/whatsnew/3.13.html#other-language-changes), reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   The [dbm module](https://docs.python.org/3.13/library/dbm.html) has a new [dbm.sqlite3 backend](https://docs.python.org/3.13/whatsnew/3.13.html#dbm) that is used by default when creating new files.
-   The minimum supported macOS version was changed from 10.9 to **10.13 (High Sierra)**. Older macOS versions will not be supported going forward.
-   WASI is now a [Tier 2 supported platform](https://peps.python.org/pep-0011/#tier-2). Emscripten is no longer an [officially supported platform](https://peps.python.org/pep-0011/#no-longer-supported-platforms) (but [Pyodide](https://pyodide.org) continues to support Emscripten).

## [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#typing-3)Typing

-   Support for [type defaults in type parameters](https://peps.python.org/pep-0696/).
-   A [new type narrowing annotation](https://peps.python.org/pep-0742/), `typing.TypeIs`.
-   A new annotation for [read-only items in TypeDicts](https://peps.python.org/pep-0705/).
-   A new annotation for [marking deprecations in the type system](https://peps.python.org/pep-0702).

## [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#removals-and-new-deprecations-4)Removals and new deprecations

-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: `aifc`, `audioop`, `chunk`, `cgi`, `cgitb`, `crypt`, `imghdr`, `mailcap`, `msilib`, `nis`, `nntplib`, `ossaudiodev`, `pipes`, `sndhdr`, `spwd`, `sunau`, `telnetlib`, `uu`, `xdrlib`, `lib2to3`.
-   [Many other removals](https://docs.python.org/3.13/whatsnew/3.13.html#removed) of deprecated classes, functions and methods in various standard library modules.
-   C API [removals](https://docs.python.org/3.13/whatsnew/3.13.html#id10) and [deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#id9). (Some removals present in alpha 1 were reverted in alpha 2, as the removals were deemed too disruptive at this time.)
-   [New deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#deprecated), most of which are scheduled for removal from Python 3.15 or 3.16.

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes to Python 3.13, see [What’s new in Python 3.13](https://docs.python.org/3.13/whatsnew/3.13.html). The next pre-release of Python 3.13 will be 3.13.0rc1, **the first release candidate**, currently scheduled for 2024-07-30.

# [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#more-resources-5)

# More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://peps.python.org/pep-0719/), 3.13 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues).
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or [via GitHub Sponsors](https://github.com/sponsors/python)), and support [the Python community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-13-0b4-now-available/58565#enjoy-the-new-releases-6)

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your release team,  
Thomas Wouters  
Łukasz Langa  
Ned Deily  
Steve Dower
