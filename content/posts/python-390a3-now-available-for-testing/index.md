---
title: Python 3.9.0a3 now available for testing
publishDate: '2020-01-25'
updatedDate: '2020-01-25'
author: Łukasz Langa
description: 'Go get it here: https://www.python.org/downloads/release/python-390a3/ This is an early developer preview of Python 3.9 Python 3.9 is still in development. T...'
tags: []
published: true
legacyUrl: /2020/01/python-390a3-now-available-for-testing.html
---

Go get it here: [https://www.python.org/downloads/release/python-390a3/](https://www.python.org/downloads/release/python-390a3/)

## This is an early developer preview of Python 3.9

Python 3.9 is still in development. This releasee, 3.9.0a3 is the third of six planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2020-05-18) and, if necessary, may be modified or deleted up until the release candidate phase (2020-08-10). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

## Major new features of the 3.9 series, compared to 3.8

Many new features for Python 3.9 are still being planned and written. Among the new major new features and changes so far:  

-   [PEP 602](https://www.python.org/dev/peps/pep-0602/), Python adopts a stable annual release cadence
-   [BPO 38379](https://bugs.python.org/issue38379), garbage collection does not block on resurrected objects;
-   [BPO 38692](https://bugs.python.org/issue38692), os.pidfd\_open added that allows process management without races and signals;
-   A number of standard library modules (audioop, ast, grp, \_hashlib, pwd, \_posixsubprocess, random, select, struct, termios, zlib) are now using the stable ABI defined by [PEP 384](https://www.python.org/dev/peps/pep-0384/).
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Łukasz know](mailto:lukasz@python.org).)

  
The next pre-release of Python 3.9 will be 3.9.0a4, currently scheduled for 2020-02-17.
