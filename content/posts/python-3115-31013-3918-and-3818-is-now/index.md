---
title: 'Python 3.11.5, 3.10.13, 3.9.18, and 3.8.18 is now available'
publishDate: '2023-08-24'
updatedDate: '2023-08-24'
author: Łukasz Langa
description: 'There’s security content in the releases, let’s dive right in. -   gh-108310: Fixed an issue where instances of  were vulnerable to a bypass of the TLS hands...'
tags: []
published: true
legacyUrl: /2023/08/python-3115-31013-3918-and-3818-is-now.html
---

There’s security content in the releases, let’s dive right in.

-   [gh-108310](https://github.com/python/cpython/issues/108310): Fixed an issue where instances of [`ssl.SSLSocket`](https://docs.python.org/release/3.10.13/library/ssl.html#ssl.SSLSocket) were vulnerable to a bypass of the TLS handshake and included protections (like certificate verification) and treating sent unencrypted data as if it were post-handshake TLS encrypted data. Security issue reported as [CVE-2023-40217 1](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-40217) by Aapo Oksman. Patch by Gregory P. Smith.

Upgrading is highly recommended to all users of affected versions.

## [](https://discuss.python.org/t/python-3-11-5-3-10-13-3-9-18-and-3-8-18-is-now-available/32254/1#python-3115-1)Python 3.11.5

Get it here: [https://www.python.org/downloads/release/python-3115/](https://www.python.org/downloads/release/python-3115/)  

This release was held up somewhat by the resolution of this CVE, which is why it includes a whopping 328 new commits since 3.11.4 (compared to 238 commits between 3.10.4 and 3.10.5). Among those, there is a fix for [CVE-2023-41105](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-41105) which affected Python 3.11.0 - 3.11.4. See [gh-106242](https://github.com/python/cpython/issues/106242) for details.

There are also some fixes for crashes, check out the [change log](https://docs.python.org/release/3.11.5/whatsnew/changelog.html) to see all information.

Most importantly, the release notes on the [downloads page](https://www.python.org/downloads/release/python-3115/) include a description of the Larmor precession. I understood some of the words there!

## [](https://discuss.python.org/t/python-3-11-5-3-10-13-3-9-18-and-3-8-18-is-now-available/32254/1#python-31013-2)Python 3.10.13

Get it here: [https://www.python.org/downloads/release/python-31013/](https://www.python.org/downloads/release/python-31013/)  

16 commits.

## [](https://discuss.python.org/t/python-3-11-5-3-10-13-3-9-18-and-3-8-18-is-now-available/32254/1#python-3918-3)Python 3.9.18

Get it here: [https://www.python.org/downloads/release/python-3918/](https://www.python.org/downloads/release/python-3918/)  

11 commits.

## [](https://discuss.python.org/t/python-3-11-5-3-10-13-3-9-18-and-3-8-18-is-now-available/32254/1#python-3818-4)Python 3.8.18

Get it here: [https://www.python.org/downloads/release/python-3818/](https://www.python.org/downloads/release/python-3818/)  

9 commits.

## [](https://discuss.python.org/t/python-3-11-5-3-10-13-3-9-18-and-3-8-18-is-now-available/32254/1#stay-safe-and-upgrade-5)Stay safe and upgrade!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

–  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
on behalf of your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Thomas Wouters [@thomas](https://discuss.python.org/u/thomas)
