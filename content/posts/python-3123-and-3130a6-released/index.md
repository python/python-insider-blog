---
title: Python 3.12.3 and 3.13.0a6 released
publishDate: '2024-04-09'
updatedDate: '2024-04-09'
author: Thomas Wouters
description: '*It’s time to eclipse the Python 3.11.9 release with two releases, one of which is the very last alpha release of Python 3.13: [](https://discuss.python.org/...'
tags: []
published: true
legacyUrl: /2024/04/python-3123-and-3130a6-released.html
---

**It’s time to eclipse the Python 3.11.9 release with *two* releases**, one of which is the *very last alpha release of Python 3.13*:

# [](https://discuss.python.org/t/python-3-12-3-and-3-13-0a6-released/50601#python-3123-1)Python 3.12.3

300+ of the finest commits went into this latest maintenance release of the latest Python version, the most stablest, securest, bugfreeest we could make it.

[https://www.python.org/downloads/release/python-3123/](https://www.python.org/downloads/release/python-3123/)

# [](https://discuss.python.org/t/python-3-12-3-and-3-13-0a6-released/50601#python-3130a6-2)Python 3.13.0a6

What’s that? The last alpha release? Just one more month until feature freeze! Get your features done, get your bugs fixed, let’s get 3.13.0 ready for people to actually use! Until then, let’s test with alpha 6. The highlights of 3.13 you ask? Well:

-   In the interactive interpreter, [exception tracebacks are now colorized by default](https://docs.python.org/dev/whatsnew/3.13.html#improved-error-messages).
-   A [preliminary, *experimental* JIT was added](https://docs.python.org/dev/whatsnew/3.13.html#experimental-jit-compiler), providing the ground work for significant performance improvements.
-   The (cyclic) garbage collector is now [incremental](https://docs.python.org/dev/whatsnew/3.13.html#incremental-garbage-collection), which should mean shorter pauses for collection in programs with a lot of objects.
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/dev/whatsnew/3.13.html#other-language-changes), reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   The [dbm module](https://docs.python.org/dev/library/dbm.html) has a new [dbm.sqlite3 backend](https://docs.python.org/dev/whatsnew/3.13.html#id1) that is used by default when creating new files.
-   [PEP 594 (Removing dead batteries from the standard library)](https://peps.python.org/pep-0594/) scheduled removals of many deprecated modules: `aifc`, `audioop`, `chunk`, `cgi`, `cgitb`, `crypt`, `imghdr`, `mailcap`, `msilib`, `nis`, `nntplib`, `ossaudiodev`, `pipes`, `sndhdr`, `spwd`, `sunau`, `telnetlib`, `uu`, `xdrlib`, `lib2to3`.
-   [Many other removals](https://docs.python.org/dev/whatsnew/3.13.html#removed) of deprecated classes, functions and methods in various standard library modules.
-   [New deprecations](https://docs.python.org/dev/whatsnew/3.13.html#deprecated), most of which are scheduled for removal from Python 3.15 or 3.16.
-   C API [removals](https://docs.python.org/dev/whatsnew/3.13.html#id10) and [deprecations](https://docs.python.org/dev/whatsnew/3.13.html#id9). (Some removals present in alpha 1 were reverted in alpha 2, as the removals were deemed too disruptive at this time.)

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org). It’s getting to be really important now!)

[https://www.python.org/downloads/release/python-3130a6/](https://www.python.org/downloads/release/python-3130a6/)

  

# [](https://discuss.python.org/t/python-3-12-3-and-3-13-0a6-released/50601#we-hope-you-enjoy-the-new-releases-3)We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself, or through contributions to [the Python Software Foundation](https://www.python.org/psf-landing/) or [CPython itself](https://github.com/sponsors/python).

Thomas “can you tell I haven’t had coffee today” Wouters  
on behalf of your release team,

Ned Deily  
Steve Dower  
Pablo Galindo Salgado  
Łukasz Langa
