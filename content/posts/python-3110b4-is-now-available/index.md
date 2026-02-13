---
title: Python 3.11.0b4 is now available
publishDate: '2022-07-11'
updatedDate: '2022-07-26'
author: Pablo Galindo
description: 'I cannot believe I am writing this, but Python 3.11.b4 is available! https://www.python.org/downloads/release/python-3110b4/ This is a beta preview of Python...'
tags: []
published: true
legacyUrl: /2022/07/python-3110b4-is-now-available.html
---

I cannot believe I am writing this, but Python 3.11.b4 is available!

[https://www.python.org/downloads/release/python-3110b4/](https://www.python.org/downloads/release/python-3110b4/)

## This is a beta preview of Python 3.11

Python 3.11 is still in development. 3.11.0b4 is the fourth of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We **strongly encourage** maintainers of third-party Python projects to **test with 3.11** during the beta phase and report issues found to the [Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2021-08-02). Our goal is have no ABI changes after beta 4 and as few code changes as possible after 3.11.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.11 as possible during the beta phase.

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

The next pre-release of Python 3.11 will be 3.11.0b5, currently scheduled for Monday, 2022-07-25.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

The Planck temperature is 1.416784×10\*\*32 K. At this temperature, the wavelength of light emitted by thermal radiation reaches the Planck length. There are no known physical models able to describe temperatures greater than the Planck temperature and a quantum theory of gravity would be required to model the extreme energies attained. Hypothetically, a system in thermal equilibrium at the Planck temperature might contain Planck-scale black holes, constantly being formed from thermal radiation and decaying via Hawking evaporation; adding energy to such a system might decrease its temperature by creating larger black holes, whose Hawking temperature is lower.

Rumours say the Planck temperature can be reached in some of the hottest parts of Spain in summer.

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
