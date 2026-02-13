---
title: 'Python 3.14.0 beta 2 is here!'
publishDate: '2025-05-26'
updatedDate: '2025-05-26'
author: Hugo
description: 'Here’s the second 3.14 beta. https://www.python.org/downloads/release/python-3140b2/ This is a beta preview of Python 3.14 Python 3.14 is still in developmen...'
tags:
  - releases
published: true
legacyUrl: /2025/05/python-3140-beta-2-is-here.html
---

Here’s the second 3.14 beta.

[https://www.python.org/downloads/release/python-3140b2/](https://www.python.org/downloads/release/python-3140b2/)

**This is a beta preview of Python 3.14**

Python 3.14 is still in development. This release, 3.14.0b2, is the second of four planned beta releases.

Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We ***strongly encourage*** maintainers of third-party Python projects to ***test with 3.14*** during the beta phase and report issues found to [the Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature-complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Tuesday 2025-07-22). Our goal is to have ***no ABI changes*** after beta 4 and as few code changes as possible after the first release candidate. To achieve that, it will be ***extremely important*** to get as much exposure for 3.14 as possible during the beta phase.

This includes creating pre-release wheels for 3.14, as it helps other projects to do their own testing. However, we recommend that your regular production releases wait until 3.14.0rc1, to avoid the risk of ABI breaks.

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
-   [Builtin implementation of HMAC](https://docs.python.org/3.14/whatsnew/3.14.html#hmac) with formally verified code from the HACL\* project.
-   A [new command-line interface](https://docs.python.org/3.14/whatsnew/3.14.html#asyncio-introspection-capabilities) to inspect running Python processes using asynchronous tasks.
-   The pdb module now supports [remote attaching to a running Python process](https://docs.python.org/3.14/whatsnew/3.14.html#remote-attaching-to-a-running-python-process-with-pdb).

(Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

For more details on the changes to Python 3.14, see [What’s new in Python 3.14](https://docs.python.org/3.14/whatsnew/3.14.html). The next pre-release of Python 3.14 will be 3.14.0b3, scheduled for 2025-06-17.

## Build changes

-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   Official macOS and Windows release binaries include an [*experimental* JIT compiler](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-jit-compiler).

## Incompatible changes, removals and new deprecations

-   [Incompatible changes](https://docs.python.org/3.14/whatsnew/3.14.html#incompatible-changes)
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   Overview of all [pending deprecations](https://docs.python.org/3.14/deprecations/index.html)

# Python install manager

The installer we offer for Windows is being replaced by our new install manager, which can be installed from [the Windows Store](https://apps.microsoft.com/detail/9NQ7512CXL7T) or [our FTP page](https://www.python.org/ftp/python/pymanager/). See [our documentation](https://docs.python.org/3.14/using/windows.html) for more information. The JSON file available for download below contains the list of all the installable packages available as part of this release, including file URLs and hashes, but is not required to install the latest release. The traditional installer will remain available throughout the 3.14 and 3.15 releases.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

In 1897, the State of Indiana almost passed a bill defining *π* as 3.2.

Of course, it’s not that simple.

Edwin J. Goodwin, M.D., claimed to have come up with a solution to an ancient geometrical problem called squaring the circle, first proposed in Greek mathematics. It involves trying to draw a circle and a square with the same area, using only a compass and a straight edge. It turns out to be impossible because *π* is transcendental (and this had been proved just 13 years earlier by Ferdinand von Lindemann), but Goodwin fudged things so the value of *π* was 3.2 (his writings have included at least nine different values of *π*: including 4, 3.236, 3.232, 3.2325… and even 9.2376…).

Goodwin had copyrighted his proof and offered it to the State of Indiana to use in their educational textbooks without paying royalties, provided they endorsed it. And so Indiana Bill No. 246 was introduced to the House on 18th January 1897. It was not understood and initially referred to the House Committee on Canals, also called the Committee on Swamp Lands. They then referred it to the Committee on Education, who duly recommended on 2nd February that “said bill do pass”. It passed its second reading on the 5th and the education chair moved that they suspend the constitutional rule that required bills to be read on three separate days. This passed 72-0, and the bill itself passed 67-0.

The bill was referred to the Senate on 10th February, had its first reading on the 11th, and was referred to the Committee on Temperance, whose chair on the 12th recommended “that said bill do pass”.

A mathematics professor, [Clarence Abiathar Waldo](https://www.biodiversitylibrary.org/page/14641808#page/455/mode/1up), happened to be in the State Capitol on the day the House passed the bill and walked in during the debate to hear an ex-teacher argue:

> The case is perfectly simple. If we pass this bill which establishes a new and correct value for pi , the author offers to our state without cost the use of his discovery and its free publication in our school text books, while everyone else must pay him a royalty.

Waldo ensured the senators were “properly coached”; and on the 12th, during the second reading, after an unsuccessful attempt to amend the bill it was postponed indefinitely. But not before the senators had some fun.

The Indiana News reported on the 13th:

> …the bill was brought up and made fun of. The Senators made bad puns about it, ridiculed it and laughed over it. The fun lasted half an hour. Senator Hubbell said that it was not meet for the Senate, which was costing the State $250 a day, to waste its time in such frivolity. He said that in reading the leading newspapers of Chicago and the East, he found that the Indiana State Legislature had laid itself open to ridicule by the action already taken on the bill. He thought consideration of such a proposition was not dignified or worthy of the Senate. He moved the indefinite postponement of the bill, and the motion carried.

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from Helsinki, still light at 10pm,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
