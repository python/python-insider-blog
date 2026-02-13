---
title: Python 3.11.0b5 is now available
publishDate: '2022-07-26'
updatedDate: '2022-07-26'
author: Pablo Galindo
description: Here we are. The universe. The vastness of spacetime. At the edge. The last frontier. The last beta\(conditions apply) for Python 3.11. We have defied the po...
tags: []
published: true
legacyUrl: /2022/07/python-3110b5-is-now-available.html
---

Here we are. The universe. The vastness of spacetime. At the edge. The last frontier. The last beta\*(conditions apply) for Python 3.11.

We have defied the powerful gods of release blockers and we have won by using the required amount of ruse and subterfuge.

[https://www.python.org/downloads/release/python-3110b5/](https://www.python.org/downloads/release/python-3110b5/)

## This is a beta preview of Python 3.11

Python 3.11 is still in development. 3.11.0b5 is the last of five planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We **strongly encourage** maintainers of third-party Python projects to **test with 3.11** during the beta phase and report issues found to the [Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2021-08-02). Our goal is have no ABI changes after beta 5 and as few code changes as possible after 3.11.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.11 as possible during the beta phase.

Please keep in mind that this is a preview release and its use is **not recommended** for production environments.

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

The next pre-release of Python 3.11 will be 3.11.0rc1, currently scheduled for Monday, 2022-08-01.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

Schwarzschild wormholes, also known as Einstein–Rosen bridges (named after Albert Einstein and Nathan Rosen), are connections between areas of space that can be modelled as vacuum solutions to the Einstein field equations, and that are now understood to be intrinsic parts of the maximally extended version of the Schwarzschild metric describing an eternal black hole with no charge and no rotation. Here, "maximally extended" refers to the idea that spacetime should not have any "edges": it should be possible to continue this path arbitrarily far into the particle's future or past for any possible trajectory of a free-falling particle (following a geodesic in the spacetime).

The Einstein–Rosen bridge was discovered by Ludwig Flamm in 1916, a few months after Schwarzschild published his solution, and was rediscovered by Albert Einstein and his colleague Nathan Rosen, who published their result in 1935. However, in 1962, John Archibald Wheeler and Robert W. Fuller published a paper showing that this type of wormhole is unstable if it connects two parts of the same universe and that it will pinch off too quickly for light (or any particle moving slower than light) that falls in from one exterior region to make it to the other exterior region.

Although Schwarzschild wormholes are not traversable in both directions, their existence inspired Kip Thorne to imagine traversable wormholes created by holding the "throat" of a Schwarzschild wormhole open with exotic matter (material that has negative mass/energy).

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
