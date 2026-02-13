---
title: 'Python 3.8.5 released as a security hotfix. 3.9.0b5, the last beta before 3.9.0, also available'
publishDate: '2020-07-21'
updatedDate: '2020-07-21'
author: Łukasz Langa
description: 'This is a combined release of Python 3.8.5 and 3.9.0b5. Both are significant but for different reasons. Let’s dig in! Security content in 3.8.5 We decided to...'
tags: []
published: true
legacyUrl: /2020/07/python-385-released-as-security-hotfix.html
---

This is a combined release of Python 3.8.5 and 3.9.0b5. Both are significant but for different reasons. Let’s dig in!

# Security content in 3.8.5

We decided to release 3.8.5 ahead of schedule due to a number of security-related fixes. All details can be found in [the change log](https://docs.python.org/release/3.8.5/whatsnew/changelog.html#changelog) but the gist is:  

-   [CVE-2019-20907](https://bugs.python.org/issue39017): infinite loop in a maliciously created .tar file
-   [BPO-41288](https://bugs.python.org/issue41288): segmentation fault during unpickling of objects using a crafted NEWOBJ\_EX opcode
-   [BPO-39603](https://bugs.python.org/issue39603): HTTP headers could be injected through a maliciously crafted `method` parameter in `http.client`
-   the original fix for CVE-2020-15801 caused a regression in 3.8.4 (see: [BPO-41304](https://bugs.python.org/issue41304))

A small number of other urgent regression fixes and quality-of-life improvements are also present in the release. Get the release here: [https://www.python.org/downloads/release/python-385/](https://www.python.org/downloads/release/python-385/) Maintenance releases for the 3.8 series will continue at the regular bi-monthly calendar, with **3.8.6** planned for mid-September 2020.

# The last beta of Python 3.9.0 now also available

Python 3.9 is still in development. This release, 3.9.0b5, is **the last** of five planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release. You can get 3.9.0b5 here: [https://www.python.org/downloads/release/python-390b5/](https://www.python.org/downloads/release/python-390b5/) The next pre-release, the first release candidate of Python 3.9.0, will be 3.9.0rc1. It is currently scheduled for 2020-08-10.

### Call to action

We **strongly encourage** maintainers of third-party Python projects to **test with 3.9** during the beta phase and report issues found to [the Python bug tracker](https://bugs.python.org/) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (2020-08-10). Our goal is have no ABI changes after beta 5 and as few code changes as possible after 3.9.0rc1, the first release candidate. To achieve that, it will be extremely important to get as much exposure for 3.9 as possible during the beta phase.  
Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

### A reminder for core developers

To help make Python 3.9.0 the best possible release, our [Development Cycle](https://devguide.python.org/devcycle/#release-candidate-rc) section of the Python Developer’s Guide documents that:  

> A branch preparing for an RC release can only have bugfixes applied that have been reviewed by other core developers. Generally, these issues must be severe enough (e.g. crashes) that they deserve fixing before the final release. All other issues should be deferred to the next development cycle, since stability is the strongest concern at this point.  
> You **cannot** skip the peer review during an RC, no matter how small! Even if it is a simple copy-and-paste change, **everything** requires peer review from a core developer.

  

### Major new features of the 3.9 series, compared to 3.8

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
    
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Łukasz know](mailto:lukasz@python.org).)

### We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation. Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
