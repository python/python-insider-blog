---
title: Python 3.9.0rc2 is now available for testing
publishDate: '2020-09-17'
updatedDate: '2020-09-17'
author: Łukasz Langa
description: 'Python 3.9.0 is almost ready. This release, 3.9.0rc2, is the last planned preview before the final release of Python 3.9.0 on 2020-10-05. Get it here: https:...'
tags: []
published: true
legacyUrl: /2020/09/python-390rc2-is-now-available-for.html
---

Python 3.9.0 is **almost** ready. This release, **3.9.0rc2**, is the last planned preview before the final release of Python 3.9.0 on 2020-10-05. Get it here:

[https://www.python.org/downloads/release/python-390rc2/](https://www.python.org/downloads/release/python-390rc2/)

In the mean time, we **strongly encourage** maintainers of third-party Python projects to prepare their projects for 3.9 compatibility during this phase. As always, report any issues to [the Python bug tracker](https://bugs.python.org/).

Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

## Information for core developers

The 3.9 branch is now accepting changes for 3.9.1. To maximize stability, the final release will be cut from the v3.9.0rc2 tag. If you need the release manager to cherry-pick any critical fixes, mark issues as release blockers and/or add him as a reviewer on a critical backport PR on GitHub.

To see which changes are currently cherry-picked for inclusion in 3.9.0, look at the short-lived [branch-v3.9.0](https://github.com/python/cpython/tree/branch-v3.9.0) on GitHub.

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

## More resources

-   [Online Documentation](https://docs.python.org/3.9/)
-   [PEP 596](https://www.python.org/dev/peps/pep-0596/), 3.9 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
