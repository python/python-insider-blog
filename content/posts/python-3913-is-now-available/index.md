---
title: Python 3.9.13 is now available
publishDate: '2022-05-17'
updatedDate: '2022-05-17'
author: Łukasz Langa
description: 'This is the thirteenth maintenance release of Python 3.9. Get it here:   Python 3.9.13 According to the release calendar specified in PEP 596, Python 3.9.13 ...'
tags: []
published: true
legacyUrl: /2022/05/python-3913-is-now-available.html
---

This is the thirteenth maintenance release of Python 3.9. Get it here:[  
Python 3.9.13](https://www.python.org/downloads/release/python-3913/)

According to the release calendar specified in [PEP 596](https://www.python.org/dev/peps/pep-0596/), Python 3.9.13 is the **final** regular maintenance release. Starting now, the 3.9 branch will only accept security fixes and releases of those will be made in source-only form until October 2025.

This is a milestone moment for me as it means that now both of my release series are security-only. My work as release manager enters its final stage. I’m not crying, *you’re* crying! ![:smiling_face_with_tear:](./image-1.png)

Compared to the 3.8 series, this last regular bugfix release is still pretty active at 166 commits since 3.9.12. In comparison, version 3.8.10, the final regular bugfix release of Python 3.8, included only 92 commits. However, it’s likely that it was 3.8 that was special here with the governance changes occupying core developers’ minds. For reference, version 3.7.8, the final regular bugfix release of Python 3.7, included 187 commits.

In any case, 166 commits is quite a few changes, some of which being pretty important fixes. Take a look at the [change log](https://docs.python.org/release/3.9.13/whatsnew/changelog.html) for details.

### [](https://discuss.python.org/t/python-3-9-13-is-now-available/15815#major-new-features-of-the-39-series-compared-to-38-1)Major new features of the 3.9 series, compared to 3.8

Some of the new major new features and changes in Python 3.9 are:

-   [PEP 573](https://www.python.org/dev/peps/pep-0573/), Module State Access from C Extension Methods
-   [PEP 584](https://www.python.org/dev/peps/pep-0584/), Union Operators in `dict`
-   [PEP 585](https://www.python.org/dev/peps/pep-0585/), Type Hinting Generics In Standard Collections
-   [PEP 593](https://www.python.org/dev/peps/pep-0593/), Flexible function and variable annotations
-   [PEP 602](https://www.python.org/dev/peps/pep-0602/), Python adopts a stable annual release cadence
-   [PEP 614](https://www.python.org/dev/peps/pep-0614/), Relaxing Grammar Restrictions On Decorators
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

You can find a more comprehensive list in this release’s “[What’s New](https://docs.python.org/release/3.9.13/whatsnew/3.9.html)” document.

### [](https://discuss.python.org/t/python-3-9-13-is-now-available/15815#we-hope-you-enjoy-python-39-2)We hope you enjoy Python 3.9!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
