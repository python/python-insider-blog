---
title: 'Python 3.14.0 beta 1 is here!'
publishDate: '2025-05-07'
updatedDate: '2025-05-09'
author: Hugo
description: 'Only one day late, welcome to the first beta! https://www.python.org/downloads/release/python-3140b1/ This is a beta preview of Python 3.14 Python 3.14 is st...'
tags:
  - releases
published: true
legacyUrl: /2025/05/python-3140-beta-1-is-here.html
---

Only one day late, welcome to the first beta!

[https://www.python.org/downloads/release/python-3140b1/](https://www.python.org/downloads/release/python-3140b1/)

**This is a beta preview of Python 3.14**

Python 3.14 is still in development. This release, 3.14.0b1, is the first of four planned beta releases.

Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We ***strongly encourage*** maintainers of third-party Python projects to ***test with 3.14*** during the beta phase and report issues found to [the Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature-complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Tuesday 2025-07-22). Our goal is to have ***no ABI changes*** after beta 4 and as few code changes as possible after the first release candidate. To achieve that, it will be ***extremely important*** to get as much exposure for 3.14 as possible during the beta phase.

Please keep in mind that this is a preview release and its use is ***not*** recommended for production environments.

# Major new features of the 3.14 series, compared to 3.13

Some of the major new features and changes in Python 3.14 are:

## New features

-   [PEP 649](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep649): The evaluation of type annotations is now deferred, improving the semantics of using annotations.
-   [PEP 750](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep750): Template string literals (t-strings) for custom string processing, using the familiar syntax of f-strings.
-   [PEP 784](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep784): A new module `compression.zstd` providing support for the Zstandard compression algorithm.
-   [PEP 758](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep758): `except` and `except*` expressions may now omit the brackets.
-   [Syntax highlighting in PyREPL](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pyrepl-highlighting), and support for color in [unittest](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-unittest), [argparse](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-argparse), [json](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-json) and [calendar](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-color-calendar) CLIs.
-   [PEP 768](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep768): A zero-overhead external debugger interface for CPython.
-   [UUID versions 6-8](https://docs.python.org/3.14/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 and 8 are up to 40% faster.
-   [PEP 765](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep765): Disallow `return`/`break`/`continue` that exit a `finally` block.
-   [PEP 741](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep741): An improved C API for configuring Python.
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [Improved error messages.](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   Builtin implementation of HMAC with formally verified code from the HACL\* project.

(Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html). The next pre-release of Python 3.14 will be 3.14.0b2, scheduled for 2025-05-27.

## Build changes

-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler).

## Incompatible changes, removals and new deprecations

-   [Incompatible changes](https://docs.python.org/3.14/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   Overview of all [pending deprecations](https://docs.python.org/3.14/deprecations/index.html)

# Python install manager

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or [our FTP page](https://www.python.org/ftp/python/pymanager/). See [our documentation](https://docs.python.org/3.14/using/windows.html) for more information. The [JSON file available for download](https://www.python.org/ftp/python/3.14.0/windows-3.14.0b1.json) contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# Note

During the release process, we discovered a test that only failed when run sequentially and only when run after a certain number of other tests. This appears to be a problem with the test itself, and we will make it more robust for beta 2. For details, see [python/cpython#133532](https://github.com/python/cpython/issues/133532).

# And now for something completely different

The mathematical constant pi is represented by the Greek letter *π* and represents the ratio of a circle’s circumference to its diameter. The first person to use *π* as a symbol for this ratio was Welsh self-taught mathematician William Jones in 1706. He was a farmer’s son born in Llanfihangel Tre’r Beirdd on Angelsy (Ynys Môn) in 1675 and only received a basic education at a local charity school. However, the owner of his parents’ farm noticed his mathematical ability and arranged for him to move to London to work in a bank.

By age 20, he served at sea in the Royal Navy, teaching sailors mathematics and helping with the ship’s navigation. On return to London seven years later, he became a maths teacher in coffee houses and a private tutor. In 1706, Jones published *Synopsis Palmariorum Matheseos* which used the symbol *π* for the ratio of a circle’s circumference to diameter (hunt for it on pages [243](https://archive.org/details/SynopsisPalmariorumMatheseosOrANewIntroductionToTheMathematics/page/n261/mode/1up?view=theater) and [263](https://archive.org/details/SynopsisPalmariorumMatheseosOrANewIntroductionToTheMathematics/page/n283/mode/1up?view=theater) or [here](https://commons.wikimedia.org/wiki/File:Synopsis_Palmariorum_Matheseos_pi.jpg)). Jones was also the first person to realise *π* is an irrational number, meaning it can be written as decimal number that goes on forever, but cannot be written as a fraction of two integers.

But why *π*? It’s thought Jones used the Greek letter *π* because it’s the first letter in *perimetron* or perimeter. Jones was the first to use *π* as our familiar ratio but wasn’t the first to use it in as part of the ratio. William Oughtred, in his 1631 *Clavis Mathematicae* (*The Key of Mathematics*), used *π/δ* to represent what we now call pi. His *π* was the circumference, not the ratio of circumference to diameter. James Gregory, in his 1668 *Geometriae Pars Universalis* (*The Universal Part of Geometry*) used *π/ρ* instead, where *ρ* is the radius, making the ratio 6.28… or [*τ*](https://www.tauday.com/). After Jones, Leonhard Euler had used *π* for 6.28…, and also *p* for 3.14…, before settling on and popularising *π* for the famous ratio.

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from Helsinki as the leaves begin to appear on the trees,

Your release team, Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
