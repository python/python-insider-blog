---
title: Python 3.11.0 is now available
publishDate: '2022-10-24'
updatedDate: '2022-10-24'
author: Pablo Galindo
description: 'This is the release of Python 3.11.0 Python 3.11 is finally released. In the CPython release team, we have put a lot of effort into making 3.11 the best vers...'
tags: []
published: true
legacyUrl: /2022/10/python-3110-is-now-available.html
---

[![](./image-1.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEickKZquPSoujo5pHqw1C1q7m4_kEMV27tJ-7lIt1sxNnzvPQMpKso_RVbnrnkq1x4rQ2Ybx8zmTy-LmL3K5Ye3fP_bfwTdMRSFhFRCGcLXLNNtlj4mEurgdSvz5msOKq1fmLGKVfeXxxVh9W_SzLCfK9M5HsviItUSLPy19qTWch9mMh5YWpmCjC0a/s507/311logo.png)  

## This is the release of Python 3.11.0

Python 3.11 is finally released. In the CPython release team, we have put a lot of effort into making 3.11 the best version of Python possible. Better tracebacks, faster Python, exception groups and except\*, typing improvements and much more. Get it here:

[https://www.python.org/downloads/release/python-3110/](https://www.python.org/downloads/release/python-3110/)

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

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

When a spherical non-rotating body of a critical radius collapses under its own gravitation under general relativity, theory suggests it will collapse to a single point. This is not the case with a rotating black hole (a Kerr black hole). With a fluid rotating body, its distribution of mass is not spherical (it shows an equatorial bulge), and it has angular momentum. Since a point cannot support rotation or angular momentum in classical physics (general relativity being a classical theory), the minimal shape of the singularity that can support these properties is instead a ring with zero thickness but non-zero radius, and this is referred to as a ringularity or Kerr singularity.

This kind of singularity has the following peculiar property. The spacetime allows a geodesic curve (describing the movement of observers and photons in spacetime) to pass through the center of this ring singularity. The region beyond permits closed time-like curves. Since the trajectory of observers and particles in general relativity are described by time-like curves, it is possible for observers in this region to return to their past. This interior solution is not likely to be physical and is considered a purely mathematical artefact.

There are some other interesting free-fall trajectories. For example, there is a point in the axis of symmetry that has the property that if an observer is below this point, the pull from the singularity will force the observer to pass through the middle of the ring singularity to the region with closed time-like curves and it will experience repulsive gravity that will push it back to the original region, but then it will experience the pull from the singularity again and will repeat this process forever. This is, of course, only if the extreme gravity doesn’t destroy the observer first.

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
