---
title: 'Python 3.11.4, 3.10.12, 3.9.17, 3.8.17, 3.7.17, and 3.12.0 beta 2 are now available'
publishDate: '2023-06-07'
updatedDate: '2023-06-07'
author: Łukasz Langa
description: 'Greetings! Time for another combined release of six separate versions of Python! [](https://discuss.python.org/t/python-3-11-4-3-10-12-3-9-17-3-8-17-3-7-17-a...'
tags: []
published: true
legacyUrl: /2023/06/python-3114-31012-3917-3817-3717-and.html
---

Greetings! Time for another combined release of six separate versions of Python!

### [](https://discuss.python.org/t/python-3-11-4-3-10-12-3-9-17-3-8-17-3-7-17-and-3-12-0-beta-2-are-now-availble/27477#before-you-scroll-away-to-the-download-links-1)Before you scroll away to the download links

Please test the 3.12 beta! Downloading it and trying it out helps us a lot in ensuring Python 3.12.0 will be as polished as possible.

We welcome 3.10 to the prestigious club of security-only releases. It’s officially an old version of Python now! If you haven’t rewritten all your `if:elif:else:`s with pattern matching yet, are you even still writing Python?

At the same time, it looks like 3.7 is reaching end-of-life. Unless another security release happens in June, 3.7.17 will be the final release of Python 3.7. I mean, now that I typed it out for all you to read, I’m sure I jinxed it. But in case I didn’t, I would like to thank Ned Deily for serving as the release manager of Python 3.6 and Python 3.7. He was my mentor as Release Manager, and continues serving Python as the provider of Mac installers for new releases. Thank you, Ned!

Speaking of installers, Steve Dower used to be the sole provider of Windows installers for Python releases for years now. His secret was a well-automated Azure pipeline that let him build, sign, and publish releases with minimal manual effort. Now he extended the power to press the blue “Run pipeline” button to more members of the team. Thank you, Steve! This is an important bus factor increment. In fact, the Windows installers for both 3.12.0b2 and 3.11.4 were ~made by me~ [initiated by me](https://dev.azure.com/Python/cpython/_build/results?buildId=129764&view=results). If there’s anything wrong with them, well, I guess that means I pressed the button wrong.

### [](https://discuss.python.org/t/python-3-11-4-3-10-12-3-9-17-3-8-17-3-7-17-and-3-12-0-beta-2-are-now-availble/27477#security-fixes-in-todays-releases-2)Security fixes in today’s releases

Updating is recommended due to security content:

-   3.7 - 3.12: [gh-103142](https://github.com/python/cpython/issues/103142): The version of OpenSSL used in Windows and Mac installers has been upgraded to 1.1.1u to address CVE-2023-2650, CVE-2023-0465, CVE-2023-0466, CVE-2023-0464, as well as CVE-2023-0286, CVE-2022-4303, and CVE-2022-4303 fixed previously in 1.1.1t (gh-101727).
-   3.7 - 3.11: [gh-102153](https://github.com/python/cpython/issues/102153): `urllib.parse.urlsplit()` now strips leading C0 control and space characters following the specification for URLs defined by WHATWG in response to CVE-2023-24329.
-   3.7 - 3.11: [gh-99889](https://github.com/python/cpython/issues/99889): Fixed a security in flaw in `uu.decode()` that could allow for directory traversal based on the input if no `out_file` was specified.
-   3.7 - 3.11: [gh-104049](https://github.com/python/cpython/issues/104049): Do not expose the local on-disk location in directory indexes produced by `http.client.SimpleHTTPRequestHandler`.
-   3.7 - 3.11: [gh-101283](https://github.com/python/cpython/issues/101283): `subprocess.Popen` now uses a safer approach to find `cmd.exe` when launching with `shell=True`.
-   3.8 - 3.11: [gh-103935](https://github.com/python/cpython/issues/103935): `trace.__main__` now uses `io.open_code()` for files to be executed instead of raw `open()`.
-   3.8 - 3.11: [gh-102953](https://github.com/python/cpython/issues/102953): The extraction methods in `tarfile`, and `shutil.unpack_archive()`, have a new `filter` argument that allows limiting `tar` features than may be surprising or dangerous, such as creating files outside the destination directory. See [Extraction filters](https://docs.python.org/3/library/tarfile.html#extraction-filters) for details.
-   3.9: [gh-102126](https://github.com/python/cpython/issues/102126): Fixed a deadlock at shutdown when clearing thread states if any finalizer tries to acquire the runtime head lock.
-   3.9: [gh-100892](https://github.com/python/cpython/issues/100892): Fixed a crash due to a race while iterating over thread states in clearing `threading.local`.

### Python 3.12.0 beta 2

Get it here: [3.12.0b2](https://www.python.org/downloads/release/python-3120b2/)

116 new commits since 3.12.0 beta 1.

### Python 3.11.4

Get it here: [3.11.4](https://www.python.org/downloads/release/python-3114/)

233 new commits.

### Python 3.10.12

Get it here: [3.10.12](https://www.python.org/downloads/release/python-31012/)

Security-only release with no binaries. 20 new commits.

### Python 3.9.17

Get it here: [3.9.17](https://www.python.org/downloads/release/python-3917/)

Security-only release with no binaries. 26 commits.

### Python 3.8.17

Get it here: [3.8.17](https://www.python.org/downloads/release/python-3817/)

Security-only release with no binaries. 24 commits.

### Python 3.7.17

Get it here as it might be [the last release of 3.7 ever](https://peps.python.org/pep-0537/):  
[3.7.17](https://www.python.org/downloads/release/python-3717/)

Security-only release with no binaries. 21 commits.

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the [Python Software Foundation](https://www.python.org/psf/).

–  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
on behalf of your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Thomas Wouters [@thomas](https://discuss.python.org/u/thomas)
