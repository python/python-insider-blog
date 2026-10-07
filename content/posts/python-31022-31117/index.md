---
title: 'Python 3.10.22, 3.11.17, 3.12.15, 3.13.16 and 3.14.8 are now available!'
publishDate: '2026-10-01'
author: Pablo Galindo
description: 'Security updates across Python 3.10–3.14, the final maintenance release of 3.13, and a farewell to Python 3.10.'
tags:
  - releases
published: true
---

A full sweep of Python releases is here: **Python 3.10.22, 3.11.17, 3.12.15, 3.13.16 and 3.14.8 are now available!** One last lap around the Sun for Python 3.10, and security updates across all five series.

Get them here:

- [Python 3.10.22](https://www.python.org/downloads/release/python-31022/)
- [Python 3.11.17](https://www.python.org/downloads/release/python-31117/)
- [Python 3.12.15](https://www.python.org/downloads/release/python-31215/)
- [Python 3.13.16](https://www.python.org/downloads/release/python-31316/)
- [Python 3.14.8](https://www.python.org/downloads/release/python-3148/)

**Python 3.10.22 is the final release of Python 3.10.** After five years, the series has reached end of life and will receive no further security updates. If you are still using Python 3.10, please plan your upgrade to a supported version.

Python 3.11 remains in security-fix-only mode until October 2027, as described in [PEP 664](https://peps.python.org/pep-0664/). Security releases are made as needed, with no fixed cadence.

Python 3.10.22 and 3.11.17 are **source-only**. There are no Windows or macOS installers: 3.10.11 and 3.11.9 were the last releases in their respective series to include binary installers. These two releases contain security fixes rather than new features.

Python 3.12.15 is also a source-only security release, with security support continuing until October 2028. Python 3.13.16 is the **last full maintenance release of 3.13**; future 3.13 releases will contain security fixes only. Python 3.14.8 is a maintenance release, and both 3.13.16 and 3.14.8 include binary installers. See their release pages above for their full security content and other changes.

[Discuss this release announcement](https://discuss.python.org/t/python-3-10-22-and-3-11-17-are-now-available/109296).

## Security content in all five releases

* gh-158446: Fix crashes or incorrect output when formatting float or complex values with precision close to INT_MAX.
* CVE-2026-19553 — gh-156793: `ssl.SSLContext.wrap_bio()` now validates its `server_side`, `server_hostname`, and `session` arguments. `asyncio` also validates TLS `server_hostname` arguments. On Python 3.10, 3.11, and 3.12, missing hostnames with `check_hostname` enabled emit `DeprecationWarning` for compatibility; they raise `ValueError` on Python 3.13 and later.
* CVE-2026-82049 — gh-157190: Fix a tarfile extraction-filter vulnerability involving hard links to symbolic links that could expose files outside the destination and change their permissions or modification times.
* gh-157953: Update bundled libexpat to version 2.8.5.
* CVE-2026-15310 — gh-156002: Bound `zipfile` decompression per read for bzip2 and LZMA members, and for Zstandard members on Python 3.14, preventing unbounded allocations from small compressed members. Third-party decompressors supplied by monkey-patching `_get_decompressor()` that lack `needs_input` and two-argument `decompress()` remain vulnerable.
* CVE-2026-19672 — gh-155999: Prevent tarfile extraction filters from creating directories outside the destination for paths that leave it and then return.
* CVE-2026-19445 — gh-156293: Fix an ssl crash when an SNI callback switches contexts and the original callback context is no longer referenced.
* CVE-2026-17084 — gh-155292: Restrict stringprep and the IDNA codec to Unicode codepoint attributes defined by RFC 3454.
* CVE-2026-15806 — gh-155694: Scope urllib.request HTTPPasswordMgr credentials by URL scheme to prevent HTTPS credentials from being used for matching HTTP URLs.

## Additional security content by version

### Python 3.10.22, 3.11.17, 3.12.15 and 3.13.16

* CVE-2026-87910 — gh-157265: Apply tarfile extraction filters when a link falls back to extracting an archive member, skipping members rejected by the filter.

### Python 3.13.16 and 3.14.8

* gh-158010: Update bundled OpenSSL to [3.5.9](https://openssl-library.org/news/secadv/20260929.txt). In Python 3.13.16 this applies to Windows, macOS and Android, moving from OpenSSL 3.0.21 to the 3.5 LTS series. In Python 3.14.8 it applies to Windows, macOS, Android and iOS. The source-only Python 3.10–3.12 releases do not bundle OpenSSL.

### Python 3.10.22

* gh-149018: Improve protection against XML hash-flooding attacks in `xml.parsers.expat` and `xml.etree.ElementTree` when compiled with libexpat 2.8.0 or later.

This XML hash-flooding protection was already included in Python 3.11.16.

For the full details, see the [3.10.22 changelog](https://docs.python.org/release/3.10.22/whatsnew/changelog.html), [3.11.17 changelog](https://docs.python.org/release/3.11.17/whatsnew/changelog.html), [3.12.15 changelog](https://docs.python.org/release/3.12.15/whatsnew/changelog.html), [3.13.16 changelog](https://docs.python.org/release/3.13.16/whatsnew/changelog.html), and [3.14.8 changelog](https://docs.python.org/release/3.14.8/whatsnew/changelog.html).

## Attention macOS 27.0 `IDLE` or `tkinter` users

When running IDLE or other GUI applications that use the `tkinter` module, these
applications may hang when using an application's menu command that opens a
dialog (for example, IDLE's `About IDLE`, `Settings`, and `Open Module` commands)
resulting in a spinning beach ball with `Force Quit` needed.

This problem is due to an operating system behavior change in macOS 27.0 that is
believed to affect all current versions of the Tk graphics toolkit and thus the
`tkinter` module in all current Python versions.

If you depend on Tk-based applications (like IDLE) on macOS, you may want to
consider deferring installing macOS 27.0 until a Tk or macOS workaround is
available or testing that your application workflow is not affected. Follow
issue [#158053](https://github.com/python/cpython/issues/158053) for updates.

## And now for something completely different

When two black holes merge, the newly formed black hole is distorted. It settles towards a stationary state by emitting gravitational waves in a process called **ringdown**. Like a struck bell, it oscillates with a signal that fades away. These oscillations are described by quasinormal modes; their frequencies and decay times depend on the final black hole’s mass and spin. You can watch spacetime doing its final ringing in [this NASA simulation](https://svs.gsfc.nasa.gov/13197).

We started Python 3.10 with [a trip inside a Schwarzschild black hole](https://blog.python.org/2021/10/python-3100-is-available/), so it seems only fair to finish with black holes as well :)

This is Python 3.10’s ringdown. One last release before we switch off the release machinery. Five years of features, fixes, stubborn buildbots, and a rather unreasonable number of tarballs. I cannot quite believe I am writing the last one.

Thank you to everyone who contributed patches, reviewed changes, tested releases, reported bugs, or helped us get a release out when the universe seemed determined to prevent it. It has been a privilege to be your release manager for this series.

Python 3.11 still has another year of security fixes ahead of it, so you have not escaped me yet :)

## We hope you enjoy the new releases!

Thank you to all the volunteers who made these releases possible. Please consider supporting Python by contributing your time or through the [Python Software Foundation](https://www.python.org/psf-landing/).

Your friendly release team,  
[Hugo van Kemenade](https://discuss.python.org/u/hugovk)  
[Thomas Wouters](https://discuss.python.org/u/thomas)  
[Pablo Galindo Salgado](https://discuss.python.org/u/pablogsal)
