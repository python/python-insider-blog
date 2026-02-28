---
title: Python 3.14.0 alpha 6 is out
publishDate: '2025-03-14'
updatedDate: '2025-04-08'
author: Hugo van Kemenade
description: 'Here comes the penultimate alpha. https://www.python.org/downloads/release/python-3140a6/ This is an early developer preview of Python 3.14 Major new feature...'
tags:
  - releases
published: true
legacyUrl: /2025/03/python-3140-alpha-6-is-out.html
---

Here comes the penultimate alpha.

[https://www.python.org/downloads/release/python-3140a6/](https://www.python.org/downloads/release/python-3140a6/)

**This is an early developer preview of Python 3.14**

# Major new features of the 3.14 series, compared to 3.13

Python 3.14 is still in development. This release, 3.14.0a6, is the sixth of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2025-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2025-07-22). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.14 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 649](https://peps.python.org/pep-0649/): [deferred evaluation of annotations](https://docs.python.org/3.14/whatsnew/3.14.html#pep-649-deferred-evaluation-of-annotations)
-   [PEP 741](https://peps.python.org/pep-0741/): Python configuration C API
-   [PEP 761](https://peps.python.org/pep-0761/): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   [Improved error messages](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [UUID versions 6-8](https://docs.python.org/3.14/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 and 8 are up to 40% faster.
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.14 will be the final alpha, 3.14.0a7, currently scheduled for 2025-04-08.

# More resources

-   [Online documentation](https://docs.python.org/3.14/)
-   [PEP 745](https://peps.python.org/pep-0745/), 3.14 Release Schedule
-   Report bugs at [github.com/python/cpython/issues](https://github.com/python/cpython/issues)
-   [Help fund Python and its community](https://www.python.org/psf/donations/)

# And now for something completely different

March 14 is celebrated as [pi day](https://www.exploratorium.edu/pi), because 3.14 is an approximation of π. The day is observed by eating pies (savoury and/or sweet) and celebrating π. The first pi day was organised by physicist and tinkerer Larry Shaw of the San Francisco [Exploratorium](https://annex.exploratorium.edu/learning_studio/pi/) in 1988. It is also the [International Day of Mathematics](https://www.idm314.org/) and Albert Einstein’s birthday. Let’s all eat some pie, recite some π, install and test some py, and wish a happy birthday to Albert, Loren and all the other pi day children!

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from Helsinki as fresh snow falls,

Your release team,  
Hugo van Kemenade  
Ned Deily  
Steve Dower  
Łukasz Langa
