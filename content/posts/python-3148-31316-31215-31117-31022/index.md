---
title: 'Python 3.14.8, 3.13.16, 3.12.15, 3.11.17 and 3.10.22 are now available!'
publishDate: '2026-09-30T19:00:00Z'
author: Hugo van Kemenade
description: 'Security releases for Python 3.10-3.14'
tags:
  - releases
published: true
---

It's a big release week with Python 3.15.0 due out tomorrow,
but before that here's a full sweep of 3.10-3.14 security releases.

* This is an expedited release for 3.14 and 3.13, which come with binary installers.

* This is the final expected bugfix release for 3.13, which is now entering
  security-fix-only mode.

* 3.12, 3.11 and 3.10 are in security-fix-only mode with no pre-set release cadence,
  and are source-only releases.

## Security content in these releases

* CVE-2026-19445 gh-156293 Use-after-free of a server-side `SSLContext` when `sni_callback` switches contexts

* CVE-2026-19553 gh-156793 `SSLContext.wrap_bio()` missing validation of server_hostname parameter

* CVE-2026-82049 gh-157190 `tarfile` extraction filters allow file modification and content disclosure via hard link to symlink

* CVE-2026-15310 gh-156002 Memory exhaustion in `zipfile` in bzip2/LZMA/Zstandard decompression

* CVE-2026-19672 gh-155999 `tarfile` extraction filter bypass allows creation of directories outside the destination

* CVE-2026-15806 gh-155694 `urllib.request.HTTPPasswordMgr` credentials for one URL scheme sent over another scheme

* CVE-2026-17084 gh-155292 `StringPrep` algorithm considered Unicode codepoint attributes outside Unicode 3.2.0

* gh-158446 Reject float format precision near `INT_MAX`

* gh-157953 Update bundled Expat to [2.8.5](https://blog.hartwork.org/posts/expat-2-8-5-released/)


## Python 3.14.8

Additional fixes in this release:
* gh-158010 Update bundled OpenSSL to [3.5.9](https://openssl-library.org/news/secadv/20260929.txt) for Windows, macOS, Android and iOS

https://www.python.org/downloads/release/python-3148/

## Python 3.13.16

Additional fixes in this release:
* CVE-2026-87910 gh-157265 `tarfile` hardlink fallback ignores custom extraction filter rejection via `None`
* gh-158010 Update bundled OpenSSL to [3.5.9](https://openssl-library.org/news/secadv/20260929.txt) for Windows, macOS and Android, a jump from 3.0.21 to the 3.5 LTS series

https://www.python.org/downloads/release/python-31316/

## Python 3.12.15

Additional fixes in this release:
* CVE-2026-87910 gh-157265 `tarfile` hardlink fallback ignores custom extraction filter rejection via `None`

https://www.python.org/downloads/release/python-31215/

## Python 3.11.17

Additional fixes in this release:
* CVE-2026-87910 gh-157265 `tarfile` hardlink fallback ignores custom extraction filter rejection via `None`

https://www.python.org/downloads/release/python-31117/

## Python 3.10.22

Additional fixes in this release:
* CVE-2026-87910 gh-157265 `tarfile` hardlink fallback ignores custom extraction filter rejection via `None`

https://www.python.org/downloads/release/python-31022/

## Stay safe and upgrade!

As always, upgrading is highly recommended to all users of affected versions.

## Enjoy the new releases

Thanks to all of the many volunteers who help make Python development and these
releases possible! Please consider supporting our efforts by volunteering yourself
or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Your release team,
Hugo van Kemenade
Thomas Wouters
Pablo Galindo Salgado
Ned Deily
