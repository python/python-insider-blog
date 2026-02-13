---
title: 'Python 3.10.14, 3.9.19, and 3.8.19 is now available'
publishDate: '2024-03-20'
updatedDate: '2024-03-20'
author: Łukasz Langa
description: 'Howdy!   Those are the boring security releases that aren’t supposed to bring anything new. But not this time! We do have a bit of news, actually. But first ...'
tags: []
published: true
legacyUrl: /2024/03/python-31014-3919-and-3819-is-now.html
---

Howdy!  
Those are the boring security releases that aren’t supposed to bring anything new. But not this time! We do have a bit of news, actually. But first things first: go update your systems!

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#python-31014-1)Python 3.10.14

Get it here: [Python Release Python 3.10.14](https://www.python.org/downloads/release/python-31014/)

26 commits since the last release.

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#python-3919-2)Python 3.9.19

Get it here: [Python Release Python 3.9.19](https://www.python.org/downloads/release/python-3919/)

26 commits since the last release.

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#python-3819-3)Python 3.8.19

Get it here: [Python Release Python 3.8.19](https://www.python.org/downloads/release/python-3819/)

28 commits since the last release.

#### Security content in this release

-   [gh-115399](https://github.com/python/cpython/issues/115399) & [gh-115398](https://github.com/python/cpython/issues/115398): bundled libexpat was updated to 2.6.0 to address [CVE-2023-52425](https://www.cve.org/CVERecord?id=CVE-2023-52425), and control of the new reparse deferral functionality was exposed with new APIs. Thanks to Sebastian Pipping, the maintainer of libexpat, who worked with us directly on incorporating those fixes!
-   [gh-109858](https://github.com/python/cpython/issues/109858): `zipfile` is now protected from the “quoted-overlap” zipbomb to address [CVE-2024-0450](https://www.cve.org/CVERecord?id=CVE-2024-0450). It now raises `BadZipFile` when attempting to read an entry that overlaps with another entry or central directory
-   [gh-91133](https://github.com/python/cpython/issues/91133): `tempfile.TemporaryDirectory` cleanup no longer dereferences symlinks when working around file system permission errors to address [CVE-2023-6597](https://www.cve.org/CVERecord?id=CVE-2023-6597)
-   [gh-115197](https://github.com/python/cpython/issues/115197): `urllib.request` no longer resolves the hostname before checking it against the system’s proxy bypass list on macOS and Windows
-   [gh-81194](https://github.com/python/cpython/issues/81194): a crash in `socket.if_indextoname()` with a specific value (`UINT_MAX`) was fixed. Relatedly, an integer overflow in `socket.if_indextoname()` on 64-bit non-Windows platforms was fixed
-   [gh-113659](https://github.com/python/cpython/issues/113659): `.pth` files with names starting with a dot or containing the hidden file attribute are now skipped
-   [gh-102388](https://github.com/python/cpython/issues/102388): `iso2022_jp_3` and `iso2022_jp_2004` codecs no longer read out of bounds
-   [gh-114572](https://github.com/python/cpython/issues/114572): `ssl.SSLContext.cert_store_stats()` and `ssl.SSLContext.get_ca_certs()` now correctly lock access to the certificate store, when the `ssl.SSLContext` is shared across multiple threads

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#stay-safe-and-upgrade-5)Stay safe and upgrade!

Upgrading is highly recommended to all users of affected versions.

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#source-builds-are-moving-to-github-actions-6)Source builds are moving to GitHub Actions

It’s not something you will notice when downloading, but 3.10.14 here is the first release we’ve done where [the source artifacts were built on GHA](https://github.com/python/release-tools/actions/runs/8350750234) and not on a local computer of one of the release managers. We have the Security Developer in Residence [@sethmlarson](https://discuss.python.org/u/sethmlarson) to thank for that!

It’s a big deal since public builds allow for easier auditing and repeatability. It also helps with the so-called bus factor. In fact, to test this out, this build of 3.10.14 was triggered by me and not Pablo, who would usually release Python 3.10.

The artifacts are later still signed by the respective release manager, ensuring integrity when put on the downloads server.

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#python-now-manages-its-own-cves-7)Python now manages its own CVEs

The security releases you’re looking at are the first after [the PSF became a CVE Numbering Authority](https://www.cve.org/Media/News/item/news/2023/08/29/Python-Software-Foundation-Added-as-CNA). That’s also thanks to [@sethmlarson](https://discuss.python.org/u/sethmlarson). What being our own CNA allows us is to ensure the quality of the vulnerability reports is high, and that the severity estimates are accurate. Seth summarized it best in his announcement [here](https://discuss.python.org/t/the-python-software-foundation-has-been-authorized-by-the-cve-program-as-a-cve-numbering-authority-cna/32561).

What this also allows us to do is to combine announcement of CVEs with the release of patched versions of Python. This is in fact the case with two of the CVEs listed above ([CVE-2023-6597](https://www.cve.org/CVERecord?id=CVE-2023-6597) and [CVE-2024-0450](https://www.cve.org/CVERecord?id=CVE-2024-0450)). And since Seth is now traveling, this announcement duty was fulfilled by the PSF’s Director of Infrastructure [@EWDurbin](https://discuss.python.org/u/ewdurbin). Thanks!

I’m happy to see us successfully testing bus factor resilience on multiple fronts with this round of releases.

#### [](https://discuss.python.org/t/python-3-10-14-3-9-19-and-3-8-19-is-now-available/48993#thank-you-for-your-support-8)Thank you for your support

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

[Python.org](https://www.python.org/psf-landing/) - the official home of the Python Programming Language.

–  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
on behalf of your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Thomas Wouters [@thomas](https://discuss.python.org/u/thomas)
