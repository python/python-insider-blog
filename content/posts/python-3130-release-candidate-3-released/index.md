---
title: Python 3.13.0 release candidate 3 released
publishDate: '2024-10-01'
updatedDate: '2024-10-01'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.13 release candidate 3 (instead of the expected final release). https://www.python.org/downloads/release/pyth...'
tags: []
published: true
legacyUrl: /2024/10/python-3130-release-candidate-3-released.html
---

I'm pleased to announce the release of Python 3.13 **release candidate 3** (instead of the expected final release). [https://www.python.org/downloads/release/python-3130rc3/](https://www.python.org/downloads/release/python-3130rc3/)

# This is the final release candidate of Python 3.13.0

This release, **3.13.0rc3**, is the final release preview (no really) of 3.13. This release is expected to become the final 3.13.0 release, barring any critical bugs being discovered. The official release of 3.13.0 is now scheduled for Monday, 2024-10-07.

This extra, unplanned release candidate exists because of a couple of last minute issues, primarily a significant performance regression in specific workloads due to the incremental cyclic garbage collector (introduced in the alpha releases). We decided to roll back the garbage collector change in 3.13 (and continuing work in 3.14 to improve it), apply a number of other important bug fixes, and roll out a new release candidate.

There will be **no ABI changes** from this point forward in the 3.13 series (and there haven't been any since the beta releases).

### [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-call-to-action-2)Call to action

We strongly encourage maintainers of Python projects to prepare their projects for 3.13 compatibilities during this phase, and where necessary publish Python 3.13 wheels on PyPI to be ready for the final release of 3.13.0. Any binary wheels built against Python 3.13.0rc1 and later **will work** with future versions of Python 3.13. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it’s as close to the final release as we can get it, its use is **not** recommended for production environments.

### [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-core-developers-time-to-work-on-documentation-now-3)Core developers: time to work on documentation now

-   Are all your changes properly documented?
-   Are they mentioned in [What’s New](https://docs.python.org/3.13/whatsnew/3.13.html)?
-   Did you notice other changes you know of to have insufficient documentation?

# [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-major-new-features-of-the-313-series-compared-to-312-4)

# Major new features of the 3.13 series, compared to 3.12

Some of the new major new features and changes in Python 3.13 are:

## [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-new-features-5)New features

-   A [new and improved interactive interpreter](https://docs.python.org/3.13/whatsnew/3.13.html#a-better-interactive-interpreter), based on [PyPy](https://pypy.org)’s, featuring multi-line editing and color support, as well as colorized [exception tracebacks](https://docs.python.org/3.13/whatsnew/3.13.html#improved-error-messages).
-   An [*experimental* free-threaded build mode](https://docs.python.org/3.13/whatsnew/3.13.html#an-experimental-just-in-time-jit-compiler), which disables the Global Interpreter Lock, allowing threads to run more concurrently. The build mode is available as an experimental feature in the Windows and macOS installers as well.
-   A [preliminary, *experimental* JIT](https://docs.python.org/3.13/whatsnew/3.13.html#an-experimental-just-in-time-jit-compiler), providing the ground work for significant performance improvements.
-   The `locals()` builtin function (and its C equivalent) now has [well-defined semantics when mutating the returned mapping](https://docs.python.org/3.13/whatsnew/3.13.html#defined-mutation-semantics-for-locals), which allows debuggers to operate more consistently.
-   A modified version of [mimalloc](https://github.com/microsoft/mimalloc) is now included, optional but enabled by default if supported by the platform, and required for the free-threaded build mode.
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/3.13/whatsnew/3.13.html#other-language-changes), reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   The [dbm module](https://docs.python.org/3.13/library/dbm.html) has a new [dbm.sqlite3 backend](https://docs.python.org/3.13/whatsnew/3.13.html#dbm) that is used by default when creating new files.
-   The minimum supported macOS version was changed from 10.9 to **10.13 (High Sierra)**. Older macOS versions will not be supported going forward.
-   WASI is now a [Tier 2 supported platform](https://peps.python.org/pep-0011/#tier-2). Emscripten is no longer an [officially supported platform](https://peps.python.org/pep-0011/#no-longer-supported-platforms) (but [Pyodide](https://pyodide.org) continues to support Emscripten).
-   iOS is now a [Tier 3 supported platform](https://peps.python.org/pep-0730/)
-   Android is now a [Tier 3 supported platform](https://peps.python.org/pep-0738/) as well.

## [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-typing-6)Typing

-   Support for [type defaults in type parameters](https://peps.python.org/pep-0696/).
-   A [new type narrowing annotation](https://peps.python.org/pep-0742/), `typing.TypeIs`.
-   A new annotation for [read-only items in TypeDicts](https://peps.python.org/pep-0705/).
-   A new annotation for [marking deprecations in the type system](https://peps.python.org/pep-0702).

## [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-removals-and-new-deprecations-7)Removals and new deprecations

-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: `aifc`, `audioop`, `chunk`, `cgi`, `cgitb`, `crypt`, `imghdr`, `mailcap`, `msilib`, `nis`, `nntplib`, `ossaudiodev`, `pipes`, `sndhdr`, `spwd`, `sunau`, `telnetlib`, `uu`, `xdrlib`, `lib2to3`.
-   [Many other removals](https://docs.python.org/3.13/whatsnew/3.13.html#removed-modules-and-apis) of deprecated classes, functions and methods in various standard library modules.
-   C API [removals](https://docs.python.org/3.13/whatsnew/3.13.html#removed-c-apis) and [deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#deprecated-c-apis). (Some removals present in alpha 1 were reverted in alpha 2, as the removals were deemed too disruptive at this time.)
-   [New deprecations](https://docs.python.org/3.13/whatsnew/3.13.html#new-deprecations), most of which are scheduled for removal from Python 3.15 or 3.16.

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes to Python 3.13, see [What’s new in Python 3.13](https://docs.python.org/3.13/whatsnew/3.13.html). The next release of Python 3.13 will be the official 3.13.0 release, currently scheduled for Monday, 2024-10-07.

# [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-more-resources-8)

# More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://peps.python.org/pep-0719/), 3.13 Release Schedule
-   Report bugs at [Issues · python/cpython · GitHub](https://github.com/python/cpython/issues).
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or [via GitHub Sponsors](https://github.com/sponsors/python)), and support [the Python community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-13-0-release-candidate-1-released/59703#p-181511-enjoy-the-new-releases-9)

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your release team,

Thomas Wouters  
Łukasz Langa  
Ned Deily  
Steve Dower
