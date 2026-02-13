---
title: Expedited release of Python3.11.0b3
publishDate: '2022-06-01'
updatedDate: '2022-06-01'
author: Pablo Galindo
description: 'Due to a known incompatibility with pytest and the previous beta release (Python 3.11.0b2) and after some deliberation, I and the rest of the release team ha...'
tags: []
published: true
legacyUrl: /2022/06/expedited-release-of-python3110b3.html
---

Due to a known incompatibility with pytest and the previous beta release (Python 3.11.0b2) and after some deliberation, I and the rest of the release team have decided to do an expedited release of Python 3.11.0b3 so the community can continue testing their packages with pytest and therefore testing the betas as expected.

### Where can I get the new release?

[https://]( https://www.python.org/downloads/release/python-3110b3/)[www.python.org/downloads/release/python-3110b3/]( https://www.python.org/downloads/release/python-3110b3/)

### What happened?

Pytest by default rewrites the AST nodes in the testing code to provide better diagnostics when something fails in the test. For doing this, it creates new AST nodes that are then compiled. In Python 3.11, after some changes in the compiler and AST nodes, these new AST nodes that pytest was creating were invalid. This causes CPython to crash in debug mode because we have several assert statements in the compiler, but in release mode this doesn't cause always a crash, but it creates potential corrupted structures in the compiler silently. In 3.11.0b3 we changed the compiler to reject invalid AST nodes, so what was a silent problem and a crash in debug mode turned into an exception being raised.

We had a fix to allow the nodes that pytest is creating to work to preserve backwards compatibility but unfortunately, it didn't make it into 3.11.0b2. Is still possible to use pytest with 3.11.0b2 if you add "--assert=plain" to the pytest invocation but given how many users would have to modify their test suite invocation we decided to proceed with a new release that has the fix.

### What happens with future beta releases

Python 3.11.0b3 should be considered as an extra beta release. Instead of four beta releases, we will have five and the next beta release (3.11.0b4) will happen as scheduled on Thursday, 2022-06-16.

### We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
