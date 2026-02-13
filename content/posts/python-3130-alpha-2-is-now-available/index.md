---
title: Python 3.13.0 alpha 2 is now available
publishDate: '2023-11-23'
updatedDate: '2023-11-23'
author: Thomas Wouters
description: 'Well, well, well, it’s time for Python 3.13.0 alpha 2! https://www.python.org/downloads/release/python-3130a2/ This is an early developer preview of Python 3...'
tags: []
published: true
legacyUrl: /2023/11/python-3130-alpha-2-is-now-available.html
---

Well, well, well, it’s time for Python 3.13.0 alpha 2!

[https://www.python.org/downloads/release/python-3130a2/](https://www.python.org/downloads/release/python-3130a2/)

**This is an early developer preview of Python 3.13**

# [](https://discuss.python.org/t/python-3-13-0-alpha-1/36109#major-new-features-of-the-313-series-compared-to-312-1)

# Major new features of the 3.13 series, compared to 3.12

Python 3.13 is still in development. This release, 3.13.0a2 is the second of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2024-05-07) and, if necessary, may be modified or deleted up until the release candidate phase (2024-07-30). Please keep in mind that this is a preview release and its use is not recommended for production environments. Many new features for Python 3.13 are still being planned and written. The most notable change so far:

-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: aifc, audioop, chunk, cgi, cgitb, crypt, imghdr, mailcap, msilib, nis, nntplib, ossaudiodev, pipes, sndhdr, spwd, sunau, telnetlib, uu, xdrlib, lib2to3.
-   [Many other removals](https://docs.python.org/dev/whatsnew/3.13.html#removed) of deprecated classes, functions and methods in various standard library modules.
-   [New deprecations](https://docs.python.org/dev/whatsnew/3.13.html#deprecated), most of which are scheduled for removal from Python 3.15 or 3.16.
-   C API [removals](https://docs.python.org/dev/whatsnew/3.13.html#id10) and [deprecations](https://docs.python.org/dev/whatsnew/3.13.html#id9). (Some removals present in alpha 1 have been reverted in alpha 2, as the removals were deemed too disruptive at this time.)

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

The next pre-release of Python 3.13 will be 3.13.0a3, currently scheduled for 2023-12-19.

# [](https://discuss.python.org/t/python-3-13-0-alpha-1/36109#more-resources-2)

# More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://www.python.org/dev/peps/pep-0719/), 3.13 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues).
-   [Help fund Python and its community](https://discuss.python.org/psf/donations/).  
    

# [](https://discuss.python.org/t/python-3-13-0-alpha-1/36109#enjoy-the-new-releases-3)

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Regards from lovely Czechia,

Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
