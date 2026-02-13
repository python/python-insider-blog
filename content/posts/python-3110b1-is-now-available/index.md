---
title: Python 3.11.0b1 is now available
publishDate: '2022-05-08'
updatedDate: '2022-05-08'
author: Pablo Galindo
description: 'We did it, team! After quite a bumpy release process and a bunch of last-time fixes, we have reached beta 1 and feature freeze. What a ride eh? You can get t...'
tags: []
published: true
legacyUrl: /2022/05/python-3110b1-is-now-available.html
---

We did it, team! After quite a bumpy release process and a bunch of last-time fixes, we have reached beta 1 and feature freeze. What a ride eh? You can get the shiny new release artefacts from here:

[https://www.python.org/downloads/release/python-3110b1/](https://www.python.org/downloads/release/python-3110b1/)

## This is a beta preview of Python 3.11

Python 3.11 is still in development. 3.11.0b1 is the first of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We **strongly encourage** maintainers of third-party Python projects to **test with 3.11** during the beta phase and report issues found to the [Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2021-08-02). Our goal is have no ABI changes after beta 4 and as few code changes as possible after 3.11.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.11 as possible during the beta phase.

Please keep in mind that this is a preview release and its use is **not recommended** for production environments.

## Major new features of the 3.11 series, compared to 3.10

Among the new major new features and changes so far:  

-   [PEP 657](https://www.python.org/dev/peps/pep-0657/) – Include Fine-Grained Error Locations in Tracebacks
-   [PEP 654](https://www.python.org/dev/peps/pep-0654/) – Exception Groups and except\*
-   [PEP 673](https://www.python.org/dev/peps/pep-0673/) – Self Type
-   [PEP 646](https://www.python.org/dev/peps/pep-0646/) – Variadic Generics
-   [PEP 680](https://www.python.org/dev/peps/pep-0680/)– tomllib: Support for Parsing TOML in the Standard Library
-   [PEP 675](https://www.python.org/dev/peps/pep-0675/)– Arbitrary Literal String Type
-   [PEP 655](https://www.python.org/dev/peps/pep-0655/)– Marking individual TypedDict items as required or potentially-missing
-   [bpo-46752](https://bugs.python.org/issue46752)– Introduce task groups to asyncio
-   The [Faster Cpython Project](https://github.com/faster-cpython) is already yielding some exciting results. Python 3.11 is up to 10-60% faster than Python 3.10. On average, we measured a 1.22x speedup on the standard benchmark suite. See [Faster CPython for details.](https://docs.python.org/3.11/whatsnew/3.11.html#faster-cpython)
(Hey, fellow core developer, if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.11 will be 3.11.0b2, currently scheduled for Monday, 2022-05-30.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

The holographic principle is a tenet of string theories and a supposed property of quantum gravity that states that the description of a volume of space can be thought of as encoded on a lower-dimensional boundary to the region—such as a light-like boundary like a gravitational horizon. First proposed by Gerard 't Hooft, it was given a precise string-theory interpretation by Leonard Susskind, who combined his ideas with previous ones of 't Hooft and Charles Thorn.\[ Leonard Susskind said, “The three-dimensional world of ordinary experience––the universe filled with galaxies, stars, planets, houses, boulders, and people––is a hologram, an image of reality cited on a distant two-dimensional (2D) surface." As pointed out by Raphael Bousso, Thorn observed in 1978 that string theory admits a lower-dimensional description in which gravity emerges from it in what would now be called a holographic way.

The holographic principle was inspired by black hole thermodynamics, which conjectures that the maximal entropy in any region scales with the radius squared, and not cubed as might be expected. In the case of a black hole, the insight was that the informational content of all the objects that have fallen into the hole might be entirely contained in surface fluctuations of the event horizon. The holographic principle resolves the black hole information paradox within the framework of string theory. However, there exist classical solutions to the Einstein equations that allow values of the entropy larger than those allowed by an area law, hence in principle larger than those of a black hole. These are the so-called “Wheeler’s bags of gold”. The existence of such solutions conflicts with the holographic interpretation, and their effects in a quantum theory of gravity including the holographic principle are not full

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
