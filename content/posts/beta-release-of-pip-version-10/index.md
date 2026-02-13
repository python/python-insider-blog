---
title: Beta release of pip version 10
publishDate: '2018-03-31'
updatedDate: '2018-03-31'
author: Paul Moore
description: 'On behalf of the PyPA, I am pleased to announce that a beta release   10.0.0b1 of pip has just been released for testing by the community.   We''re planning o...'
tags: []
published: true
legacyUrl: /2018/03/beta-release-of-pip-version-10.html
---

On behalf of the PyPA, I am pleased to announce that a beta release  
10.0.0b1 of pip has just been released for testing by the community.  
We're planning on a final release in 2 weeks' time, over the weekend  
of 14/15 April. To install pip 10.0.0.b1, you can run python -m pip install --upgrade --pre pip (obviously, you should not do this in a production environment!) We would be grateful for all testing that users could do, to ensure  
that when pip 10 is released it's as solid as we can make it. Highlights of the new release:  

-   Python 2.6 is no longer supported - if you need pip on Python 2.6, you should stay on pip 9, which is the last version to support Python 2.6.
-   Support for PEP 518, which allows projects to specify what packages they require in order to build from source. (PEP 518 support is currently limited, with full support coming in future versions - see the documentation for details).
-   Significant improvements in Unicode handling for non-ASCII locales on Windows.
-   A new "pip config" command.
-   The default upgrade strategy has become "only-if-needed"
-   Many bug fixes and minor improvements.

In addition, the previously announced reorganisation of pip's  
internals has now taken place. Unless you are the author of code that  
imports the pip module (or a user of such code), this change will not  
affect you. If you are, please report the issue to the author of the  
affected code (refer them to  
[https://mail.python.org/pipermail/distutils-sig/2017-October/031642.html](https://mail.python.org/pipermail/distutils-sig/2017-October/031642.html)  
for the details of the announcement). Please note that there is a minor issue with the NEWS file for this  
release - the new features in 10.0.0b1 are reported as being for  
"9.0.3 (2018-03-31)". If you discover any bugs while testing the new release, please report  
them at [https://github.com/pypa/pip/issues](https://github.com/pypa/pip/issues). Thanks to everyone who put so much effort into the new release. Many  
of the contributions came from community members, whether in the form  
of code, participation in design discussions, or bug reports. The pip  
development team is extremely grateful to everyone in the community  
for their contributions. Thanks,  
Paul
