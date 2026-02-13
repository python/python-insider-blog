---
title: Python 3.9.7 and 3.8.12 are now available
publishDate: '2021-08-30'
updatedDate: '2021-08-30'
author: Łukasz Langa
description: 'Python 3.9.7 Get it here: https://www.python.org/downloads/release/python-397/   Python 3.9.7 is the newest major stable release of the Python programming la...'
tags: []
published: true
legacyUrl: /2021/08/python-397-and-3812-are-now-available.html
---

## Python 3.9.7

Get it here: [https://www.python.org/downloads/release/python-397/](https://www.python.org/downloads/release/python-397/)  

Python 3.9.7 is the newest major **stable** release of the Python programming language, and it contains many new features and optimizations. There’s been 187 commits since 3.9.6 which is a similar amount compared to 3.8 at the same stage of the release cycle. See the [change log](https://docs.python.org/release/3.9.7/whatsnew/changelog.html) for details.

On macOS, we encourage you to use the `universal2` binary installer variant whenever possible. The legacy 10.9+ Intel-only variant will not be provided for Python 3.10 and the `universal2` variant will become the default download for 3.9.8. You may need to upgrade third-party components, like `pip`, to later versions. You may experience differences in behavior in IDLE and other Tk-based applications due to using the newer version of Tk. As always, if you encounter problems when using this installer variant, please check [https://bugs.python.org](https://bugs.python.org) for existing reports and for opening new issues.

The next Python 3.9 maintenance release will be 3.9.8, currently scheduled for 2021-11-01.

## [](https://discuss.python.org/t/python-3-9-7-and-3-8-12-now-available/10401#the-second-security-only-release-of-python-38-2)The Second Security-Only Release of Python 3.8

Get it here: [https://www.python.org/downloads/release/python-3812/](https://www.python.org/downloads/release/python-3812/)  

Security content in this release contains four fixes. There are also four additional fixes for bugs that might have lead to denial-of-service attacks. Finally, while we’re not providing binary installers anymore, for those users who produce installers, we upgraded the OpenSSL version used to 1.1.1l. Take a look at the [change log](https://docs.python.org/release/3.8.12/whatsnew/changelog.html) for details.

According to the release calendar specified in [PEP 569](https://www.python.org/dev/peps/pep-0569/), Python 3.8 is now in “security fixes only” stage of its life cycle: 3.8 branch only accepts security fixes and releases of those are made irregularly in source-only form until October 2024. Python 3.8 isn’t receiving regular bug fixes anymore, and binary installers are no longer provided for it. **Python 3.8.10** was the last full *bugfix release* of Python 3.8 with binary installers.

## [](https://discuss.python.org/t/python-3-9-7-and-3-8-12-now-available/10401#security-releases-of-3712-and-3615-3)Security releases of 3.7.12 and 3.6.15

Those aren’t ready just yet but are soon to follow.

Similarly to 3.8, Python 3.7 and 3.6 are now in “security fixes only” stage of their life cycle. Python 3.7 will be providing source archives until June 2023 while Python 3.6 ends its life in December 2021.

## [](https://discuss.python.org/t/python-3-9-7-and-3-8-12-now-available/10401#we-hope-you-enjoy-the-new-releases-4)We hope you enjoy the new releases

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
