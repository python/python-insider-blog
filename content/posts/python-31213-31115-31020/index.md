---
title: 'Python 3.12.13, 3.11.15 and 3.10.20 are now available!'
publishDate: '2026-03-03'
author: Thomas Wouters
description: '[](https://discuss.python.org/t/python-3-12-13-3-11-15-and-3-10-20-are-now-available/106363)Python 3.12.13, 3.11.15 and 3.10.20 are now available!'
tags:
  - releases
published: true
---

# [](https://discuss.python.org/t/python-3-12-13-3-11-15-and-3-10-20-are-now-available/106363)Python 3.12.13, 3.11.15 and 3.10.20 are now available!

New security releases for 3.10, 3.11 and 3.12 are now available. (As these Python versions are now in security-fix-only mode, these are source-only releases, and there is no pre-set release cadence.)

## Security content in these releases

### Email and header-related
* [gh-144125](https://github.com/python/cpython/issues/144125): `email.generator.BytesGenerator` now refuses to serialize headers that are unsafely folded or delimited (see `email.policy.Policy.verify_generated_headers`); addressing [CVE-2024-6923](https://nvd.nist.gov/vuln/detail/CVE-2024-6923).
* [gh-143935](https://github.com/python/cpython/issues/143935): Fixed comment folding in modern email policies to prevent header injection when very long non-foldable comment text is wrapped.
* [gh-136063](https://github.com/python/cpython/issues/136063): `email.message` now ensures linear complexity for legacy HTTP parameter parsing.

### HTTP, cookies, and URL parsing-related
* [gh-143916](https://github.com/python/cpython/issues/143916): `wsgiref.headers.Headers` now rejects C0 control characters in fields, values, and parameters.
* [gh-143919](https://github.com/python/cpython/issues/143919): `http.cookies.Morsel` now rejects control characters in fields and values.
* [gh-143925](https://github.com/python/cpython/issues/143925): `data:` URL media types now reject control characters.

### XML-related
* [gh-144363](https://github.com/python/cpython/issues/144363): Upgraded bundled libexpat to 2.7.4 to fix [CVE-2026-24515](https://nvd.nist.gov/vuln/detail/CVE-2026-24515) and [CVE-2026-25210](https://nvd.nist.gov/vuln/detail/CVE-2026-25210).
* [gh-90949](https://github.com/python/cpython/issues/90949): Added Expat allocation-tracker APIs to `xml.parsers.expat` parser objects to limit memory amplification from malicious XML input; includes mitigation for [CVE-2025-59375](https://nvd.nist.gov/vuln/detail/CVE-2025-59375).
* [gh-142145](https://github.com/python/cpython/issues/142145): Removed quadratic behavior in `xml.dom.minidom` node ID cache clearing.

### Denial-of-service hardening
* [gh-119342](https://github.com/python/cpython/issues/119342): Fixed a potential memory denial of service in `plistlib`.
* [gh-119451](https://github.com/python/cpython/issues/119451): Fixed a potential memory denial of service in `http.client`.
* [gh-119452](https://github.com/python/cpython/issues/119452): Fixed a potential memory denial of service in `http.server` (CGI server on Windows).
* [gh-136065](https://github.com/python/cpython/issues/136065): Fixed quadratic complexity in `os.path.expandvars()`.

### HTML parsing-related
* [gh-137836](https://github.com/python/cpython/issues/137836): Hardened `html.parser.HTMLParser` with support for additional RAWTEXT/PLAINTEXT elements (`plaintext`, `xmp`, `iframe`, `noembed`, `noframes`, optional `noscript`), improving robust handling of hostile markup.

### SSL memory-safety fixes
* [gh-144833](https://github.com/python/cpython/issues/144833): Fixed a use-after-free in `ssl` when `SSL_new()` fails.

# Python 3.12.13

https://www.python.org/downloads/release/python-31213/

# Python 3.11.15

Additional fixes in this release (they were already included in a previous 3.12 release): 
* [gh-120298](https://github.com/python/cpython/issues/120298): Fixed a use-after-free in list rich comparison handling (`list_richcompare_impl`) for specially crafted concurrent inputs.
* [gh-120384](https://github.com/python/cpython/issues/120384): Fixed an out-of-bounds access in list slice assignment (`list_ass_subscript`) under specially crafted concurrent inputs.


https://www.python.org/downloads/release/python-31115/

# Python 3.10.20

Additional fixes in this release (they were already included in a previous 3.12 release): 
* [gh-120298](https://github.com/python/cpython/issues/120298): Fixed a use-after-free in list rich comparison handling (`list_richcompare_impl`) for specially crafted concurrent inputs.
* [gh-120384](https://github.com/python/cpython/issues/120384): Fixed an out-of-bounds access in list slice assignment (`list_ass_subscript`) under specially crafted concurrent inputs.

https://www.python.org/downloads/release/python-31020/

## Stay safe and upgrade!

As always, upgrading is highly recommended to all users of affected versions.

## Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and this release possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Regards from your security-fix release team,
Thomas Wouters
Pablo Galindo Salgado
