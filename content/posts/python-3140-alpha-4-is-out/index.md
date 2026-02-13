---
title: Python 3.14.0 alpha 4 is out
publishDate: '2025-01-14'
updatedDate: '2025-02-25'
author: Hugo
description: 'Hello, three dot fourteen dot zero alpha four! https://www.python.org/downloads/release/python-3140a4/ This is an early developer preview of Python 3.14 Majo...'
tags:
  - releases
published: true
legacyUrl: /2025/01/python-3140-alpha-4-is-out.html
---

Hello, three dot fourteen dot zero alpha four!

[https://www.python.org/downloads/release/python-3140a4/](https://www.python.org/downloads/release/python-3140a4/)

**This is an early developer preview of Python 3.14**

# Major new features of the 3.14 series, compared to 3.13

Python 3.14 is still in development. This release, 3.14.0a4, is the fourth of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2025-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2025-07-22). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.14 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 649](https://peps.python.org/pep-0649/): [deferred evaluation of annotations](https://docs.python.org/3.14/whatsnew/3.14.html#pep-649-deferred-evaluation-of-annotations)
-   [PEP 741](https://peps.python.org/pep-0741/): Python configuration C API
-   [PEP 761](https://peps.python.org/pep-0761/): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   [Improved error messages](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   [Many removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) of deprecated classes, functions, methods and parameters in various standard library modules.
-   [New deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated), many of which are scheduled for removal from Python 3.16
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#id13) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#id10)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.14 will be 3.14.0a5, currently scheduled for 2025-02-11.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

In Python, you can use Greek letters as constants. For example:

```
from math import pi as π

def circumference(radius: float) -> float:
    return 2 * π * radius

print(circumference(6378.137))  # 40075.016685578485
```

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a slushy, slippery Helsinki,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
