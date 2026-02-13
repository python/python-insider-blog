---
title: 'Python 3.13.4, 3.12.11, 3.11.13, 3.10.18 and 3.9.23 are now available'
publishDate: '2025-06-03'
updatedDate: '2025-06-03'
author: Thomas Wouters
description: 'Python Release Party It was only meant to be release day for 3.13.4 today, but poor number 13 looked so lonely… And hey, we had a couple of tarfile CVEs that...'
tags: []
published: true
legacyUrl: /2025/06/python-3134-31211-31113-31018-and-3923.html
---

# Python Release Party

It was only meant to be release day for 3.13.4 today, but poor number 13 looked so lonely… And hey, we had a couple of tarfile CVEs that we had to fix. So most of the Release Managers and all the Developers-in-Residence (including Security Developer-in-Residence Seth Michael Larson) came together to make it a full release party.

# Security content in these releases

-   [gh-135034](https://github.com/python/cpython/issues/135034): Fixes multiple issues that allowed `tarfile` extraction filters (`filter="data"` and `filter="tar"`) to be bypassed using crafted symlinks and hard links.Addresses [**CVE 2024-12718**](https://www.cve.org/CVERecord?id=CVE-2024-12718), [**CVE 2025-4138**](https://www.cve.org/CVERecord?id=CVE-2025-4138), [**CVE 2025-4330**](https://www.cve.org/CVERecord?id=CVE-2025-4330), and [**CVE 2025-4517**](https://www.cve.org/CVERecord?id=CVE-2025-4517).
-   [gh-133767](https://github.com/python/cpython/issues/133767): Fix use-after-free in the “unicode-escape” decoder with a non-“strict” error handler.
-   [gh-128840](https://github.com/python/cpython/issues/128840): Short-circuit the processing of long IPv6 addresses early in [`ipaddress`](https://docs.python.org/release/3.13.4/library/ipaddress.html#module-ipaddress) to prevent excessive memory consumption and a minor denial-of-service.

In addition to the security fixed mentioned above, a few additional changes to the `ipaddress` were backported to make the security fixes feasible. (See the full changelogs for each release for more details.)

# Python 3.13.4

In addition to the security fixes, the fourth maintenance release of Python 3.13 contains more than 300 bugfixes, build improvements and documentation changes.

[https://www.python.org/downloads/release/python-3134/](https://www.python.org/downloads/release/python-3134/)

# Python 3.12.11

[https://www.python.org/downloads/release/python-31211/](https://www.python.org/downloads/release/python-31211/)

# Python 3.11.13

[https://www.python.org/downloads/release/python-31113/](https://www.python.org/downloads/release/python-31113/)

# Python 3.10.18

  

[https://www.python.org/downloads/release/python-31018/](https://www.python.org/downloads/release/python-31018/)

# Python 3.9.23

Additional security content in this release (already fixed in older releases for the other versions):

-   [gh-80222](https://github.com/python/cpython/issues/80222): Fix bug in the folding of quoted strings when flattening an email message using a modern email policy. Previously when a quoted string was folded so that it spanned more than one line, the surrounding quotes and internal escapes would be omitted. This could theoretically be used to spoof header lines using a carefully constructed quoted string if the resulting rendered email was transmitted or re-parsed.

[https://www.python.org/downloads/release/python-3923](https://www.python.org/downloads/release/python-3923)  

# Stay safe and upgrade!

As always, upgrading is highly recommended to all users of affected versions.

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Regards from your very ~tired~ tireless release team,  
Thomas Wouters  
Pablo Galindo Salgado  
Łukasz Langa  
Ned Deily  
Steve Dower
