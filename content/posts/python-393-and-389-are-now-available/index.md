---
title: Python 3.9.3 and 3.8.9 are now available
publishDate: '2021-04-02'
updatedDate: '2021-04-04'
author: Łukasz Langa
description: 'Those are expedited security releases, recommended to all users. Get them here: https://www.python.org/downloads/release/python-389/ Note: 3.9.3 has been rec...'
tags: []
published: true
legacyUrl: /2021/04/python-393-and-389-are-now-available.html
---

Those are expedited security releases, recommended to all users. Get them here:

[https://www.python.org/downloads/release/python-389/](https://www.python.org/downloads/release/python-389/)

Note: 3.9.3 has been recalled due to introducing unintentional ABI incompatibility. Download 3.9.4 instead: [https://www.python.org/downloads/release/python-394/](https://www.python.org/downloads/release/python-394/).  

### Security Content

-   [bpo-43631](https://bugs.python.org/issue43631): high-severity CVE-2021-3449 and CVE-2021-3450 were published for OpenSSL, it’s been upgraded to 1.1.1k in CI, and macOS and Windows installers.
-   [bpo-42988](https://bugs.python.org/issue42988): CVE-2021-3426: Remove the getfile feature of the pydoc module which could be abused to read arbitrary files on the disk (directory traversal vulnerability). Moreover, even source code of Python modules can contain sensitive data like passwords. Vulnerability reported by David Schwörer.
-   [bpo-43285](https://bugs.python.org/issue43285): ftplib no longer trusts the IP address value returned from the server in response to the PASV command by default. This prevents a malicious FTP server from using the response to probe IPv4 address and port combinations on the client network. Code that requires the former vulnerable behavior may set a trust\_server\_pasv\_ipv4\_address attribute on their ftplib.FTP instances to True to re-enable it.
-   [bpo-43439](https://bugs.python.org/issue43439): Add audit hooks for gc.get\_objects(), gc.get\_referrers() and gc.get\_referents(). Patch by Pablo Galindo.

### [](https://discuss.python.org/t/python-3-9-3-and-3-8-9-are-now-available/8024#release-calendar)Release Calendar

Due to the security fixes, those releases are made a month sooner than planned. I decided to keep the release calendar intact, meaning that the **last** full regular maintenance release of Python 3.8 is still planned for May 3rd 2021, after which it will shift to source releases only for security bug fixes only. Maintenance releases for the 3.9 series will continue at regular bi-monthly intervals, with **3.9.3** planned for May 3rd 2021 as well.

### [](https://discuss.python.org/t/python-3-9-3-and-3-8-9-are-now-available/8024#whats-new)What’s new?

The Python 3.9 series contains many new features and optimizations over 3.8. See the “[What’s New in Python 3.9](https://docs.python.org/3.9/whatsnew/3.9.html) ” document for more information about features included in the 3.9 series. We also have a [detailed change log for 3.9.3](https://docs.python.org/release/3.9.3/whatsnew/changelog.html) specifically.

Detailed information about all changes made in version 3.8.9 can be found in [its respective changelog](https://docs.python.org/release/3.8.9/whatsnew/changelog.html).

### [](https://discuss.python.org/t/python-3-9-3-and-3-8-9-are-now-available/8024#we-hope-you-enjoy-those-new-releases)We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
