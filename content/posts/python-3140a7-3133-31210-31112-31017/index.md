---
title: 'Python 3.14.0a7, 3.13.3, 3.12.10, 3.11.12, 3.10.17 and 3.9.22 are now available'
publishDate: '2025-04-08'
updatedDate: '2025-04-08'
author: Hugo
description: 'Not one, not two, not three, not four, not five, but six releases! Is this the most in a single day? 3.12-3.14 were regularly scheduled, and we had some secu...'
tags:
  - releases
published: true
legacyUrl: /2025/04/python-3140a7-3133-31210-31112-31017.html
---

Not one, not two, not three, not four, not five, but six releases! Is this the most in a single day?

3.12-3.14 were regularly scheduled, and we had some security fixes to release in 3.9-3.11 so let’s make a big day of it. This also marks the last bugfix release of 3.12 as it enters the security-only phase. See [devguide.python.org/versions/](https://devguide.python.org/versions/) for a chart.

# Python 3.14.0a7

Here comes the final alpha! This means we have just four weeks until the first beta to get those last features into 3.14 before the feature freeze on 2025-05-06!

[https://www.python.org/downloads/release/python-3140a7/](https://www.python.org/downloads/release/python-3140a7/)

**This is an early developer preview of Python 3.14**

## Major new features of the 3.14 series, compared to 3.13

Python 3.14 is still in development. This release, 3.14.0a7, is the last of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2025-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2025-07-22). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.14 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 649](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep649): deferred evaluation of annotations
-   [PEP 741](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep741): Python configuration C API
-   [PEP 758](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep758): Allow except and except\* expressions without parentheses
-   [PEP 761](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep761): Python 3.14 and onwards no longer provides PGP signatures for release artifacts. Instead, Sigstore is recommended for verifiers.
-   [PEP 765](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep765): disallow `return`/`break`/`continue` that exit a `finally` block
-   [PEP 768](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-pep768): Safe external debugger interface for CPython
-   A [new type of interpreter](https://docs.python.org/3.14/whatsnew/3.14.html#whatsnew314-tail-call). For certain newer compilers, this interpreter provides significantly better performance. Opt-in for now, requires building from source.
-   [UUID versions 6-8](https://docs.python.org/3.14/whatsnew/3.14.html#uuid) are now supported by the `uuid` module, and generation of versions 3-5 and 8 are up to 40% faster.
-   [Improved error messages](https://docs.python.org/3.14/whatsnew/3.14.html#improved-error-messages)
-   Python [removals](https://docs.python.org/3.14/whatsnew/3.14.html#removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#deprecated)
-   C API [removals](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-removed) and [deprecations](https://docs.python.org/3.14/whatsnew/3.14.html#c-api-deprecated)
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, let Hugo know.)

The next pre-release of Python 3.14 will be the first beta, 3.14.0b1, currently scheduled for 2025-05-06. After this, no new features can be added but bug fixes and docs improvements are allowed – and encouraged!

# Python 3.13.3

This is the third maintenance release of Python 3.13.

Python 3.13 is the newest major release of the Python programming language, and it contains many new features and optimizations compared to Python 3.12. 3.13.3 is the latest maintenance release, containing almost 320 bugfixes, build improvements and documentation changes since 3.13.2.

[https://www.python.org/downloads/release/python-3133/](https://www.python.org/downloads/release/python-3133/)

# Python 3.12.10

This is the tenth maintenance release of Python 3.12.

Python 3.12.10 is the latest maintenance release of Python 3.12, and the last full maintenance release. Subsequent releases of 3.12 will be security-fixes only. This last maintenance release contains about 230 bug fixes, build improvements and documentation changes since 3.12.9.

[https://www.python.org/downloads/release/python-31210/](https://www.python.org/downloads/release/python-31210/)

# Python 3.11.12

This is a security release of Python 3.11:

-   [gh-106883](https://github.com/python/cpython/issues/106883): Fix deadlock in threaded application when using sys.\_current\_frames
-   [gh-131809](https://github.com/python/cpython/issues/131809): Upgrade vendored expat to 2.7.1
-   [gh-80222](https://github.com/python/cpython/issues/80222): Folding of quoted string in display\_name violates RFC
-   [gh-121284](https://github.com/python/cpython/issues/121284): Invalid RFC 2047 address header after refolding with email.policy.default
-   [gh-131261](https://github.com/python/cpython/issues/131261): Update libexpat to 2.7.0
-   [gh-105704](https://github.com/python/cpython/issues/105704): \[CVE-2025-0938\] urlparse does not flag hostname *containing* \[ or \] as incorrect
-   [gh-119511](https://github.com/python/cpython/issues/119511): OOM vulnerability in the imaplib module

[https://www.python.org/downloads/release/python-31112/](https://www.python.org/downloads/release/python-31112/)

# Python 3.10.17

This is a security release of Python 3.10:

-   [gh-131809](https://github.com/python/cpython/issues/131809): Upgrade vendored expat to 2.7.1
-   [gh-80222](https://github.com/python/cpython/issues/80222): Folding of quoted string in display\_name violates RFC
-   [gh-121284](https://github.com/python/cpython/issues/121284): Invalid RFC 2047 address header after refolding with email.policy.default
-   [gh-131261](https://github.com/python/cpython/issues/131261): Update libexpat to 2.7.0
-   [gh-105704](https://github.com/python/cpython/issues/105704): [CVE-2025-0938](https://nvd.nist.gov/vuln/detail/CVE-2025-0938) urlparse does not flag hostname *containing* \[ or \] as incorrect
-   [gh-119511](https://github.com/python/cpython/issues/119511): OOM vulnerability in the imaplib module

[https://www.python.org/downloads/release/python-31017/](https://www.python.org/downloads/release/python-31017/)

# Python 3.9.22

This is a security release of Python 3.9:

-   [gh-131809](https://github.com/python/cpython/issues/131809) and [gh-131261](https://github.com/python/cpython/issues/131261): Upgrade vendored expat to 2.7.1
-   [gh-121284](https://github.com/python/cpython/issues/121284): Invalid RFC 2047 address header after refolding with email.policy.default
-   [gh-105704](https://github.com/python/cpython/issues/105704): [CVE-2025-0938](https://nvd.nist.gov/vuln/detail/CVE-2025-0938) urlparse does not flag hostname *containing* \[ or \] as incorrect
-   [gh-119511](https://github.com/python/cpython/issues/119511): OOM vulnerability in the imaplib module

[https://www.python.org/downloads/release/python-3922/](https://www.python.org/downloads/release/python-3922/)

# Please upgrade! Please test!

We highly recommend upgrading 3.9-3.13 and we encourage you to test 3.14.

# And now for something completely different

On Saturday, 5th April, 3.141592653589793 months of the year had elapsed.

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from a sunny and cold Helsinki springtime,

Your full release team,

Hugo van Kemenade  
Thomas Wouters  
Pablo Galindo Salgado  
Łukasz Langa  
Ned Deily  
Steve Dower
