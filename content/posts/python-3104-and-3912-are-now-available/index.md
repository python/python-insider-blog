---
title: Python 3.10.4 and 3.9.12 are now available out of schedule
publishDate: '2022-03-24'
updatedDate: '2022-03-24'
author: Łukasz Langa
description: 'Did anybody say cursed releases? Well, it turns out that 3.10.3 and 3.9.11 both shipped a regression which caused those versions not to build on Red Hat Ente...'
tags: []
published: true
legacyUrl: /2022/03/python-3104-and-3912-are-now-available.html
---

Did anybody say [cursed releases](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353)? Well, it turns out that 3.10.3 and 3.9.11 both shipped a regression which caused those versions not to build on Red Hat Enterprise Linux 6. While this 11-year-old version is now [out of maintenance support](https://access.redhat.com/support/policy/updates/errata), it’s still used in production workloads. Some of those rely on Python 3.9 and/or 3.10. In particular, our own [`manylinux2010`](https://github.com/pypa/manylinux/tree/manylinux2010_x86_64_centos6_no_vsyscall) image used to build widely compatible Linux wheels is based on CentOS 6. (Don’t worry, we do have newer `manylinux*` variants, see [PEP 599](https://peps.python.org/pep-0599/) and [PEP 600](https://peps.python.org/pep-0600/) for details.)

Due to the out-of-schedule release, the respective versions released today contain a very limited set of changes. Python 3.9.12 only contains 12 other bug fixes on top of 3.9.11. Python 3.10.4 only contains 10 other bug fixes on top of 3.10.3.

Get 3.10.4 here: [Python Release Python 3.10.4 | Python.org](https://www.python.org/downloads/release/python-3104)  
Get 3.9.12 here: [Python Release Python 3.9.12 | Python.org](https://www.python.org/downloads/release/python-3912)

Hopefully, the third time’s a charm and we’ll return no sooner than May with the regularly scheduled bug fix releases of 3.9 and 3.10.

### [](https://discuss.python.org/t/python-3-10-4-and-3-9-12-are-now-available-out-of-schedule/14568#we-hope-you-enjoy-the-new-releases-1)We hope you enjoy the new releases

Your friendly release team,  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)
