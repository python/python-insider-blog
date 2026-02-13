---
title: Python 3.8.7 is now available
publishDate: '2020-12-21'
updatedDate: '2020-12-21'
author: Łukasz Langa
description: 'Python 3.8.7 is the seventh maintenance release of Python 3.8. Go get it here: https://www.python.org/downloads/release/python-387/ Note: this is a bugfix re...'
tags: []
published: true
legacyUrl: /2020/12/python-387-is-now-available.html
---

Python 3.8.7 is the seventh maintenance release of Python 3.8. Go get it here:

[https://www.python.org/downloads/release/python-387/](https://www.python.org/downloads/release/python-387/)

**Note:** this is a *bugfix release* for the 3.8 series which was superseded by **Python 3.9**, currently the latest feature release series of Python 3. [You can find the latest release of 3.9.x here](https://www.python.org/downloads/).

Maintenance releases for the 3.8 series will continue at regular bi-monthly intervals, with **3.8.8** planned for February 2021.

### macOS 11 Big Sur not fully supported

Python 3.8.7 is not yet fully supported on macOS 11 Big Sur. It will install on macOS 11 Big Sur and will run on Apple Silicon Macs using Rosetta 2 translation. However, a few features do not work correctly, most noticeably those involving searching for system libraries (vs user libraries) such as `ctypes.util.find_library()` and in Distutils. This limitation affects both Apple Silicon and Intel processors. We are looking into improving the situation for Python 3.8.8.

[Python 3.9.1](https://www.python.org/downloads/release/python-391/) provides full support for Big Sur and Apple Silicon Macs, including building natively on Apple Silicon Macs and support for `universal2` binaries.

### What’s new?

The Python 3.8 series contains many new features and optimizations over 3.7. See the “[What’s New in Python 3.8](https://docs.python.org/3.8/whatsnew/3.8.html)” document for more information about features included in the 3.8 series.

Detailed information about all changes made in version 3.8.7 specifically can be found in [its change log](https://docs.python.org/release/3.8.7/whatsnew/changelog.html#python-3-8-7). Note that compared to 3.8.6 this release also contains all changes present in 3.8.7rc1.

### We hope you enjoy Python 3.8!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
