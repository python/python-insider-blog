---
title: 'June Releases - 2.6.7, 2.7.2, 3.1.4'
publishDate: '2011-06-14'
updatedDate: '2011-06-14'
author: Brian Curtin
description: 'June is a big month for Python releases, with an update coming out of all active branches. 2.6.7 A new source-only release of Python 2.6.7 is available, prov...'
tags: []
published: true
legacyUrl: /2011/06/june-releases-267-272-314.html
---

June is a big month for Python releases, with an update coming out of all active branches.

#### 2.6.7

A new source-only release of Python [2.6.7](http://www.python.org/download/releases/2.6.7/) is available, providing fixes to three security issues. Now that the 2.6 line is in security-mode, these releases will happen on an as-needed basis until October 2013 in source-only form. If you require binary installers, you should consider an upgrade to 2.7 or 3.2.

2.6.7 is the first release to contain a fix to the previously covered [urllib vulnerability](http://blog.python.org/2011/04/urllib-security-vulnerability-fixed.html). Additionally, an smtpd DoS vulnerability (Issue [#9129](http://bugs.python.org/issue9129)) and SimpleHTTPServer.list\_directory XSS vulnerability (Issue [#11442](http://bugs.python.org/issue11442)) are fixed.

#### 2.7.2

The last minor version of the 2.x line, 2.7, received over 150 bug fixes since 2.7.1 in November 2010. [2.7.2](http://www.python.org/download/releases/2.7.2/) source and binary installers are available as of June 12, which include the security fixes mentioned in 2.6.7.

A number of crashes are fixed: a situation when Python incorrectly used non-Python managed memory while it was being modified by another thread, when deleting \_\_abstractmethods\_\_ from a class, accessing a memory-mapped file past its length, and several others.

A fix to getpass corrects a regression in regards to CTRL-C and CTRL-Z handling. multiprocessing received a number of fixes, including treating Windows services like frozen executables and a correction to a race condition when terminating multiprocessing.Pool workers. mmap was fixed to work with file sizes and offsets larger than 4 GB even on 32-bit builds, and a TypeError is now raised rather than segfaulting when trying to write to a non-writeable map.

For a full list of changes, see [the 2.7.2 news file](http://hg.python.org/cpython/raw-file/eb3c9b74884c/Misc/NEWS).

#### 3.1.4

3.1.4 is the last bug-fix release of the 3.1.x line, sending 3.1 into security-mode as the 3.2 line carries on. 3.1.4 contains over 100 bug fixes since the 3.1.3 release in November 2010. As with 2.7.2, binary installers are available as of June 12, and 3.1.4 is the first 3.x release to contain the security fixes listed in 2.6.7.

3.1.4 corrects some problems with \_\_dir\_\_ lookups on objects, dates past 2038 in the Windows implementation of os.stat and os.utime, and a number of 64-bit cleanups. The io library saw a number of changes in returning None when nothing was read and raising appropriate exceptions in other spots. ctypes callback arguments were fixed on 64-bit Windows and a crash was also remedied.

For a full list of changes, see [the 3.1.4 news file](http://hg.python.org/cpython/raw-file/feae9f9e9f30/Misc/NEWS).

#### 3.2.1

[3.2.1](http://www.python.org/download/releases/3.2.1/) is currently in the release candidate phase, with one round already completed and a second release candidate expected soon. We would greatly appreciate 3.2 users trying out the release candidates to ensure we cover any issues you may be seeing. If you have any bugs to report, please file them on [bugs.python.org](http://bugs.python.org).
