---
title: Python 3.13.0 alpha 3 is now available.
publishDate: '2024-01-18'
updatedDate: '2024-01-18'
author: Thomas Wouters
description: 'We silently skipped releasing in December (it was too close to the holidays, a lot of people were away) so by date you may have been expecting alpha 4, but i...'
tags: []
published: true
legacyUrl: /2024/01/python-3130-alpha-3-is-now-available.html
---

We silently skipped releasing in December (it was too close to the holidays, a lot of people were away) so by date you may have been expecting alpha 4, but instead it’s alpha 3:

[https://www.python.org/downloads/release/python-3130a3/](https://www.python.org/downloads/release/python-3130a3/)  

**This is an early developer preview of Python 3.13**

# [](https://discuss.python.org/t/python-3-13-alpha-3/43437#major-new-features-of-the-313-series-compared-to-312-1)Major new features of the 3.13 series, compared to 3.12

Python 3.13 is still in development. This release, 3.13.0a3, is the third of six planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2024-05-07) and, if necessary, may be modified or deleted up until the release candidate phase (2024-07-30). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.13 are still being planned and written. Work continues apace on both the work to [remove the Global Interpreter Lock](https://peps.python.org/pep-0703/) , and to improve Python performance. The most notable changes so far:

-   In the interactive interpreter, [exception tracebacks are now colorized by default](https://docs.python.org/dev/whatsnew/3.13.html#improved-error-messages) .
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/dev/whatsnew/3.13.html#other-language-changes) , reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: `aifc`, `audioop`, `chunk`, `cgi`, `cgitb`, `crypt`, `imghdr`, `mailcap`, `msilib`, `nis`, `nntplib`, `ossaudiodev`, `pipes`, `sndhdr`, `spwd`, `sunau`, `telnetlib`, `uu`, `xdrlib`, `lib2to3`.
-   [Many other removals](https://docs.python.org/dev/whatsnew/3.13.html#removed) of deprecated classes, functions and methods in various standard library modules.
-   [New deprecations](https://docs.python.org/dev/whatsnew/3.13.html#deprecated) , most of which are scheduled for removal from Python 3.15 or 3.16.
-   C API [removals](https://docs.python.org/dev/whatsnew/3.13.html#id10) and [deprecations](https://docs.python.org/dev/whatsnew/3.13.html#id9). (Some removals present in alpha 1 have been reverted in alpha 2, as the removals were deemed too disruptive at this time.)

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

The next pre-release of Python 3.13 will be 3.13.0a4, currently scheduled for 2023-02-13.

# [](https://discuss.python.org/t/python-3-13-alpha-3/43437#more-resources-2)

# More resources

-   [Online Documentation](https://docs.python.org/3.13/)
-   [PEP 719](https://www.python.org/dev/peps/pep-0719/) , 3.13 Release Schedule
-   Report bugs at [Issues · python/cpython · GitHub](https://github.com/python/cpython/issues).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-13-alpha-3/43437#enjoy-the-new-releases-3)

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Regards from snowy Amsterdam, Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
