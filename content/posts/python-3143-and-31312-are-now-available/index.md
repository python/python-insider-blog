---
title: 'Python 3.14.3 and 3.13.12 are now available!'
publishDate: '2026-02-03'
updatedDate: '2026-02-03'
author: Thomas Wouters
description: 'Python 3.14.3 is now available!   This is third maintenance release of Python 3.14 Python 3.14.3 is the third maintenance release of 3.14, containing around ...'
tags:
  - releases
published: true
legacyUrl: /2026/02/python-3143-and-31312-are-now-available.html
---

# Python 3.14.3 is now available!

 [![Two snakes enjoying a pie with 3.14 on the top and π crimping](./image-1.png) Two snakes enjoying a pie with 3.14 on the top and π crimping538×507 110 KB](https://us1.discourse-cdn.com/flex002/uploads/python1/original/3X/9/a/9a68b560973c511564911ab531fabdab1448ff87.png "Two snakes enjoying a pie with 3.14 on the top and π crimping")

## This is third maintenance release of Python 3.14

Python 3.14.3 is the third maintenance release of 3.14, containing around 299 bugfixes, build improvements and documentation changes since 3.14.2.

[https://www.python.org/downloads/release/python-3143/](https://www.python.org/downloads/release/python-3143/)

  

## Major new features of the 3.14 series, compared to 3.13

# [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-major-new-features-of-the-314-series-compared-to-313-3)

Some of the major new features and changes in Python 3.14 are:

### New features

## [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-new-features-4)

-   [PEP 779](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-free-threaded-now-supported): Free-threaded Python is officially supported
-   [PEP 649](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-deferred-annotations): The evaluation of annotations is now deferred, improving the semantics of using annotations.
-   [PEP 750](https://docs.python.org/3/whatsnew/3.14.html#pep-750-template-string-literals): Template string literals (t-strings) for custom string processing, using the familiar syntax of f-strings.
-   [PEP 734](https://docs.python.org/3/whatsnew/3.14.html#pep-734-multiple-interpreters-in-the-standard-library): Multiple interpreters in the stdlib.
-   [PEP 784](https://docs.python.org/3/whatsnew/3.14.html#pep-784-zstandard-support-in-the-standard-library): A new module `compression.zstd` providing support for the Zstandard compression algorithm.
-   [PEP 758](https://docs.python.org/3/whatsnew/3.14.html#pep-758-allow-except-and-except-expressions-without-brackets): `except` and `except*` expressions may now omit the brackets.
-   [Syntax highlighting in PyREPL](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-pyrepl-highlighting), and support for color in [unittest](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-color-unittest), [argparse](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-color-argparse), [json](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-color-json) and [calendar](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-color-calendar) CLIs.
-   [PEP 768](https://docs.python.org/3/whatsnew/3.14.html#pep-768-safe-external-debugger-interface): A zero-overhead external debugger interface for CPython.
-   [UUID versions 6-8](https://docs.python.org/3/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 are up to 40% faster.
-   [PEP 765](https://docs.python.org/3/whatsnew/3.14.html#pep-765-control-flow-in-finally-blocks): Disallow `return`/`break`/`continue` that exit a `finally` block.
-   [PEP 741](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-capi-config): An improved C API for configuring Python.
-   A [new type of interpreter](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-tail-call-interpreter). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [Improved error messages.](https://docs.python.org/3/whatsnew/3.14.html#improved-error-messages)
-   [Builtin implementation of HMAC](https://docs.python.org/3/whatsnew/3.14.html#hmac) with formally verified code from the HACL\* project.
-   A [new command-line interface](https://docs.python.org/3/whatsnew/3.14.html#asyncio-introspection-capabilities) to inspect running Python processes using asynchronous tasks.
-   The pdb module now supports [remote attaching to a running Python process](https://docs.python.org/3/whatsnew/3.14.html#pdb).

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3/whatsnew/3.14.html).

### Build changes

## [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-build-changes-5)

-   [PEP 761](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-no-more-pgp): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-jit-compiler).
-   Official [Android binary releases](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-build-changes) are now available.

### Incompatible changes, removals and new deprecations

## [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-incompatible-changes-removals-and-new-deprecations-6)

-   [Incompatible changes](https://docs.python.org/3/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3/whatsnew/3.14.html#removed-c-apis) and [deprecations](https://docs.python.org/3/whatsnew/3.14.html#deprecated-c-apis)
-   Overview of all [pending deprecations](https://docs.python.org/3/deprecations/index.html)

## Python install manager

# [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-python-install-manager-7)

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or from its [download page](https://www.python.org/downloads/latest/pymanager/). See [our documentation](https://docs.python.org/3/using/windows.html) for more information. The JSON file available for download contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

## More resources

# [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-more-resources-8)

-   [Online documentation](https://docs.python.org/3/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

# [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-and-now-for-something-almost-but-not-quite-completely-different-9)And now for something almost, but not quite, completely different

Python 3.13.12 is *also* now available!

[https://www.python.org/downloads/release/python-31312/](https://www.python.org/downloads/release/python-31312/)

  

## This is the twelfth maintenance release of Python 3.13

Python 3.13.12 is the twelfth maintenance release of 3.13, containing around 250 bugfixes, build improvements and documentation changes since 3.13.11.

# [](https://discuss.python.org/t/python-3-14-3-and-3-13-12-are-now-available/105995#p-284679-enjoy-the-new-releases-11)Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from an international releasing task force spread out over a whopping 10 timezones this time,

Your release team,  
Thomas Wouters  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
