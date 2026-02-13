---
title: Python 3.9.2 and 3.8.8 are now available
publishDate: '2021-02-19'
updatedDate: '2021-02-19'
author: Łukasz Langa
description: 'Convinced of the wonders of free two-day deliveries, I’m pleased to present you Python 3.9.2 and 3.8.8. Get them from: https://www.python.org/downloads/relea...'
tags: []
published: true
legacyUrl: /2021/02/python-392-and-388-are-now-available.html
---

Convinced of the wonders of free two-day deliveries, I’m pleased to present you Python 3.9.2 and 3.8.8. Get them from: [https://www.python.org/downloads/release/python-392/](https://www.python.org/downloads/release/python-392/) [https://www.python.org/downloads/release/python-388/](https://www.python.org/downloads/release/python-388/)

Next up, the **last** full regular maintenance release of Python 3.8 is planned for May 3rd 2021, after which it will shift to source releases only for security bug fixes only. Maintenance releases for the 3.9 series will continue at regular bi-monthly intervals, with **3.9.3** planned for early May 2021.

### Why the expedited final release?

This release, just as the candidate before it, contains two security fixes:

-   [bpo-42938](https://bugs.python.org/issue42938): Avoid static buffers when computing the repr of `ctypes.c_double` and `ctypes.c_longdouble` values. This issue was assigned [CVE-2021-3177](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3177).
    
-   [bpo-42967](https://bugs.python.org/issue42967): Fix web cache poisoning vulnerability by defaulting the query args separator to `&`, and allowing the user to choose a custom separator. This issue was assigned [CVE-2021-23336](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-23336).
    

Since the announcement of the release candidates for 3.9.2 on 3.8.8, we received a number of inquiries from end users urging us to expedite the final releases due to the security content, especially [CVE-2021-3177](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-3177).

This took us somewhat by surprise since we believed security content is cherry-picked by downstream distributors from source either way, and the RC releases provide installers for everybody else interested in upgrading in the meantime. It turns out that release candidates are mostly invisible to the community and in many cases cannot be used due to upgrade processes which users have in place.

In turn, the other active release managers and I decided to stop providing release candidates for bugfix versions. Starting from now on after the initial 3.x.0 final release, all subsequent releases are going to be provided as is in bi-monthly intervals. The release calendar PEPs for 3.8 and 3.9 have been updated accordingly.

### On the severity of CVE-2021-3177

We recommend you upgrade your systems to Python 3.8.8 or 3.9.2.

Our understanding is that while the CVE is listed as “remote code execution”, practical exploits of this vulnerability as such are very unlikely due the following conditions needing to be met for successful RCE:

-   pass an untrusted floating point number from a remote party to `ctypes.c_double.from_param` (note: Python floating point numbers were not affected);
    
-   have that object be passed to `repr()` (for instance through logging);
    
-   have that float point number be valid machine code;
    
-   have the buffer overflow overwrite the stack at exactly the right place for the code to get executed.
    

In fact, Red Hat’s evaluation of the vulnerability was consistent with ours. They write: “[the highest threat from this vulnerability is to system availability](https://access.redhat.com/security/cve/cve-2021-3177).”

To be sure, denial of service through malicious input is also a serious issue. Thus, to help the community members for whom the release candidate was insufficient, we are releasing the final versions of 3.9.2 and 3.8.8 today.

### What’s new?

The Python 3.9 series contains many new features and optimizations over 3.8. See the “[What’s New in Python 3.9 2](https://docs.python.org/3.9/whatsnew/3.9.html)” document for more information about features included in the 3.9 series. We also have a [detailed change log for 3.9.2rc1](https://docs.python.org/release/3.9.2/whatsnew/changelog.html#python-3-9-2-release-candidate-1) specifically. The final release only contains [a single bugfix](https://github.com/python/cpython/pull/24554) over the release candidate.

Detailed information about all changes made in version 3.8.8rc1 specifically can be found in [its respective changelog](https://docs.python.org/release/3.8.8/whatsnew/changelog.html#python-3-8-8-release-candidate-1). The final version contains no changes over the release candidate.

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
