---
title: 'Python 3.8.10, 3.9.5, and 3.10.0b1 are now available'
publishDate: '2021-05-03'
updatedDate: '2021-05-03'
author: Łukasz Langa
description: This has been a very busy day for releases and on behalf of the Python development community we’re happy to announce the availability of three new Python rel...
tags: []
published: true
legacyUrl: /2021/05/python-3810-395-and-3100b1-are-now.html
---

This has been a very busy day for releases and on behalf of the Python development community we’re happy to announce the availability of three new Python releases.

## [](https://discuss.python.org/t/python-3-8-10-3-9-5-and-3-10-0b1-are-now-available/8533#python-310-is-now-in-beta-1)Python 3.10 is now in Beta

Get it here: [https://www.python.org/downloads/release/python-3100b1/](https://www.python.org/downloads/release/python-3100b1/)  

Python 3.10 is still in development. 3.10.0b1 is the first of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We **strongly encourage** maintainers of third-party Python projects to **test with 3.10** during the beta phase and report issues found to [the Python bug tracker](https://bugs.python.org) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2021-08-02). Our goal is have no ABI changes after beta 4 and as few code changes as possible after 3.10.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.10 as possible during the beta phase.

Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

The next pre-release, the second beta release of Python 3.10, will be 3.10.0b2. It is currently scheduled for 2021-05-25. Please see [PEP 619](https://www.python.org/dev/peps/pep-0619/) for details.

## [](https://discuss.python.org/t/python-3-8-10-3-9-5-and-3-10-0b1-are-now-available/8533#development-begins-on-python-311-2)Development Begins on Python 3.11

With Python 3.10 moving to beta, it received its own `3.10` branch in the [repository](https://github.com/python/cpython/). All new features are now targeting Python 3.11, to be released in October 2022.

Using the opportunity with the creation of the `3.10` branch, we renamed the `master` branch of the repository to `main`. It’s been [a bit rocky](https://github.community/t/renaming-python-master-branch-to-main-1-4k-prs-700-repositories-triggered-server-http-error-500/178090) but looks like we’re open for business. **Please rename the main branch of your personal fork** using the guide GitHub will give you when you go to your fork’s main page. In case of any outstanding issues, please contact the [3.11 RM](https://devguide.python.org/devcycle/#current-administrators).

## [](https://discuss.python.org/t/python-3-8-10-3-9-5-and-3-10-0b1-are-now-available/8533#python-395-3)Python 3.9.5

Get it here: [https://www.python.org/downloads/release/python-395/](https://www.python.org/downloads/release/python-395/)  

Python 3.9.5 is the newest major **stable** release of the Python programming language, and it contains many new features and optimizations. There’s been 111 commits since 3.9.4 which is a similar amount compared to 3.8 at the same stage of the release cycle. See the [change log](https://docs.python.org/release/3.9.5/whatsnew/changelog.html) for details.

On macOS, we encourage you to use the `universal2` binary installer variant whenever possible. The legacy 10.9+ Intel-only variant will not be provided for Python 3.10 and the `universal2` variant will become the default download for future 3.9.x releases. You may need to upgrade third-party components, like `pip`, to later versions once they are released. You may experience differences in behavior in IDLE and other Tk-based applications due to using the newer version of Tk. As always, if you encounter problems when using this installer variant, please check [https://bugs.python.org](https://bugs.python.org) for existing reports and for opening new issues.

The next Python 3.9 maintenance release will be 3.9.6, currently scheduled for 2021-06-28.

## [](https://discuss.python.org/t/python-3-8-10-3-9-5-and-3-10-0b1-are-now-available/8533#the-last-regular-bugfix-release-of-python-38-4)The Last Regular Bugfix Release of Python 3.8

Get it here: [https://www.python.org/downloads/release/python-3810/](https://www.python.org/downloads/release/python-3810/)  

According to the release calendar specified in [PEP 569](https://www.python.org/dev/peps/pep-0569/), Python 3.8.10 is the final regular maintenance release. Starting now, the 3.8 branch will only accept security fixes and releases of those will be made in source-only form until October 2024. To keep receiving regular bug fixes, please upgrade to Python 3.9.

Compared to the 3.7 series, this last regular bugfix release is relatively dormant at 92 commits since 3.8.9. Version 3.7.8, the final regular bugfix release of Python 3.7, included 187 commits. But there’s a bunch of important updates here regardless, the biggest being macOS Big Sur and Apple Silicon build support. This work would not have been possible without the effort of Ronald Oussoren, Ned Deily, Maxime Bélanger, and Lawrence D’Anna from Apple. Thank you!

Take a look at the [change log](https://docs.python.org/release/3.8.10/whatsnew/changelog.html) for details.

## [](https://discuss.python.org/t/python-3-8-10-3-9-5-and-3-10-0b1-are-now-available/8533#we-hope-you-enjoy-the-new-releases-5)We hope you enjoy the new releases

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
