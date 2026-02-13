---
title: Python 3.9.0rc1 is now available
publishDate: '2020-08-11'
updatedDate: '2020-08-11'
author: Łukasz Langa
description: 'Python 3.9.0 is almost ready. This release, 3.9.0rc1, is the penultimate release preview. You can get it here: https://www.python.org/downloads/release/pytho...'
tags: []
published: true
legacyUrl: /2020/08/python-390rc1-is-now-available.html
---

Python 3.9.0 is almost ready. This release, 3.9.0rc1, is the penultimate release preview. You can get it here:

[https://www.python.org/downloads/release/python-390rc1/](https://www.python.org/downloads/release/python-390rc1/)

Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate and the last planned release preview is currently planned for 2020-09-14.

Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

## Calls to action

#### Core developers: all eyes on the docs now

-   Are all **your** changes properly documented?
-   Did you notice **other** changes you know of to have insufficient documentation?

#### Community members

We strongly encourage maintainers of third-party Python projects to prepare their projects for 3.9 compatibility during this phase. As always, report any issues to [the Python bug tracker](https://bugs.python.org/).

## Installer news

This is the first version of Python to default to the 64-bit installer on Windows. The installer now also actively disallows installation on Windows 7. Python 3.9 is incompatible with this unsupported version of Windows.

## Major new features of the 3.9 series, compared to 3.8

Some of the new major new features and changes in Python 3.9 are:

-   [PEP 584](https://www.python.org/dev/peps/pep-0584/), Union Operators in `dict`
-   [PEP 585](https://www.python.org/dev/peps/pep-0585/), Type Hinting Generics In Standard Collections
-   [PEP 593](https://www.python.org/dev/peps/pep-0593/), Flexible function and variable annotations
-   [PEP 602](https://www.python.org/dev/peps/pep-0602/), Python adopts a stable annual release cadence
-   [PEP 615](https://www.python.org/dev/peps/pep-0615/), Support for the IANA Time Zone Database in the Standard Library
-   [PEP 616](https://www.python.org/dev/peps/pep-0616/), String methods to remove prefixes and suffixes
-   [PEP 617](https://www.python.org/dev/peps/pep-0617/), New PEG parser for CPython
-   [BPO 38379](https://bugs.python.org/issue38379), garbage collection does not block on resurrected objects;
-   [BPO 38692](https://bugs.python.org/issue38692), os.pidfd\_open added that allows process management without races and signals;
-   [BPO 39926](https://bugs.python.org/issue39926), Unicode support updated to version 13.0.0;
-   [BPO 1635741](https://bugs.python.org/issue1635741), when Python is initialized multiple times in the same process, it does not leak memory anymore;
-   A number of Python builtins (range, tuple, set, frozenset, list, dict) are now sped up using [PEP 590](https://www.python.org/dev/peps/pep-0590) vectorcall;
-   A number of Python modules (\_abc, audioop, \_bz2, \_codecs, \_contextvars, \_crypt, \_functools, \_json, \_locale, operator, resource, time, \_weakref) now use multiphase initialization as defined by [PEP 489](https://www.python.org/dev/peps/pep-0489/);
-   A number of standard library modules (audioop, ast, grp, \_hashlib, pwd, \_posixsubprocess, random, select, struct, termios, zlib) are now using the stable ABI defined by [PEP 384](https://www.python.org/dev/peps/pep-0384/).
