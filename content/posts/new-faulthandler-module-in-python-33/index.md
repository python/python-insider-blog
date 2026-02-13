---
title: New faulthandler module in Python 3.3 helps debugging
publishDate: '2011-05-26'
updatedDate: '2011-05-26'
author: haypo
description: 'When a user reports that your program crashes or hangs, sometimes you can only help to try and collect more information and outline a scenario to reproduce t...'
tags: []
published: true
legacyUrl: /2011/05/new-faulthandler-module-in-python-33.html
---

When a user reports that your program crashes or hangs, sometimes you can only help to try and collect more information and outline a scenario to reproduce the situation. Even with a reliable user scenario, as a developer you are often unable to reproduce the situation due to environment differences, e.g., operating system and compiler. If you are lucky, the user will be able to install debug tools, but most of time you will have to wait until another person is able to obtain more information from the same situation.

#### Fatal Errors

A new module introduced in Python 3.3 should help this problem: [faulthandler](http://docs.python.org/dev/library/faulthandler.html). faulthandler provides the ability to dump the Python traceback on a fatal error such as a segmentation fault, division by zero, abort, or bus error. You can enable it inside your application using faulthandler.enable(), by providing the \-X faulthandler option to the Python executable, or with the [PYTHONFAULTHANDLER=1](http://docs.python.org/dev/using/cmdline.html#envvar-PYTHONFAULTHANDLER) environment variable. Output example:

Fatal Python error: Segmentation fault

Current thread 0x00007f7babc6b700:
  File "Lib/test/crashers/gc\_inspection.py", line 29 in g
  File "Lib/test/crashers/gc\_inspection.py", line 32 in <module>
Segmentation fault

#### Timeout

faulthandler can also dump the traceback after a timeout using faulthandler.dump\_tracebacks\_later(timeout). Call it again to restart the timer or call faulthandler.cancel\_dump\_tracebacks\_later() to stop the timer. Output example:

Timeout (0:01:00)!
Current thread 0x00007f987d459700:
  File "Lib/test/crashers/infinite\_loop\_re.py", line 20 in <module>

Use the repeat=True option to dump the traceback each timeout seconds, or exit=True to immediately exit the program in an unsafe fashion, e.g. don't flush files.

#### User Signal

If you have access to the host on which the program is running, you can use faulthandler.register(signal) to install a signal handler to dump the traceback when signal is received. On UNIX, for example, you can use the SIGUSR1 signal: kill -USR1 <pid> will dump the current traceback. This feature is not available on Windows. Output example:

Current thread 0x00007fdc3da74700:
  File "Lib/test/crashers/infinite\_loop\_re.py", line 19 in <module>

Another possibility is to explicitly call faulthandler.dump\_traceback() in your program.

#### Security Issues and the Output File

faulthandler is disabled by default for security reasons, mainly because it stores the file descriptor of sys.stderr and writes the tracebacks into this file descriptor. If sys.stderr is closed and the file descriptor is reused, the file descriptor may be a socket, a pipe, a critical file or something else. By default, faulthandler writes the tracebacks to sys.stderr, but you can specify another file. For more information, see the [faulthandler documentation](http://docs.python.org/dev/library/faulthandler.html#file-descriptor-issue).

#### Third-party Module for Older Python Versions

faulthandler is also maintained as a third-party module for Python 2.5 through 3.2 [on PyPI](http://pypi.python.org/pypi/faulthandler/). The major difference between the Python 3.3 module and the third-party module is the implementation of dump\_tracebacks\_later(): Python 3.3 uses a thread with a timeout on a lock, whereas the third party uses SIGALRM and alarm().

The lock timeout, which is a new feature of Python 3.3, has a microsecond resolution. The alarm() timer used on older versions has a resolution of one second, and the SIGALRM signal may interrupt the current system call which will fail with an EINTR error.

#### Early Success

The new faulthandler module has already helped with tracking down race conditions in [our buildbots](http://www.python.org/dev/buildbot/). We hope that it will also help you in your programs.
