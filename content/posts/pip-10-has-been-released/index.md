---
title: Pip 10 has been released
publishDate: '2018-04-14'
updatedDate: '2018-04-14'
author: Paul Moore
description: 'On behalf of the PyPA, I am pleased to announce that pip 10.0 has just been released. This release has been the culmination of many months of work by the com...'
tags: []
published: true
legacyUrl: /2018/04/pip-10-has-been-released.html
---

On behalf of the PyPA, I am pleased to announce that pip 10.0 has just been released. This release has been the culmination of many months of work by the community. To install pip 10.0, you can run python -m pip install --upgrade pip  
or use get-pip, as described in https://pip.pypa.io/en/latest/installing. If you are using a version of pip supplied by your distribution vendor, vendor-supplied upgrades will be available in due course (or you can use pip 10 in a virtual environment). (One minor issue with using get-pip on Windows - when you download get-pip.py, rename it to something that doesn't include "pip" in the name, such as "gp.py", as the standard name triggers a check in pip that aborts the run - this is being tracked in https://github.com/pypa/pip/issues/5219). Highlights of the new release:  

-   Python 2.6 is no longer supported - if you need pip on Python 2.6, you should stay on pip 9, which is the last version to support Python 2.6.
-   Support for PEP 518, which allows projects to specify what packages they require in order to build from source. (PEP 518 support is currently limited, with full support coming in future versions - see the documentation for details).
-   Significant improvements in Unicode handling for non-ASCII locales on Windows.
-   A new "pip config" command.
-   The default upgrade strategy has become "only-if-needed"
-   Many bug fixes and minor improvements.

In addition, the previously announced reorganisation of pip's  
internals has now taken place. Unless you are the author of code that  
imports the pip module (or a user of such code), this change will not  
affect you. If you are affected, please report the issue to the author of the  
offending code (refer them to  
https://mail.python.org/pipermail/distutils-sig/2017-October/031642.html  
for the details of the announcement). Thanks to everyone who put so much effort into the new release. Many  
of the contributions came from community members, whether in the form  
of code, participation in design discussions, or bug reports. The pip  
development team is extremely grateful to everyone in the community  
for their contributions. Thanks,  
Paul
