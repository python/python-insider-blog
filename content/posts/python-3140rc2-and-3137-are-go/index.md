---
title: 'Python 3.14.0rc2 and 3.13.7 are go!'
publishDate: '2025-08-14'
updatedDate: '2025-08-14'
author: Hugo van Kemenade
description: 'Not one but two expedited releases! 🎉 🎉 Python 3.14.0rc2 It’s the ~final~ 🪄 penultimate 🪄 3.14 release candidate! https://www.python.org/downloads/releas...'
tags:
  - releases
published: true
legacyUrl: /2025/08/python-3140rc2-and-3137-are-go.html
---

Not one but two expedited releases! 🎉 🎉

# Python 3.14.0rc2

## [It’s](https://www.youtube.com/watch?v=zJpJbL6Pzjo) the ~final~ 🪄 penultimate 🪄 3.14 release candidate!

[https://www.python.org/downloads/release/python-3140rc2/](https://www.python.org/downloads/release/python-3140rc2/)

*Note: rc2 was originally planned for 2025-08-26, but we [fixed a bug](https://discuss.python.org/t/heads-up-pyc-magic-number-change-in-3-14-0rc2/102095) that required bumping the magic number stored in Python bytecode (`.pyc`) files. This means `.pyc` files created for rc1 cannot be used for rc2, and they’ll be recompiled.*

The ABI isn’t changing. Wheels built for rc1 should be fine for rc2, rc3 and 3.14.x. So this shouldn’t affect too many people but let’s get this out for testing sooner.

Due to this early release, we’ll also add a third release candidate between now and the final 3.14.0 release, with no planned change to the final release date.

This release, **3.14.0rc2**, is the penultimate release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release.

The next pre-release of Python 3.14 will be the final release candidate, 3.14.0rc3, scheduled for 2025-09-16; the official release of 3.14.0 is scheduled for Tuesday, 2025-10-07.

There will be ***no ABI changes*** from this point forward in the 3.14 series, and the goal is that there will be as few code changes as possible.

## Call to action

We ***strongly encourage*** maintainers of third-party Python projects to prepare their projects for 3.14 during this phase, and publish Python 3.14 wheels on PyPI to be ready for the final release of 3.14.0, and to help other projects do their own testing. Any binary wheels built against Python 3.14.0 release candidates ***will work*** with future versions of Python 3.14. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it’s as close to the final release as we can get it, its use is ***not*** recommended for production environments.

### Core developers: time to work on documentation now

-   Are all your changes properly documented?
-   Are they mentioned in [What’s New](https://docs.python.org/3.14/whatsnew/3.14.html)?
-   Did you notice other changes you know of to have insufficient documentation?

## Major new features of the 3.14 series, compared to 3.13

Some of the major new features and changes in Python 3.14 are:

### New features

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

### Build changes

*Note that Android binaries are new in rc2!*

-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an *[experimental](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler)*[JIT compiler](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler).
-   Official [Android binary releases](https://github.com/python/cpython/issues/137242) are now available.

### Incompatible changes, removals and new deprecations

-   [Incompatible changes](https://docs.python.org/3.14/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   Overview of all [pending deprecations](https://docs.python.org/3.14/deprecations/index.html)

## Python install manager

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or from its [download page](https://www.python.org/downloads/latest/pymanager/). See [our documentation](https://docs.python.org/3.14/using/windows.html) for more information. The JSON file available for download below contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

# Python 3.13.7

## This is the seventh maintenance release of Python 3.13

[https://www.python.org/downloads/release/python-3137/](https://www.python.org/downloads/release/python-3137/)

Python 3.13 is the newest major release of the Python programming language, and it contains many new features and optimizations compared to Python 3.12. 3.13.7 is the seventh maintenance release of 3.13.

3.13.7 is an expedited release to fix a significant issue with the 3.13.6 release:

-   [gh-137583](https://github.com/python/cpython/issues/137583): Regression in ssl module between 3.13.5 and 3.13.6: reading from a TLS-encrypted connection blocks

A few other bug fixes (which would otherwise have waited until the next release) are also included.

# More resources

-   [3.14 online documentation](https://docs.python.org/3.14/)
-   [3.13 online documentation](https://docs.python.org/3/)
-   [PEP 719](https://peps.python.org/pep-0719/), 3.14 release schedule
-   [PEP 745](https://peps.python.org/pep-0745/), 3.13 release schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

The magpie, *Pica pica* in Latin, is a black and white bird in the crow family, known for its chattering call.

The first-known use in English is from a [1589 poem](https://archive.org/details/transactionscong5191cong/page/360/mode/2up?q=magpy), where magpie is spelled “magpy” and cuckoo is “cookow”:

> Th\[e\]y fly to wood like breeding hauke,  
> And leave old neighbours loue,  
> They pearch themselves in syluane lodge,  
> And soare in th' aire aboue.  
> There : magpy teacheth them to chat,  
> And cookow soone doth hit them pat.

The name comes from Mag, short for Margery or Margaret (compare robin redbreast, jenny wren, and its corvid relative jackdaw); and pie, a magpie or other bird with black and white (or pied) plumage. The sea-pie (1552) is the oystercatcher, the grey pie (1678) and murdering pie (1688) is the great grey shrike. Others birds include the yellow and black pie, red-billed pie, wandering tree-pie, and river pie. The rain-pie, wood-pie and French pie are woodpeckers.

Pie on its own dates to before 1225, and comes from the Latin name for the bird, *pica*.

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a busy Helsinki on [Night of the Arts](https://helsinkifestival.fi/taiteidenyo/en/),

Your release team,  
Hugo van Kemenade  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
