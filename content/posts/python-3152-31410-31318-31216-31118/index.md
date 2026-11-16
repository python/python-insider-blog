---
title: Python 3.15.2, 3.14.10, 3.13.18, 3.12.16 and 3.11.18 are out
publishDate: '2026-10-26'
author: Hugo van Kemenade
description: 'Five expedited security releases to distrust the compromised eMudhra intermediate CA keys.'
tags:
  - releases
published: true
---

Here are expedited security releases of Python 3.15, 3.14, 3.13, 3.12 and 3.11.

* [Python 3.15.2](https://www.python.org/downloads/release/python-3152/)
* [Python 3.14.10](https://www.python.org/downloads/release/python-31410/)
* [Python 3.13.18](https://www.python.org/downloads/release/python-31318/)
* [Python 3.12.16](https://www.python.org/downloads/release/python-31216/)
* [Python 3.11.18](https://www.python.org/downloads/release/python-31118/)

They address [the compromised eMudhra intermediate CA keys](https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576).
These keys are now blocked by the `ssl` module as a last resort against their use.
Normal uses of `pip`, including to upgrade `pip` itself, are now safe from attacks based on those compromised keys, even if `pip` hasn't been updated yet.

Python 3.15.2 and 3.14.10 come with binary installers.
Python 3.13.18, 3.12.16 and 3.11.18 are source-only security releases.

## Security content in all five releases

* [CVE-2026-115557](https://www.cve.org/CVERecord?id=CVE-2026-115557) — [gh-160040](https://github.com/python/cpython/issues/160040): Distrust compromised eMudhra intermediate CA keys
* [CVE-2026-114583](https://www.cve.org/CVERecord?id=CVE-2026-114583) — [gh-160097](https://github.com/python/cpython/issues/160097): Reject links replacing the destination in `tarfile.tar_filter`
* [gh-160300](https://github.com/python/cpython/issues/160300): Reject cookies with a negative version in `http.cookiejar`

## Additional security content by version

### Python 3.13.18, 3.12.16 and 3.11.18

These fixes were already included in Python 3.15.1 and 3.14.9.

* [CVE-2026-77214](https://www.cve.org/CVERecord?id=CVE-2026-77214) and [CVE-2026-102633](https://www.cve.org/CVERecord?id=CVE-2026-102633) — [gh-158876](https://github.com/python/cpython/issues/158876): Update bundled Expat to 2.9.0
* [CVE-2024-3220](https://www.cve.org/CVERecord?id=CVE-2024-3220) — [gh-159428](https://github.com/python/cpython/issues/159428): Don't read `mimetypes.knownfiles` by default on Windows
* [gh-87720](https://github.com/python/cpython/issues/87720): Fix additional header refolding-quoting edge case

### Python 3.13.18 and 3.12.16

This fix was already included in Python 3.15.0 and 3.14.9.

* [gh-157579](https://github.com/python/cpython/issues/157579): Fix race condition in the cleanup of `tempfile.TemporaryDirectory`

For the full details, see the [3.15.2 changelog](https://docs.python.org/release/3.15.2/whatsnew/changelog.html), [3.14.10 changelog](https://docs.python.org/release/3.14.10/whatsnew/changelog.html), [3.13.18 changelog](https://docs.python.org/release/3.13.18/whatsnew/changelog.html), [3.12.16 changelog](https://docs.python.org/release/3.12.16/whatsnew/changelog.html) and [3.11.18 changelog](https://docs.python.org/release/3.11.18/whatsnew/changelog.html).

## Stay safe and upgrade!

As always, upgrading is highly recommended to all users of affected versions.

## Enjoy the new releases

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Your certified release team,
<br>Hugo van Kemenade
<br>Thomas Wouters
<br>Pablo Galindo Salgado
<br>Ned Deily
<br>Steve Dower
