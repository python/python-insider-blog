---
title: 3.2.1 Release Candidate 2 Released
publishDate: '2011-07-06'
updatedDate: '2011-07-06'
author: Brian Curtin
description: 'Following up a big month of releases in June, the second release candidate of the 3.2.1 line is now ready. Since the first release candidate on May 15, over ...'
tags: []
published: true
legacyUrl: /2011/07/321-release-candidate-2-released.html
---

Following up a big month of [releases in June](http://blog.python.org/2011/06/june-releases-267-272-314.html), the second release candidate of the 3.2.1 line [is now ready](http://www.python.org/download/releases/3.2.1/). Since the first release candidate on May 15, over 40 issues have been fixed. We encourage everyone to test their projects with this candidate to get one last look before the final release of 3.2.1.

#### What's fixed?

##### I/O

[#1195](http://bugs.python.org/issue1195) spent a few years without a fix, but a simple addition to clear errors before calling fgets solves the problem of interrupting sys.stdin.read() with CTRL-D inside of input(). The io system saw a cleanup in [#12175](http://bugs.python.org/issue12175) with the readall method with None being the return value on a read() which returns None, and a ValueError is now raised when a file can't be opened.

Although this isn't new for RC2, [#11272](http://bugs.python.org/issue11272) is an important 3.2.1 fix to input() on Windows - the fixing of a trailing \\r. The issue has been reported many times over and affects a many people (distutils upload command anyone?), so hopefully 3.2.1 does the trick for you.

##### Windows

3.2.0 brought a new feature for Windows: os.symlink support. With that feature came [#12084](http://bugs.python.org/issue12084), os.stat was improperly evaluating Windows symlinks, so the inner workings of the various stat functions were corrected.

A user noticed that os.path.isdir was slow, and the fact that it relied on os.stat contributed to that, especially when evaluating symlinks (which are generally twice as slow as regular files). While os.path.isdir isn't anyone's performance bottleneck, it's called numerous times on interpreter startup so changing it in [#11583](http://bugs.python.org/issue11583) to use GetFileAttributes gives a tiny speedup to build on.

##### subprocess

Creating a Popen object with unexpected arguments was causing an AttributeError, but that was reported in [#12085](http://bugs.python.org/issue12085) and was fixed by the reporter. Due to a change in 3.2.0, Popen wasn't correctly handling empty environment variables, specifically the env argument. [#12383](http://bugs.python.org/issue12383) was created for the issue and was promptly fixed.

##### ...and more!

For a full list of changes through 3.2.1 RC2, check out [the change log](http://hg.python.org/releasing/3.2.1/file/v3.2.1rc2/Misc/NEWS) and [download it now](http://www.python.org/download/releases/3.2.1/)!

As always, please report any issues you find to [http://bugs.python.org](http://bugs.python.org). We appreciate your help in making great Python releases.
