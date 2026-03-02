---
title: Python 3.14.0 alpha 5 is out
publishDate: '2025-02-11'
updatedDate: '2025-02-11'
author: Hugo van Kemenade
description: 'Here comes the antepenultimate alpha. https://www.python.org/downloads/release/python-3140a5/ This is an early developer preview of Python 3.14 Major new fea...'
tags:
  - releases
published: true
legacyUrl: /2025/02/python-3140-alpha-5-is-out.html
---

Here comes the antepenultimate alpha.

[https://www.python.org/downloads/release/python-3140a5/](https://www.python.org/downloads/release/python-3140a5/)

**This is an early developer preview of Python 3.14**

# Major new features of the 3.14 series, compared to 3.13

Python 3.14 is still in development. This release, 3.14.0a5, is the fifth of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2025-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2025-07-22). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.14 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 649](https://peps.python.org/pep-0649/): [deferred evaluation of annotations](https://docs.python.org/3.14/whatsnew/3.14.html#pep-649-deferred-evaluation-of-annotations)
-   [PEP 741](https://peps.python.org/pep-0741/): Python configuration C API
-   [PEP 761](https://peps.python.org/pep-0761/): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   [Improved error messages](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.14 will be the penultimate alpha, 3.14.0a6, currently scheduled for 2025-03-14.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

2025-01-29 marked the start of a new lunar year, the Year of the Snake 🐍 (and the Year of Python?).

For centuries, π was often approximated as 3 in China. Some time between the years 1 and 5 CE, astronomer, librarian, mathematician and politician Liu Xin (劉歆) calculated π as 3.154.

Around 130 CE, mathematician, astronomer, and geographer Zhang Heng (張衡, 78–139) compared the celestial circle with the diameter of the earth as 736:232 to get 3.1724. He also came up with a formula for the ratio between a cube and inscribed sphere as 8:5, implying the ratio of a square’s area to an inscribed circle is √8:√5. From this, he calculated π as √10 (~3.162).

Third century mathematician Liu Hui (刘徽) came up with an algorithm for calculating π iteratively: calculate the area of a polygon inscribed in a circle, then as the number of sides of the polygon is increased, the area becomes closer to that of the circle, from which you can approximate π.

This algorithm is similar to the method used by Archimedes in the 3rd century BCE and Ludolph van Ceulen in the 16th century CE (see [3.14.0a2 release notes](https://blog.python.org/2024/11/python-3140-alpha-2-released.html)), but Archimedes only went up to a 96-sided polygon (96-gon). Liu Hui went up to a 192-gon to approximate π as 157/50 (3.14) and later a 3072-gon for 3.14159.

Liu Hu wrote a commentary on the book The Nine Chapters on the Mathematical Art which included his π approximations.

In the fifth century, astronomer, inventor, mathematician, politician, and writer Zu Chongzhi (祖沖之, 429–500) used Liu Hui’s algorithm to inscribe a 12,288-gon to compute π between 3.1415926 and 3.1415927, correct to seven decimal places. This was more accurate than Hellenistic calculations and wouldn’t be improved upon for 900 years.

Happy Year of the Snake!

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a remarkably snowless Helsinki,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
