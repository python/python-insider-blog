---
title: 'Python 3.13.5 is now available!'
publishDate: '2025-06-11'
updatedDate: '2025-06-11'
author: Thomas Wouters
description: 'When I was younger we would call this a brown paper bag release, but actually, we shouldn’t hide from our mistakes. We’re only human. So, please enjoy: [](ht...'
tags: []
published: true
legacyUrl: /2025/06/python-3135-is-now-available.html
---

When I was younger we would call this a brown paper bag release, but actually, we shouldn’t hide from our mistakes. We’re only human. So, please enjoy:

# [](https://discuss.python.org/t/python-3-13-5-is-now-available-yes-really/95211#p-254481-python-3135-1)Python 3.13.5

[https://www.python.org/downloads/release/python-3135/](https://www.python.org/downloads/release/python-3135/)

### [](https://discuss.python.org/t/python-3-13-5-is-now-available-yes-really/95211#p-254481-this-is-the-fifth-maintenance-release-of-python-313-2)

### This is the fifth maintenance release of Python 3.13

Python 3.13 is the newest major release of the Python programming language, and it contains many new features and optimizations compared to Python 3.12. 3.13.5 is the fifth maintenance release of 3.13.

3.13.5 is an expedited release to fix a couple of significant issues with the 3.13.4 release:

-   [gh-135151](https://github.com/python/cpython/issues/135151): Building extension modules on Windows for the regular (non-free-threaded) build failed.
-   [gh-135171](https://github.com/python/cpython/issues/135171): Generator expressions stopped raising `TypeError` (when iterating over non-iterable objects) at creation time, delaying it to first use.
-   [gh-135326](https://github.com/python/cpython/issues/135326): Passing int-like objects (like `numpy.int64`) to `random.getrandbits()` failed, when it worked before.

Several other bug fixes (which would otherwise have waited until the next release) are also included. Special thanks to everyone who worked hard the last couple of days to fix these issues as quickly as possible.

[Full Changelog](https://docs.python.org/release/3.13.5/whatsnew/changelog.html#python-3-13-5)

### [](https://discuss.python.org/t/python-3-13-5-is-now-available-yes-really/95211#p-254481-more-resources-3)More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://peps.python.org/pep-0719/), 3.13 Release Schedule (not that you’ll find this release on there yet.)
-   Report bugs via [GitHub](https://github.com/python/cpython/issues).
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or [via GitHub Sponsors](https://github.com/sponsors/python)), and support [the Python community](https://www.python.org/psf/donations/).

### [](https://discuss.python.org/t/python-3-13-5-is-now-available-yes-really/95211#p-254481-stay-safe-and-upgrade-4)

### Stay safe and upgrade!

As always, upgrading is highly recommended to all users of 3.13.

### [](https://discuss.python.org/t/python-3-13-5-is-now-available-yes-really/95211#p-254481-enjoy-the-new-releases-5)

### Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Regards from hey, it’s us again, your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
