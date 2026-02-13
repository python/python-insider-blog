---
title: Python 3.9.0a5 is now available for testing
publishDate: '2020-03-23'
updatedDate: '2020-03-24'
author: Łukasz Langa
description: 'On behalf of the entire Python development community, and the currently serving Python release team in particular, I’m pleased to announce the release of Pyt...'
tags: []
published: true
legacyUrl: /2020/03/python-390a5-is-now-available-for.html
---

On behalf of the entire Python development community, and the currently serving Python release team in particular, I’m pleased to announce the release of Python 3.9.0a5. Get it here:  
[https://www.python.org/downloads/release/python-390a5/](https://www.python.org/downloads/release/python-390a5/)

### This is an early developer preview of Python 3.9

  
Python 3.9 is still in development. This releasee, 3.9.0a5 is the fifth of six planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2020-05-18) and, if necessary, may be modified or deleted up until the release candidate phase (2020-08-10). Please keep in mind that this is a preview release and its use is not recommended for production environments.  

### Major new features of the 3.9 series, compared to 3.8

  
Many new features for Python 3.9 are still being planned and written. Among the new major new features and changes so far:  

-   [PEP 584](https://www.python.org/dev/peps/pep-0584/), Union Operators in `dict`
-   [PEP 593](https://www.python.org/dev/peps/pep-0593/), Flexible function and variable annotations
-   [PEP 602](https://www.python.org/dev/peps/pep-0602/), Python adopts a stable annual release cadence
-   [BPO 38379](https://bugs.python.org/issue38379), garbage collection does not block on resurrected objects;
-   [BPO 38692](https://bugs.python.org/issue38692), os.pidfd\_open added that allows process management without races and signals;
-   [BPO 39926](https://bugs.python.org/issue39926), Unicode support updated to version 13.0.0
-   [BPO 1635741](https://bugs.python.org/issue1635741), when Python is initialized multiple times in the same process, it does not leak memory anymore
-   A number of Python builtins (range, tuple, set, frozenset, list) are now sped up using [PEP 590](https://www.python.org/dev/peps/pep-0590) vectorcall
-   A number of standard library modules (audioop, ast, grp, \_hashlib, pwd, \_posixsubprocess, random, select, struct, termios, zlib) are now using the stable ABI defined by [PEP 384](https://www.python.org/dev/peps/pep-0384/).
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Łukasz know](mailto:lukasz@python.org).)

The next pre-release, the last alpha release of Python 3.9, will be 3.9.0a6. It is currently scheduled for 2020-04-22. Until then, stay safe!
