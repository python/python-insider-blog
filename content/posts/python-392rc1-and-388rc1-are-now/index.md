---
title: Python 3.9.2rc1 and 3.8.8rc1 are now available for testing
publishDate: '2021-02-17'
updatedDate: '2021-02-17'
author: Łukasz Langa
description: 'I’m happy to announce two release candidates today: Python 3.9.2rc1, and Python 3.8.8rc1. Get them from: https://www.python.org/downloads/release/python-392r...'
tags: []
published: true
legacyUrl: /2021/02/python-392rc1-and-388rc1-are-now.html
---

I’m happy to announce two release candidates today: Python 3.9.2rc1, and Python 3.8.8rc1. Get them from:

[https://www.python.org/downloads/release/python-392rc1/](https://www.python.org/downloads/release/python-392rc1/) [https://www.python.org/downloads/release/python-388rc1/](https://www.python.org/downloads/release/python-388rc1/) Unless critical issues are discovered, both release candidates will become their respective final versions on Monday, March 1st.

Following that, the **last** full regular maintenance release of Python 3.8 is planned for May 3rd 2021, after which it will shift to source releases only for security bug fixes only. Maintenance releases for the 3.9 series will continue at regular bi-monthly intervals, with **3.9.3** planned for early May 2021.

### Notable security content in today’s releases

-   [bpo-42967](https://bugs.python.org/issue42967): Fix web cache poisoning vulnerability by defaulting the query args separator to `&`, and allowing the user to choose a custom separator.
    
-   [bpo-42938](https://bugs.python.org/issue42938): Avoid static buffers when computing the repr of `ctypes.c_double` and `ctypes.c_longdouble` values.
    

### What’s new?

The Python 3.9 series contains many new features and optimizations over 3.8. See the “[What’s New in Python 3.9](https://docs.python.org/3.9/whatsnew/3.9.html)” document for more information about features included in the 3.9 series. We also have a [detailed change log for 3.9.2rc1](https://docs.python.org/release/3.9.2rc1/whatsnew/changelog.html#changelog) specifically.

Detailed information about all changes made in version 3.8.8rc1 specifically can be found in [its change log](https://docs.python.org/release/3.8.8rc1/whatsnew/changelog.html#python-3-8-8-release-candidate-1).

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
