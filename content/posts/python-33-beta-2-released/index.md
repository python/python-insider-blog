---
title: Python 3.3 Beta 2 Released
publishDate: '2012-08-14'
updatedDate: '2012-08-14'
author: Brian Curtin
description: 'Release manager Georg Brandl announced on August 12 that the second beta of CPython 3.3 was released, complete with installers for both Mac and Windows. This...'
tags:
  - '3'
  - releases
published: true
legacyUrl: /2012/08/python-33-beta-2-released.html
---

Release manager Georg Brandl announced on August 12 that [the second beta of CPython 3.3 was released](http://www.python.org/download/releases/3.3.0/), complete with installers for both Mac and Windows. This release represents the final feature set, and the goal is to get it in the hands of users to iron out any last issues.

Following this beta will be two release candidates, coming August 25 and September 8. The final release is slated to happen on September 22.

The "[What's New in Python 3.3](http://docs.python.org/dev/whatsnew/3.3.html)" document is currently being finalized by curator and long time developer Raymond Hettinger. The document already contains many of the new changes, but keep an eye out for newer versions.

Here are some of the bigger changes:

-   [PEP 380](http://python.org/dev/peps/pep-0380), syntax for delegating to a subgenerator ("yield from")
-   [PEP 393](http://python.org/dev/peps/pep-0393), flexible string representation (doing away with the distinction between "wide" and "narrow" Unicode builds)
-   A [C implementation of the "decimal" module](http://bugs.python.org/issue7652), with up to 80x speedup for decimal-heavy applications
-   The import system (\_\_import\_\_) [now based on importlib](http://bugs.python.org/issue2377) by default
-   The new "[lzma](http://docs.python.org/dev/library/lzma)" module with LZMA/XZ support
-   [PEP 397](http://python.org/dev/peps/pep-0397), a Python launcher for Windows
-   [PEP 405](http://python.org/dev/peps/pep-0405), virtual environment support in core
-   [PEP 420](http://python.org/dev/peps/pep-0420), namespace package support
-   [PEP 3151](http://python.org/dev/peps/pep-3151), reworking the OS and IO exception hierarchy
-   [PEP 3155](http://python.org/dev/peps/pep-3155), qualified name for classes and functions
-   [PEP 409](http://python.org/dev/peps/pep-0409), suppressing exception context
-   [PEP 414](http://python.org/dev/peps/pep-0414), explicit Unicode literals to help with porting
-   [PEP 418](http://python.org/dev/peps/pep-0418), extended platform-independent clocks in the "time" module
-   [PEP 412](http://python.org/dev/peps/pep-0412), a new key-sharing dictionary implementation that significantly saves memory for object-oriented code
-   [PEP 362](http://python.org/dev/peps/pep-0361), the function-signature object
-   The new "[faulthandler](http://docs.python.org/dev/library/faulthandler)" module that helps diagnosing crashes
-   The new "[unittest.mock](http://docs.python.org/dev/library/unittest.mock)" module
-   The new "[ipaddress](http://docs.python.org/dev/library/ipaddress)" module
-   The "[sys.implementation](http://docs.python.org/dev/library/sys#sys.implementation)" attribute
-   A policy framework for the email package, with a provisional (see [PEP 411](http://python.org/dev/peps/pep-0411)) policy that adds much improved unicode support for email header parsing
-   A "[collections.ChainMap](http://docs.python.org/dev/library/collections#collections.ChainMap)" class for linking mappings to a single unit
-   Wrappers for many more POSIX functions in the "os" and "signal" modules, as well as other useful functions such as "sendfile()"
-   Hash randomization, introduced in earlier bugfix releases, is now switched on by default

In total, almost 500 API items are new or improved in Python 3.3.

Be sure to check out this release at [http://www.python.org/download/releases/3.3.0/](http://www.python.org/download/releases/3.3.0/) and report any issues to [http://bugs.python.org](http://bugs.python.org).
