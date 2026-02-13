---
title: A Python Launcher For Windows
publishDate: '2011-07-11'
updatedDate: '2011-07-11'
author: Paul Moore
description: 'Mark Hammond (author of pywin32 and long-time supporter of Python on Windows) has written PEP 397, which describes a new launcher for Python on Windows. Vina...'
tags: []
published: true
legacyUrl: /2011/07/python-launcher-for-windows_11.html
---

Mark Hammond (author of [pywin32](http://sourceforge.net/projects/pywin32/) and long-time supporter of Python on Windows) has written [PEP 397](http://www.python.org/dev/peps/pep-0397/), which describes a new launcher for Python on Windows. Vinay Sanjip (author of the standard library [logging](http://docs.python.org/py3k/library/logging.html) module) has recently created an implementation of the launcher, downloadable from [https://bitbucket.org/vinay.sajip/pylauncher/downloads](https://bitbucket.org/vinay.sajip/pylauncher/downloads)

The launcher allows Python scripts (.py and .pyw files) on Windows to specify the version of Python which should be used, allowing simultaneous use of Python 2 and 3.

Windows users should consider downloading the launcher and testing it, to help the Python developers iron out any remaining issues. The launcher is packaged as a standalone application, and will support currently available versions of Python. The intention is that once the launcher is finalised, it will be included as part of Python 3.3 (although it will remain available as a standalone download for users of earlier versions).

Two versions of the launcher are available - launcher.msi which installs in the Program Files directory, and launchsys.msi which installs in Windows' System32 directory. (There are also 64-bit versions for 64-bit versions of Windows).

#### Some Details About the Launcher

The full specification of the behaviour of the launcher is given in [PEP 397](http://www.python.org/dev/peps/pep-0397/). To summarise the basic principles:

-   The launcher supplies two executables - py.exe (the console version) and pyw.exe (the GUI version).
-   The launcher is registered as the handler for .py (console) and .pyw (GUI) file extensions.
-   When executing a script, the launcher looks for a Unix-style #! (shebang) line in the script. It recognises executable names python (system default python), python2 (default Python 2 release) and python3 (default Python 3 release). The precise details can easily be customised on a per-user or per-machine basis.
-   When used standalone, the py.exe command launches the Python interactive interpreter. Command line switches are supported, so that py -2 launches Python 2, py -3 launches Python 3, and py launches the default version.

#### Simple Usage Instructions

When it is installed, the launcher associates itself with .py and .pyw scripts. Unless you do anything else, scripts will be run using the default Python on the machine, so you will see no change. One thing you might like to do, if you use the console a lot, is to add .py to your PATHEXT variable so that scripts don't get executed in a separate console.

To specify that a script must use Python 2, simply add:

#!/usr/bin/env python2

as the first line of the script. (This is a Unix-compatible form. If you don't need Unix compatibility, #!python2 will do).

If on the other hand, you want to specify that a script must use Python 3, add:

#!/usr/bin/env python3

as the first line.

You can also start the Python interpreter using any of the following commands:

\# Default version of Python
py
# Python 2
py -2
# Python 3
py -3

For this to work, the py.exe executable must be on your path. This is automatic with the launchsys version of the installer, but the install directory (C:\\Program Files\\Python Launcher) must be added manually to PATH with launcher.msi.

#### Further Reading

The following email threads on python-dev cover some of the key discussions:

-   Mark's initial announcement of the draft PEP: [http://mail.python.org/pipermail/python-dev/2011-March/109509.html](http://mail.python.org/pipermail/python-dev/2011-March/109509.html)
-   The second draft of the PEP: [http://mail.python.org/pipermail/python-dev/2011-March/109786.html](http://mail.python.org/pipermail/python-dev/2011-March/109786.html)
-   Vinay's initial query about a C implementation of the launcher: [http://mail.python.org/pipermail/python-dev/2011-June/112145.html](http://mail.python.org/pipermail/python-dev/2011-June/112145.html)
-   Vinay's announcement of his C implementation: [http://mail.python.org/pipermail/python-dev/2011-July/112184.html](http://mail.python.org/pipermail/python-dev/2011-July/112184.html)
-   Vinay's call for testers: [http://mail.python.org/pipermail/python-dev/2011-July/112251.html](http://mail.python.org/pipermail/python-dev/2011-July/112251.html)
