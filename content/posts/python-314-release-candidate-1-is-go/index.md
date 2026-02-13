---
title: 'Python 3.14 release candidate 1 is go!'
publishDate: '2025-07-22'
updatedDate: '2025-07-30'
author: Hugo
description: 'It’s the first 3.14 release candidate! https://www.python.org/downloads/release/python-3140rc1/ This is the first release candidate of Python 3.14 This relea...'
tags:
  - releases
published: true
legacyUrl: /2025/07/python-314-release-candidate-1-is-go.html
---

[It’s](https://www.youtube.com/watch?v=ydyXFUmv6S4) the first 3.14 release candidate!

[https://www.python.org/downloads/release/python-3140rc1/](https://www.python.org/downloads/release/python-3140rc1/)

**This is the first release candidate of Python 3.14**

This release, **3.14.0rc1**, is the penultimate release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate (and the last planned release preview) is scheduled for Tuesday, 2025-08-26, while the official release of 3.14.0 is scheduled for Tuesday, 2025-10-07.

There will be ***no ABI changes*** from this point forward in the 3.14 series, and the goal is that there will be as few code changes as possible.

# Call to action

We ***strongly encourage*** maintainers of third-party Python projects to prepare their projects for 3.14 during this phase, and where necessary publish Python 3.14 wheels on PyPI to be ready for the final release of 3.14.0, and to help other projects do their own testing. Any binary wheels built against Python 3.14.0rc1 ***will work*** with future versions of Python 3.14. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it’s as close to the final release as we can get it, its use is ***not*** recommended for production environments.

## Core developers: time to work on documentation now

-   Are all your changes properly documented?
-   Are they mentioned in [What’s New](https://docs.python.org/3.14/whatsnew/3.14.html)?
-   Did you notice other changes you know of to have insufficient documentation?

# Major new features of the 3.14 series, compared to 3.13

Some of the major new features and changes in Python 3.14 are:

## New features

-   [PEP 779](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep779): Free-threaded Python is officially supported
-   [PEP 649](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep649): The evaluation of annotations is now deferred, improving the semantics of using annotations.
-   [PEP 750](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep750): Template string literals (t-strings) for custom string processing, using the familiar syntax of f-strings.
-   [PEP 734](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep734): Multiple interpreters in the stdlib.
-   [PEP 784](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep784): A new module `compression.zstd` providing support for the Zstandard compression algorithm.
-   [PEP 758](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep758): `except` and `except*` expressions may now omit the brackets.
-   [Syntax highlighting in PyREPL](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pyrepl-highlighting), and support for color in [unittest](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-unittest), [argparse](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-argparse), [json](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-json) and [calendar](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-calendar) CLIs.
-   [PEP 768](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep768): A zero-overhead external debugger interface for CPython.
-   [UUID versions 6-8](https://docs.python.org/3.14/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 are up to 40% faster.
-   [PEP 765](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep765): Disallow `return`/`break`/`continue` that exit a `finally` block.
-   [PEP 741](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep741): An improved C API for configuring Python.
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [Improved error messages.](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   [Builtin implementation of HMAC](https://docs.python.org/3.14/whatsnew/3.14.html#hmac) with formally verified code from the HACL\* project.
-   A [new command-line interface](https://docs.python.org/3.14/whatsnew/3.14.html#asyncio-introspection-capabilities) to inspect running Python processes using asynchronous tasks.
-   The pdb module now supports [remote attaching to a running Python process](https://docs.python.org/3.14/whatsnew/3.14.html#remote-attaching-to-a-running-python-process-with-pdb).

(Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html). The next pre-release of Python 3.14 will be the final release candidate, 3.14.0rc2, scheduled for 2025-08-26.

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

Today, 22nd July, is Pi Approximation Day, because 22/7 is a common approximation of *π* and closer to *π* than 3.14.

22/7 is a Diophantine approximation, named after Diophantus of Alexandria (3rd century CE), which is a way of estimating a real number as a ratio of two integers. 22/7 has been known since antiquity; Archimedes (3rd century BCE) wrote the first known proof that 22/7 overestimates *π* by comparing 96-sided polygons to the circle it circumscribes.

Another approximation is 355/113. In Chinese mathematics, 22/7 and 355/113 are respectively known as Yuelü (约率; yuēlǜ; “approximate ratio”) and Milü (密率; mìlǜ; “close ratio”).

Happy [Pi Approximation Day](https://piapproximationday.com/)!

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a Helsinki heatwave after an excellent [EuroPython](https://ep2025.europython.eu/),

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
