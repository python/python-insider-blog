---
title: Python 3.9.4 hotfix is now available
publishDate: '2021-04-04'
updatedDate: '2021-04-04'
author: Łukasz Langa
description: 'Python 3.9.3 was released two days ago on Friday, April 2nd. It contains important security content listed below for reference. Unfortunately, it also introd...'
tags: []
published: true
legacyUrl: /2021/04/python-394-hotfix-is-now-available.html
---

Python 3.9.3 was released two days ago on Friday, April 2nd. It contains important security content listed below for reference. Unfortunately, it also introduced an unintentional ABI incompatibility, making some C extensions built with Python 3.9.0 - 3.9.2 crash with Python 3.9.3 on 32-bit systems. To minimize disruption, I decided to recall 3.9.3 and introduce this hotfix release: 3.9.4.

**We highly recommend upgrading your Python 3.9 installations to 3.9.4 at your earliest convenience.**

Get it here:

[https://www.python.org/downloads/release/python-394/](https://www.python.org/downloads/release/python-394/)

### What is “ABI compatibility”?

Python guarantees that within a given language series (like the current 3.9) binary extensions written in C or C++ and compiled against headers of one release (like 3.9.0) will be importable from other versions in the same series (like 3.9.3). If this weren’t the case, library authors would have to ship separate binary wheels on PyPI for every single bugfix release of Python. That would be very inconvenient.

### [](https://discuss.python.org/t/python-3-9-4-hotfix-is-now-available/8056#what-broke-in-python-393)What broke in Python 3.9.3?

In a fix for a corner-case crash around recursion limits and exceptions, the PyThreadState struct needed to change. While [PyThreadState’s only documented public member is the `*interp` field](https://docs.python.org/3.9/c-api/init.html#c.PyThreadState), it’s not uncommon for C extensions to access other fields in this struct as well.

When I approved the backport of this fix, I missed the fact that the variable size change would change the memory layout of said struct on 32-bit systems (on 64-bit systems alignment rules made the size change backwards compatible). Merging the backport was a mistake, and so 3.9.4 reverts it to restore compatibility with binary extensions built against Python 3.9.0 - 3.9.2. Details in [bpo-43710](https://bugs.python.org/issue43710).

### [](https://discuss.python.org/t/python-3-9-4-hotfix-is-now-available/8056#security-content-in-python-393)Security Content in Python 3.9.3

-   [bpo-43631](https://bugs.python.org/issue43631): high-severity CVE-2021-3449 and CVE-2021-3450 were published for OpenSSL, it’s been upgraded to 1.1.1k in CI, and macOS and Windows installers.
-   [bpo-42988](https://bugs.python.org/issue42988): CVE-2021-3426: Remove the getfile feature of the pydoc module which could be abused to read arbitrary files on the disk (directory traversal vulnerability). Moreover, even source code of Python modules can contain sensitive data like passwords. Vulnerability reported by David Schwörer.
-   [bpo-43285](https://bugs.python.org/issue43285): ftplib no longer trusts the IP address value returned from the server in response to the PASV command by default. This prevents a malicious FTP server from using the response to probe IPv4 address and port combinations on the client network. Code that requires the former vulnerable behavior may set a trust\_server\_pasv\_ipv4\_address attribute on their ftplib.FTP instances to True to re-enable it.
-   [bpo-43439](https://bugs.python.org/issue43439): Add audit hooks for gc.get\_objects(), gc.get\_referrers() and gc.get\_referents(). Patch by Pablo Galindo.

### [](https://discuss.python.org/t/python-3-9-4-hotfix-is-now-available/8056#release-calendar)Release Calendar

Maintenance releases for the 3.9 series will continue at regular bi-monthly intervals, with **3.9.5** planned for May 3rd 2021 as well.

### [](https://discuss.python.org/t/python-3-9-4-hotfix-is-now-available/8056#whats-new)What’s new?

The Python 3.9 series contains many new features and optimizations over 3.8. See the “[What’s New in Python 3.9](https://docs.python.org/3.9/whatsnew/3.9.html) ” document for more information about features included in the 3.9 series. We also have a [detailed change log for 3.9.3](https://docs.python.org/release/3.9.3/whatsnew/changelog.html) specifically.

Detailed information about all changes made in version 3.8.9 can be found in [its respective changelog](https://docs.python.org/release/3.8.9/whatsnew/changelog.html).

### [](https://discuss.python.org/t/python-3-9-4-hotfix-is-now-available/8056#we-hope-you-enjoy-those-new-releases)We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)
