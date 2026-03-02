---
title: 'Python 3.14.2 and 3.13.11 are now available!'
publishDate: '2025-12-05'
updatedDate: '2025-12-05'
author: Hugo van Kemenade
description: 'Two more, just three days after the last? Yes! We found some regressions, so here’s an expedited pair of releases. They also come with some bonus security fi...'
tags:
  - releases
published: true
legacyUrl: /2025/12/python-3142-and-31311-are-now-available.html
---

Two more, just three days after the last? Yes!

We found some regressions, so here’s an expedited pair of releases. They also come with some bonus security fixes.

## Python 3.14.2

[www.python.org/downloads/release/python-3142/](https://www.python.org/downloads/release/python-3142)

Python 3.14.2 is the second maintenance release of 3.14, containing 18 bugfixes, build improvements and documentation changes since 3.14.1.

This is an expedited release to fix the following regressions:

-   [gh-142206](https://github.com/python/cpython/issues/142206): Exceptions in `multiprocessing` in running programs while upgrading Python.

-   [gh-142214](https://github.com/python/cpython/issues/142214): Exceptions in dataclasses without `__init__` method.

-   [gh-142218](https://github.com/python/cpython/issues/142218): Segmentation faults and assertion failures in insertdict.

-   [gh-140797](https://github.com/python/cpython/issues/140797): Crash when using multiple capturing groups in `re.Scanner`


And these security fixes:

-   [gh-142145](https://github.com/python/cpython/issues/142145): Remove quadratic behavior in node ID cache clearing ([CVE-2025-12084](https://www.cve.org/CVERecord?id=CVE-2025-12084))

-   [gh-119452](https://github.com/python/cpython/issues/119452): Fix a potential virtual memory allocation denial of service in http.server


See the full [changelog](https://docs.python.org/release/3.14.2/whatsnew/changelog.html).

## Python 3.13.11

[www.python.org/downloads/release/python-31311/](https://www.python.org/downloads/release/python-31311/)

Python 3.13.11 is the eleventh maintenance release of 3.13. This is an expedited release to fix the following regressions:

-   [gh-142206](https://github.com/python/cpython/issues/142206): Exceptions in `multiprocessing` in running programs while upgrading Python.

-   [gh-142218](https://github.com/python/cpython/issues/142218): Segmentation faults and assertion failures in insertdict.

-   [gh-140797](https://github.com/python/cpython/issues/140797): Crash when using multiple capturing groups in `re.Scanner`


And these security fixes:

-   [gh-142145](https://github.com/python/cpython/issues/142145): Remove quadratic behavior in node ID cache clearing ([CVE-2025-12084](https://www.cve.org/CVERecord?id=CVE-2025-12084))

-   [gh-119451](https://github.com/python/cpython/issues/119451): Fix a potential denial of service in http.client

-   [gh-119452](https://github.com/python/cpython/issues/119452): Fix a potential virtual memory allocation denial of service in http.server


See the full [changelog](https://docs.python.org/release/3.13.11/whatsnew/changelog.html).

## Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://donate.python.org/).

Regards from deeper darker Helsinki,

Your release team,  
Hugo van Kemenade  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
