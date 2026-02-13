---
title: 'Python 3.14.0rc3 is go!'
publishDate: '2025-09-18'
updatedDate: '2025-10-07'
author: Hugo
description: 'It’s 🪄 finally 🪄 the final 3.14 release candidate! https://www.python.org/downloads/release/python-3140rc3/ Note: It’s another magic release. We fixed anot...'
tags:
  - releases
published: true
legacyUrl: /2025/09/python-3140rc3-is-go.html
---

It’s 🪄 *finally* 🪄 the final 3.14 release candidate!

[https://www.python.org/downloads/release/python-3140rc3/](https://www.python.org/downloads/release/python-3140rc3/)

*Note: It’s another magic release. We [fixed another bug](https://github.com/python/cpython/pull/138363) that required bumping the magic number stored in Python bytecode (`.pyc`) files. This means file `.pyc` files created for rc2 cannot be used for rc3, and they’ll be recompiled.*

The ABI isn’t changing. Wheels built for rc1 should be fine for rc2, rc3 and 3.14.x, so this shouldn’t affect too many people.

This release, **3.14.0rc3**, is the final release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release.

The next release of Python 3.14 will be the final release, 3.14.0, scheduled for Tuesday, 2025-10-07.

There will be ***no ABI changes*** from this point forward in the 3.14 series, and the goal is that there will be as few code changes as possible.

# Call to action

We ***strongly encourage*** maintainers of third-party Python projects to prepare their projects for 3.14 during this phase, and publish Python 3.14 wheels on PyPI to be ready for the final release of 3.14.0, and to help other projects do their own testing. Any binary wheels built against Python 3.14.0 release candidates ***will work*** with future versions of Python 3.14. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

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

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html).

## Build changes

-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler).
-   Official [Android binary releases](https://github.com/python/cpython/issues/137242) are now available.

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

According to Pablo Galindo Salgado at [PyCon Greece](https://www.youtube.com/live/uTu4H3cynOI?t=29965s):

> There are things that are supercool indeed, like for instance, this is one of the results that I’m more proud about. This equation over here, which you don’t need to understand, you don’t need to be scared about, but this equation here tells what is the maximum time that it takes for a ray of light to fall into a black hole. And as you can see the math is quite complicated but the answer is quite simple: it’s 2π times the mass of the black hole. So if you normalise by the mass of the black hole, the answer is 2π. And because there is nothing specific about your election of things in this formula, this formula is universal. It means it doesn’t depend on anything other than nature itself. Which means that you can use this as a definition of π. This is a valid alternative definition of the number π. It’s literally half the maximum time it takes to fall into a black hole, which is kind of crazy. So next time someone asks you what π means you can just drop this thing and impress them quite a lot. Maybe Hugo could use this information to put it into the release notes of πthon \[yes, I can, thank you!\].

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from wonderful Cambridge,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa  
Savannah Ostrowski
