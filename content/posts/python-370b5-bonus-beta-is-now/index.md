---
title: 'Python 3.7.0b5, a bonus beta, is now available for testing'
publishDate: '2018-05-31'
updatedDate: '2018-05-31'
author: Ned Deily
description: 'A 3.7 update: Python 3.7.0b5 is now the final beta preview of Python 3.7, the next feature release of Python. 3.7.0b4 was intended to be the final beta but, ...'
tags:
  - releases
published: true
legacyUrl: /2018/05/python-370b5-bonus-beta-is-now.html
---

A 3.7 update: Python **[3.7.0b5](https://www.python.org/downloads/release/python-370b5/)** is now the **final beta preview** of **Python 3.7**, the next feature release of Python. 3.7.0b4 *was* intended to be the final beta but, due to some unexpected compatibility issues discovered during beta testing of third-party packages, we decided to revert some changes in how Python's 3.7 [Abstract Syntax Tree parser](https://docs.python.org/3.7/library/ast.html) deals with docstrings; **3.7.0b5** now behaves like 3.6.x and previous releases (refer to [the 3.7.0b5 changelog](https://docs.python.org/3.7/whatsnew/changelog.html#python-3-7-0-beta-5) for more information). **If your code makes use of the ast module, you are strongly encouraged to test (or retest) that code with 3.7.0b5, especially if you previously made changes to work with earlier preview versons of 3.7.0.** As always, please report issues found to [bugs.python.org](https://bugs.python.org/) as soon as possible. Please keep in mind that this is a preview release and its use is not recommended for production environments. *Attention macOS users*: there is now a new installer variant for macOS 10.9+ that includes a built-in version of Tcl/Tk 8.6. This variant is expected to become the default version when 3.7.0 releases. Check it out! The next (and final, we hope!) preview release will be **the release candidate** which is now planned for **2018-06-11** followed by the **official release of 3.7.0,** now planned for **2018-06-27**. You can find Python 3.7.0b5 and more information here:  
[https://www.python.org/downloads/release/python-370b5/](https://www.python.org/downloads/release/python-370b5/)
