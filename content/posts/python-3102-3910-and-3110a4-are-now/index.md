---
title: 'Python 3.10.2, 3.9.10, and 3.11.0a4 are now available'
publishDate: '2022-01-14'
updatedDate: '2022-01-14'
author: Łukasz Langa
description: 'Before we begin the usual round of release notes, please do note that the three new versions of Python released today do not contain Windows installers yet. ...'
tags: []
published: true
legacyUrl: /2022/01/python-3102-3910-and-3110a4-are-now.html
---

Before we begin the usual round of release notes, please do note that the three new versions of Python released today do not contain Windows installers yet. This is temporary, due to a more complex than expected code signing certificate renewal.

We’ve held the releases all week while the situation is getting resolved but the urgency of 3.10.2 in particular made us release without the Windows installers after all. We apologize for the inconvenience and are doing everything we can to put the Windows installer in place as soon as possible.

We’re rooting for both Ee Durbin and Steve Dower who are helping us resolve this. Thanks for your hard work! Hopefully, by this time next week, this will only be a footnote in release management history.

The releases you’re looking at were all **cursed** in some way. What a way to start 2022! Besides the certificate hold up, *Python 3.10.2* is an expedited release (you’ll want to upgrade, read below!), *Python 3.11.0a4* had almost 20 (sic, twenty!) release blockers before being finally green, and *Python 3.9.10* was made from a new M1 Mac on macOS Monterey which made the usually boring process quite a ride. We’re hoping 2022 won’t be this intense all year!

### [](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146#python-3102-1)Python 3.10.2

Get it here: [https://www.python.org/downloads/release/python-3102/](https://www.python.org/downloads/release/python-3102/)**[](https://www.python.org/downloads/release/python-3102/)  
**

**This is a special bugfix release ahead of schedule to address a memory leak that was happening on certain function calls when using [Cython](https://github.com/cython/cython)**. The memory leak consisted of a small constant amount of bytes in certain function calls from Cython code. Although in most cases this was not very noticeable, it was very impactful for long-running applications and certain usage patterns. Check [bpo-46347](https://bugs.python.org/issue46347) for more information.

**Upgrading existing Python 3.10 installations is highly recommended.** Even though this is an expedited release, it still contains over 100 other bug fixes. See the [change log](https://docs.python.org/release/3.10.2/whatsnew/changelog.html) for details.

The next Python 3.10 maintenance release will be 3.10.3, currently scheduled for 2022-04-04.

### [](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146#python-3910-2)Python 3.9.10

Get it here: [https://www.python.org/downloads/release/python-3910/](https://www.python.org/downloads/release/python-3910/)  

Python 3.9.10 is the ninth maintenance release of the legacy 3.9 series. **Note:** Python 3.10 is now the latest feature release series of Python 3.

Python 3.9 micro-releases enter double digits! There’s been 130 commits since 3.9.9 which is a higher number of fixes for this stage of the life cycle compared to 3.8. See the [changelog](https://docs.python.org/release/3.9.10/whatsnew/changelog.html) for details on what changed.

As a reminder, on macOS, the default installer is now the new `universal2` variant. It’s compatible with Mac OS X 10.9 and newer, including macOS 11 Big Sur and macOS 12 Monterey. Python installed with this variant will work natively on Apple Silicon processors.

The next Python 3.9 maintenance release will be 3.9.11, currently scheduled for Pi Day '22 (2022-03-14).

### [](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146#python-3110a4-3)Python 3.11.0a4

Get it here: [https://www.python.org/downloads/release/python-3110a4/](https://www.python.org/downloads/release/python-3110a4/)  

Python 3.11 is still in development. This release, 3.11.0a4, is the fourth of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes by the community, as well as to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2022-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2022-08-01). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.11 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 657](https://www.python.org/dev/peps/pep-0657/) – Include Fine-Grained Error Locations in Tracebacks
-   [PEP 654](https://www.python.org/dev/peps/pep-0654/) – Exception Groups and except\*
-   The [Faster CPython Project](https://github.com/faster-cpython) is already yielding some exciting results: this version of CPython 3.11 is ~ 19% faster on the geometric mean of the PyPerformance benchmarks, compared to 3.10.0.
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.11 will be 3.11.0a5, currently scheduled for Wednesday, 2022-02-02.

### [](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146#python-36-is-pining-for-the-fjords-4)Python 3.6 is pining for the fjords

Python 3.6 is no more. It’s an ex-Python. It has ceased to be. On December 23rd 2021 is has [reached its end-of-life phase](https://www.python.org/dev/peps/pep-0494/) after five successful years.

It’s been the first truly popular Python 3 release, introducing f-strings to the world and making big improvements to both asyncio (async generators!) and typing (variable annotations!).

We’d like to congratulate Ned Deily [@nad](https://discuss.python.org/u/nad) on successfully driving the 3.6 series to completion as Release Manager. He’s not fully retired yet, as 3.7, which he is also managing, is still receiving security patches until June 2023.

### [](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146#we-hope-you-enjoy-the-new-releases-5)We hope you enjoy the new releases

Your friendly release team,  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
