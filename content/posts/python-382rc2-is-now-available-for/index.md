---
title: Python 3.8.2rc2 is now available for testing
publishDate: '2020-02-18'
updatedDate: '2020-02-18'
author: Łukasz Langa
description: 'Python 3.8.2rc2 is the second release candidate of the second maintenance release of Python 3.8. Go get it here:   https://www.python.org/downloads/release/p...'
tags: []
published: true
legacyUrl: /2020/02/python-382rc2-is-now-available-for.html
---

Python 3.8.2rc2 is the second release candidate of the second maintenance release of Python 3.8. Go get it here:  
[https://www.python.org/downloads/release/python-382rc2/](https://www.python.org/downloads/release/python-382rc2/)  

  

  

### Why a second release candidate?

The major reason for RC2 is that [GH-16839](https://github.com/python/cpython/pull/16839) has been reverted. The original change was supposed to fix for some edge cases in urlparse (numeric paths, recognizing netlocs without //; details in [BPO-27657](https://bugs.python.org/issue27657)). Unfortunately it broke third parties relying on the pre-existing undefined behavior. Sadly, the reverted fix has already been released as part of 3.8.1 (and 3.7.6 where it’s also reverted now). As such, even though the revert is itself a bug fix, it is incompatible with the behavior of 3.8.1. Please test.  

### Timeline

Assuming no critical problems are found prior to **2020-02-24**, the currently scheduled release date for **3.8.2** (as well as **3.9.0 alpha 4**!), no code changes are planned between this release candidate and the final release. That being said, please keep in mind that this is a pre-release of 3.8.2 and as such its main purpose is testing. Maintenance releases for the 3.8 series will continue at regular bi-monthly intervals, with **3.8.3** planned for April 2020 (during sprints at PyCon US).  

### What’s new?

The Python 3.8 series is the newest feature release of the Python language, and it contains many new features and optimizations. See the “[What’s New in Python 3.8](https://docs.python.org/3.8/whatsnew/3.8.html)” document for more information about features included in the 3.8 series. Detailed information about all changes made in version 3.8.2 specifically can be found in [its change log](https://docs.python.org/release/3.8.2rc2/whatsnew/changelog.html#python-3-8-2-release-candidate-2).  

### We hope you enjoy Python 3.8!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation. [https://www.python.org/psf/](https://www.python.org/psf/)
