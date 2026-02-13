---
title: Python 3.11.0rc1 is now available
publishDate: '2022-08-08'
updatedDate: '2022-08-08'
author: Pablo Galindo
description: 'This is the first release candidate of Python 3.11 https://www.python.org/downloads/release/python-3110rc1/ This release, \\3.11.0rc1\\, is the penultimate r...'
tags: []
published: true
legacyUrl: /2022/08/python-3110rc1-is-now-available.html
---

## This is the first release candidate of Python 3.11

[https://www.python.org/downloads/release/python-3110rc1/](https://www.python.org/downloads/release/python-3110rc1/)

This release, \*\*3.11.0rc1\*\*, is the penultimate release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate and the last planned release preview is currently planned for Monday, 2022-09-05 while the official release is planned for Monday, 2022-10-03.

There will be no ABI changes from this point forward in the 3.11 series and the goal is that there will be as few code changes as possible.

## Call to action

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

The next pre-release of Python 3.11 will be 3.11.0rc2, currently scheduled for Monday, 2022-09-05.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

A quark star is a hypothetical type of compact, exotic star, where extremely high core temperature and pressure have forced nuclear particles to form quark matter, a continuous state of matter consisting of free quarks.

Some massive stars collapse to form neutron stars at the end of their life cycle, as has been both observed and explained theoretically. Under the extreme temperatures and pressures inside neutron stars, the neutrons are normally kept apart by degeneracy pressure, stabilizing the star and hindering further gravitational collapse. However, it is hypothesized that under even more extreme temperature and pressure, the degeneracy pressure of the neutrons is overcome, and the neutrons are forced to merge and dissolve into their constituent quarks, creating an ultra-dense phase of quark matter based on densely packed quarks. In this state, a new equilibrium is supposed to emerge, as a new degeneracy pressure between the quarks, as well as repulsive electromagnetic forces, will occur and hinder total gravitational collapse.

If these ideas are correct, quark stars might occur, and be observable, somewhere in the universe. Theoretically, such a scenario is seen as scientifically plausible, but it has been impossible to prove both observationally and experimentally because the very extreme conditions needed for stabilizing quark matter cannot be created in any laboratory nor observed directly in nature. The stability of quark matter, and hence the existence of quark stars, is for these reasons among the unsolved problems in physics.

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
