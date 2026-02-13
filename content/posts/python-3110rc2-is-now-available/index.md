---
title: Python 3.11.0rc2 is now available
publishDate: '2022-09-12'
updatedDate: '2022-09-12'
author: Pablo Galindo
description: 'This is the second release candidate of Python 3.11 https://www.python.org/downloads/release/python-3110rc2/ This release, 3.11.0rc2, is the last preview bef...'
tags: []
published: true
legacyUrl: /2022/09/python-3110rc2-is-now-available.html
---

## This is the second release candidate of Python 3.11

[https://www.python.org/downloads/release/python-3110rc2/](https://www.python.org/downloads/release/python-3110rc2/)

This release, 3.11.0rc2, is the last preview before the final release of Python 3.11.0 on 2022-10-24.

Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate and the last planned release preview is currently planned for Monday, 2022-09-05 while the official release is planned for Monday, 2022-10-24.

There will be no ABI changes from this point forward in the 3.11 series and the goal is that there will be as few code changes as possible.

## Modification of the final release

Due to the fact that we needed to delay the last release candidate by a week and because of personal scheduling problems I am delaying the final release to 2022-10-24 (three weeks from the original date).

## Call to action

![:warning:](./image-1.png)![:warning:](./image-2.png)![:warning:](./image-3.png)![:warning:](./image-4.png)![:warning:](./image-5.png)![:warning:](./image-6.png)![:warning:](./image-7.png)  
The 3.11 branch is now accepting changes for 3.11.1. To maximize stability, the final release will be cut from the v3.11.0rc2 tag. If you  
need the release manager (me) to cherry-pick any critical fixes, mark issues as release blockers, and/or add me as a reviewer on a critical  
backport PR on GitHub. To see which changes are currently cherry-picked for inclusion in 3.11.0, look at the short-lived branch-v3.11.0  
[https://github.com/python/cpython/tree/branch-v3.11.0](https://github.com/python/cpython/tree/branch-v3.11.0) on GitHub.  
![:warning:](./image-8.png)![:warning:](./image-9.png)![:warning:](./image-10.png)![:warning:](./image-11.png)![:warning:](./image-12.png)![:warning:](./image-13.png)![:warning:](./image-14.png)

### Core developers: all eyes on the docs now

\* Are all your changes properly documented?

\* Did you notice other changes you know of to have insufficient documentation?

### Community members

We strongly encourage maintainers of third-party Python projects to prepare their projects for 3.11 compatibilities during this phase. As always, report any issues to the [Python bug tracker](https://github.com/issues).

Please keep in mind that this is a preview release and its use is \*\*not\*\* recommended for production environments.

## Major new features of the 3.11 series, compared to 3.10

Among the new major new features and changes so far:  

-   [PEP 657](https://www.python.org/dev/peps/pep-0657/) – Include Fine-Grained Error Locations in Tracebacks
-   [PEP 654](https://www.python.org/dev/peps/pep-0654/) – Exception Groups and except\*
-   [PEP 673](https://www.python.org/dev/peps/pep-0673/) – Self Type
-   [PEP 646](https://www.python.org/dev/peps/pep-0646/) – Variadic Generics
-   [PEP 680](https://www.python.org/dev/peps/pep-0680/) – tomllib: Support for Parsing TOML in the Standard Library
-   [PEP 675](https://www.python.org/dev/peps/pep-0675/) – Arbitrary Literal String Type
-   [PEP 655](https://www.python.org/dev/peps/pep-0655/) – Marking individual TypedDict items as required or potentially-missing
-   [bpo-46752](https://bugs.python.org/issue46752) – Introduce task groups to asyncio
-   [PEP 681](https://www.python.org/dev/peps/pep-0681/) – Data Class Transforms
-   [bpo-433030](https://github.com/python/cpython/issues/34627/)– Atomic grouping ((?>…)) and possessive quantifiers (`*+, ++, ?+, {m,n}+`) are now supported in regular expressions.
-   The [Faster Cpython Project](https://github.com/faster-cpython) is already yielding some exciting results. Python 3.11 is up to 10-60% faster than Python 3.10. On average, we measured a 1.22x speedup on the standard benchmark suite. See [Faster CPython for details.](https://docs.python.org/3.11/whatsnew/3.11.html#faster-cpython)
(Hey, fellow core developer, if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next release will be the final release of Python 3.11.0, which is currently scheduled for Monday, 2022-10-24.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

In general relativity, a white hole is a theoretical region of spacetime and singularity that cannot be entered from the outside, although energy-matter, light and information can escape from it. In this sense, it is the reverse of a black hole, which can be entered only from the outside and from which energy-matter, light and information cannot escape. White holes appear in the theory of eternal black holes. In addition to a black hole region in the future, such a solution of the Einstein field equations has a white hole region in its past. This region does not exist for black holes that have formed through gravitational collapse, however, nor are there any observed physical processes through which a white hole could be formed. Supermassive black holes are theoretically predicted to be at the centre of every galaxy and that possibly, a galaxy cannot form without one. Stephen Hawking and others have proposed that these supermassive black holes spawn a supermassive white hole.

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
