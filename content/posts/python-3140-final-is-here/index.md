---
title: 'Python 3.14.0 (final) is here!'
publishDate: '2025-10-07'
updatedDate: '2025-10-07'
author: Hugo van Kemenade
description: '!Two snakes enjoying a pie with 3.14 on the top and π crimping Python 3.14.0 is now available python.org/downloads/release/python-3140/ This is the stable re...'
tags:
  - releases
published: true
legacyUrl: /2025/10/python-3140-final-is-here.html
---

![Two snakes enjoying a pie with 3.14 on the top and π crimping](./image-1.png)

# Python 3.14.0 is now available

[python.org/downloads/release/python-3140/](https://www.python.org/downloads/release/python-3140/)

# This is the stable release of Python 3.14.0

Python 3.14.0 is the newest major release of the Python programming language, and it contains many new features and optimisations compared to Python 3.13.

# Major new features of the 3.14 series, compared to 3.13

Some of the major new features and changes in Python 3.14 are:

## New features

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

## Build changes

-   [PEP 761](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-no-more-pgp): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-jit-compiler).
-   Official [Android binary releases](https://docs.python.org/3/whatsnew/3.14.html#whatsnew314-build-changes) are now available.

## Incompatible changes, removals and new deprecations

-   [Incompatible changes](https://docs.python.org/3/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3/whatsnew/3.14.html#removed-c-apis) and [deprecations](https://docs.python.org/3/whatsnew/3.14.html#deprecated-c-apis)
-   Overview of all [pending deprecations](https://docs.python.org/3/deprecations/index.html)

# Python install manager

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or from its [download page](https://www.python.org/downloads/latest/pymanager/). See [our documentation](https://docs.python.org/3/using/windows.html) for more information. The JSON file available for download contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

# More resources

-   [Online documentation](https://docs.python.org/3/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

# And now for something completely different

Edgar Allen Poe died on 7th October 1849.

As we all recall from [3.14.0a1](https://discuss.python.org/t/python-3-14-0-alpha-1/68039#p-199032-and-now-for-something-completely-different-3), piphilology is the creation of mnemonics to help memorise the digits of *π*, and the number of letters in each word in a pi-poem (or “piem”) successively correspond to the digits of *π*.

In 1995, Mike Keith, an American mathematician and author of constrained writing, retold Poe’s *The Raven* as a 740-word piem. Here’s the first two stanzas of [*Near A Raven*](http://www.cadaeic.net/naraven.htm):

>             **Poe, E.  
>       Near a Raven**
>
> Midnights so dreary, tired and weary.  
>     Silently pondering volumes extolling all by-now obsolete lore.  
> During my rather long nap - the weirdest tap!  
>     An ominous vibrating sound disturbing my chamber’s antedoor.  
>         “This”, I whispered quietly, “I ignore”.  
>
> Perfectly, the intellect remembers: the ghostly fires, a glittering ember.  
>     Inflamed by lightning’s outbursts, windows cast penumbras upon this floor.  
> Sorrowful, as one mistreated, unhappy thoughts I heeded:  
>     That inimitable lesson in elegance - Lenore -  
>         Is delighting, exciting…nevermore.

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a colourful autumnal Helsinki,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
