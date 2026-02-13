---
title: 'Python 3.12.12, 3.11.14, 3.10.19 and 3.9.24 are now available!'
publishDate: '2025-10-09'
updatedDate: '2025-10-14'
author: Thomas Wouters
description: '[](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-old-timer-release-party-1)Old-timer Release Party...'
tags:
  - releases
published: true
legacyUrl: /2025/10/python-31212-31114-31019-and-3924-are.html
---

# [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-old-timer-release-party-1)Old-timer Release Party

We couldn’t just let Hugo have fun with 3.14.0, so here are new security releases of the venerated Python versions, 3.12 through 3.9!

# [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-security-content-in-these-releases-2)Security content in these releases

### [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-xml-related-3)

### XML-related

-   [gh-139312](https://github.com/python/cpython/issues/139312): Upgraded bundled libexpat to 2.7.3 to fix [CVE-2025-59375](https://nvd.nist.gov/vuln/detail/CVE-2025-59375)
-   [gh-139400](https://github.com/python/cpython/issues/139400): [`xml.parsers.expat`](https://www.python.org/downloads/release/library/pyexpat.html#module-xml.parsers.expat): Made sure that parent Expat parsers are only garbage-collected once they are no longer referenced by subparsers created by [`ExternalEntityParserCreate()`](https://www.python.org/downloads/release/library/pyexpat.html#xml.parsers.expat.xmlparser.ExternalEntityParserCreate).

### [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-archive-related-4)Archive-related

-   [gh-130577](https://github.com/python/cpython/issues/130577): [`tarfile`](https://www.python.org/downloads/release/library/tarfile.html#module-tarfile) now validates archives to ensure member offsets are non-negative.
-   [gh-139700](https://github.com/python/cpython/issues/139700): Now checking consistency of the zip64 end of central directory record. Added support for records with “zip64 extensible data” if there are no bytes prepended to the ZIP file.

### [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-html-parsing-related-5)HTML parsing-related

-   [gh-135661](https://github.com/python/cpython/issues/135661): Fixed parsing start and end tags in [`html.parser.HTMLParser`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser) according to the HTML5 standard.
-   Whitespaces no longer accepted between `</` and the tag name. E.g. `</ script>` does not end the script section.
-   Vertical tabulation (`\v`) and non-ASCII whitespaces no longer recognized as whitespaces. The only whitespaces are `\t\n\r\f` and space.
-   Null character (U+0000) no longer ends the tag name.
-   Attributes and slashes after the tag name in end tags are now ignored, instead of terminating after the first `>` in quoted attribute value. E.g. `</script/foo=">"/>`.
-   Multiple slashes and whitespaces between the last attribute and closing `>` are now ignored in both start and end tags. E.g. `<a foo=bar/ //>`.
-   Multiple `=` between attribute name and value are no longer collapsed. E.g. `<a foo==bar>` produces attribute “foo” with value “=bar”.
-   [gh-135661](https://github.com/python/cpython/issues/135661): Fixed CDATA section parsing in [`html.parser.HTMLParser`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser) according to the HTML5 standard: `] ]>` and `]] >` no longer end the CDATA section. Add private method `_set_support_cdata()` which can be used to specify how to parse `<[CDATA[` — as a CDATA section in foreign content (SVG or MathML) or as a bogus comment in the HTML namespace.
-   [gh-102555](https://github.com/python/cpython/issues/102555): Fixed comment parsing in [`html.parser.HTMLParser`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser) according to the HTML5 standard. `--!>` now ends the comment. `-- >` no longer ends the comment. Support abnormally ended empty comments `<-->` and `<--->`.
-   [gh-135462](https://github.com/python/cpython/issues/135462): Fixed quadratic complexity in processing specially crafted input in [`html.parser.HTMLParser`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser). End-of-file errors are now handled according to the HTML5 specs – comments and declarations are automatically closed, tags are ignored.
-   [gh-118350](https://github.com/python/cpython/issues/118350): Fixed support of escapable raw text mode (elements “textarea” and “title”) in [`html.parser.HTMLParser`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser).
-   [gh-86155](https://github.com/python/cpython/issues/86155): [`html.parser.HTMLParser.close()`](https://www.python.org/downloads/release/library/html.parser.html#html.parser.HTMLParser.close) no longer loses data when the `<script>` tag is not closed.

## [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-python-31212-6)

### Python 3.12.12

[https://www.python.org/downloads/release/python-31212/](https://www.python.org/downloads/release/python-31212/)  

##   

### Python 3.11.14

Additional security content in this release:

-   [gh-135374](https://github.com/python/cpython/issues/135374): Update the bundled copy of setuptools to 79.0.1 to fix [CVE-2025-47273](https://nvd.nist.gov/vuln/detail/CVE-2025-47273) and [CVE-2024-6345](https://nvd.nist.gov/vuln/detail/CVE-2024-6345).

  
[https://www.python.org/downloads/release/python-31114/](https://www.python.org/downloads/release/python-31114/)

##   

### Python 3.10.19

Additional security content in this release:

-   [gh-135374](https://github.com/python/cpython/issues/135374): Update the bundled copy of setuptools to 79.0.1 to fix [CVE-2025-47273](https://nvd.nist.gov/vuln/detail/CVE-2025-47273) and [CVE-2024-6345](https://nvd.nist.gov/vuln/detail/CVE-2024-6345).

  
[https://www.python.org/downloads/release/python-31019/](https://www.python.org/downloads/release/python-31019/)

##   

### Python 3.9.24

Additional security content in this release:

-   [gh-135374](https://github.com/python/cpython/issues/135374): Update the bundled copy of setuptools to 79.0.1 to fix [CVE-2025-47273](https://nvd.nist.gov/vuln/detail/CVE-2025-47273) and [CVE-2024-6345](https://nvd.nist.gov/vuln/detail/CVE-2024-6345).
-   [gh-121227](https://github.com/python/cpython/issues/121227): Raise an `SSL.SSLError` if an empty *protocols* argument is passed to [`ssl.SSLContext.set_npn_protocols()`](https://www.python.org/downloads/release/library/ssl.html#ssl.SSLContext.set_npn_protocols) to fix [CVE-2024-5642](https://nvd.nist.gov/vuln/detail/CVE-2024-5642)

[https://www.python.org/downloads/release/python-3924/](https://www.python.org/downloads/release/python-3924/)

##   

# Stay safe and upgrade!

As always, upgrading is highly recommended to all users of affected versions.

# [](https://discuss.python.org/t/python-3-12-12-3-11-14-3-10-19-and-3-9-24-are-now-available/104273#p-273973-enjoy-the-new-releases-11)Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Regards from your ~very old~ tireless release team,  
Thomas Wouters  
Pablo Galindo Salgado  
Łukasz Langa  
Ned Deily  
Steve Dower
