---
title: 'Python 3.11.1, 3.10.9, 3.9.16, 3.8.16, 3.7.16, and 3.12.0 alpha 3 are now available'
publishDate: '2022-12-06'
updatedDate: '2022-12-06'
author: Łukasz Langa
description: 'Greetings! We bring you a slew of releases this fine Saint Nicholas / Sinterklaas day. Six simultaneous releases has got to be some record. There’s one more ...'
tags: []
published: true
legacyUrl: /2022/12/python-3111-3109-3916-3816-3716-and.html
---

Greetings! We bring you a slew of releases this fine Saint Nicholas / Sinterklaas day. Six simultaneous releases has got to be some record. There’s one more record we broke this time, you’ll see below.

In any case, updating is recommended due to security content:

-   3.7 - 3.12: [gh-98739](https://github.com/python/cpython/issues/98739): Updated bundled libexpat to 2.5.0 to fix [CVE-2022-43680](https://nvd.nist.gov/vuln/detail/CVE-2022-43680) (heap use-after-free).
-   3.7 - 3.12: [gh-98433](https://github.com/python/cpython/issues/98433): The IDNA codec decoder used on DNS hostnames by `socket` or `asyncio` related name resolution functions no longer involves a quadratic algorithm to fix [CVE-2022-45061](https://nvd.nist.gov/vuln/detail/CVE-2022-45061). This prevents a potential CPU denial of service if an out-of-spec excessive length hostname involving bidirectional characters were decoded. Some protocols such as `urllib` http 3xx redirects potentially allow for an attacker to supply such a name.
-   3.7 - 3.12: [gh-100001](https://github.com/python/cpython/issues/100001): `python -m http.server` no longer allows terminal control characters sent within a garbage request to be printed to the stderr server log.
-   3.8 - 3.12: [gh-87604](https://github.com/python/cpython/issues/87604): Avoid publishing list of active per-interpreter audit hooks via the `gc` module.
-   3.9 - 3.10 (already released in 3.11+ before): [gh-97514](https://github.com/python/cpython/issues/97514): On Linux the `multiprocessing` module returns to using filesystem backed unix domain sockets for communication with the forkserver process instead of the Linux abstract socket namespace. Only code that chooses to use the “forkserver” start method is affected. This prevents Linux [CVE-2022-42919](https://nvd.nist.gov/vuln/detail/CVE-2022-42919) (potential privilege escalation) as abstract sockets have no permissions and could allow any user on the system in the same network namespace (often the whole system) to inject code into the `multiprocessing` forkserver process. This was a potential privilege escalation. Filesystem based socket permissions restrict this to the forkserver process user as was the default in Python 3.8 and earlier.
-   3.7 - 3.10: [gh-98517](https://github.com/python/cpython/issues/98517): Port XKCP’s fix for the buffer overflows in SHA-3 to fix [CVE-2022-37454](https://nvd.nist.gov/vuln/detail/CVE-2022-37454).
-   3.7 - 3.9 (already released in 3.10+ before): [gh-68966](https://github.com/python/cpython/issues/68966): The deprecated mailcap module now refuses to inject unsafe text (filenames, MIME types, parameters) into shell commands to address [CVE-2015-20107](https://nvd.nist.gov/vuln/detail/CVE-2015-20107). Instead of using such text, it will warn and act as if a match was not found (or for test commands, as if the test failed).

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3120-alpha-3-1)Python 3.12.0 alpha 3

Get it here, read the change log, sing a GPT-3-generated Sinterklaas song:

[https://www.python.org/downloads/release/python-3120a3/](https://www.python.org/downloads/release/python-3120a3/)  

216 new commits since 3.12.0 alpha 2 last month.

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3111-2)Python 3.11.1

Get it here, see the change log, read the recipe for quark soup:

[https://www.python.org/downloads/release/python-3111/](https://www.python.org/downloads/release/python-3111/)  

**A whopping 495 new commits since 3.11.0.** This is a massive increase of changes comparing to 3.10 at the same stage in the release cycle: there were “only” 339 commits between 3.10.0 and 3.10.1.

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3109-3)Python 3.10.9

Get it here, read the change log, see circular patterns:

[https://www.python.org/downloads/release/python-3109/](https://www.python.org/downloads/release/python-3109/)  

165 new commits.

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3916-4)Python 3.9.16

Get it here, read the change log, consider upgrading to a newer version:

[https://www.python.org/downloads/release/python-3916/](https://www.python.org/downloads/release/python-3916/)  

Security-only release with no binaries. 10 commits.

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3816-5)Python 3.8.16

Get it here, see the change log, definitely upgrade to a newer version:

[https://www.python.org/downloads/release/python-3816/](https://www.python.org/downloads/release/python-3816/)  

Security-only release with no binaries. 9 commits.

### [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#python-3716-6)Python 3.7.16

Get it here, read the change log, check [PEP 537](https://peps.python.org/pep-0537/) to confirm EOL is coming to this version in June 2023:

[https://www.python.org/downloads/release/python-3716/](https://www.python.org/downloads/release/python-3716/)  

Security-only release with no binaries. 8 commits.

## [](https://discuss.python.org/t/python-3-11-1-3-10-9-3-9-16-3-8-16-3-7-16-and-3-12-0-alpha-3-are-now-available/21724#we-hope-you-enjoy-the-new-releases-7)We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

[https://www.python.org/psf/](https://www.python.org/psf/)  

Your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Thomas Wouters [@thomas](https://discuss.python.org/u/thomas)
