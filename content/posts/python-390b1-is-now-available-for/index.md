---
title: Python 3.9.0b1 is now available for testing
publishDate: '2020-05-19'
updatedDate: '2020-05-19'
author: Łukasz Langa
description: 'On behalf of the entire Python development community, and the currently serving Python release team in particular, I’m pleased to announce the release of Pyt...'
tags: []
published: true
legacyUrl: /2020/05/python-390b1-is-now-available-for.html
---

On behalf of the entire Python development community, and the currently serving Python release team in particular, I’m pleased to announce the release of Python 3.9.0b1. Get it here: [https://www.python.org/downloads/release/python-390b1/](https://www.python.org/downloads/release/python-390b1/)  

## This is a beta preview of Python 3.9

Python 3.9 is still in development. This release, 3.9.0b1, is the first of four planned beta release previews.  
Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

## Call to action

We **strongly encourage** maintainers of third-party Python projects to **test with 3.9** during the beta phase and report issues found to [the Python bug tracker](https://bugs.python.org/) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (2020-08-10). Our goal is have no ABI changes after beta 4 and as few code changes as possible after 3.9.0rc1, the first release candidate. To achieve that, it will be extremely important to get as much exposure for 3.9 as possible during the beta phase.  
Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

## Major new features of the 3.9 series, compared to 3.8

Some of the new major new features and changes in Python 3.9 are:  

-   [PEP 584](https://www.python.org/dev/peps/pep-0584/), Union Operators in `dict`  
    
-   [PEP 585](https://www.python.org/dev/peps/pep-0585/), Type Hinting Generics In Standard Collections  
    
-   [PEP 593](https://www.python.org/dev/peps/pep-0593/), Flexible function and variable annotations  
    
-   [PEP 602](https://www.python.org/dev/peps/pep-0602/), Python adopts a stable annual release cadence  
    
-   [PEP 616](https://www.python.org/dev/peps/pep-0616/), String methods to remove prefixes and suffixes  
    
-   [PEP 617](https://www.python.org/dev/peps/pep-0617/), New PEG parser for CPython  
    
-   [BPO 38379](https://bugs.python.org/issue38379), garbage collection does not block on resurrected objects;  
    
-   [BPO 38692](https://bugs.python.org/issue38692), os.pidfd\_open added that allows process management without races and signals;  
    
-   [BPO 39926](https://bugs.python.org/issue39926), Unicode support updated to version 13.0.0;  
    
-   [BPO 1635741](https://bugs.python.org/issue1635741), when Python is initialized multiple times in the same process, it does not leak memory anymore;  
    
-   A number of Python builtins (range, tuple, set, frozenset, list, dict) are now sped up using [PEP 590](https://www.python.org/dev/peps/pep-0590) vectorcall;  
    
-   A number of Python modules (\_abc, audioop, \_bz2, \_codecs, \_contextvars, \_crypt, \_functools, \_json, \_locale, operator, resource, time, \_weakref) now use multiphase initialization as defined by [PEP 489](https://www.python.org/dev/peps/pep-0489/);  
    
-   A number of standard library modules (audioop, ast, grp, \_hashlib, pwd, \_posixsubprocess, random, select, struct, termios, zlib) are now using the stable ABI defined by [PEP 384](https://www.python.org/dev/peps/pep-0384/).  
    
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Łukasz know](mailto:lukasz@python.org).)  
    

The next pre-release, the second beta release of Python 3.9, will be 3.9.0b2. It is currently scheduled for 2020-06-08.

## More resources

-   [Online Documentation](https://docs.python.org/3.9/)
-   [PEP 596](https://www.python.org/dev/peps/pep-0596/), 3.9 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://discuss.python.org/psf/donations/).

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
