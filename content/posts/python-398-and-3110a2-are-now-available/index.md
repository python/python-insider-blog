---
title: Python 3.9.8 and 3.11.0a2 are now available
publishDate: '2021-11-05'
updatedDate: '2021-11-05'
author: Łukasz Langa
description: 'Tcl/Tk updates With the recent release of macOS 12 Monterey, we noticed that  file dialogs are failing to show up on this new operating system, including in ...'
tags: []
published: true
legacyUrl: /2021/11/python-398-and-3110a2-are-now-available.html
---

## Tcl/Tk updates

With the recent release of macOS 12 Monterey, we noticed that `tkinter` file dialogs are failing to show up on this new operating system, including in our built-in IDLE. Thanks to rapid help from the Tk team, and Marc Culler in particular, we were able to fix the issue by bundling Python 3.9.8 and Python 3.11.0a2 with a fixed Tcl/Tk version. In 3.9.8 it’s a patched 8.6.11 release while 3.11.0a2 is rocking the bleeding-edge 8.6.12rc1.

Since the issue also affected our latest stable version, 3.10.0, an updated macOS installer for this version was issued. You can recognize it by the `post2` version appendix: [python-3.10.0post2-macos11.pkg](https://www.python.org/ftp/python/3.10.0/python-3.10.0post2-macos11.pkg). We didn’t have to bump the version number of Python itself since there are no Python source differences between this package and the original 3.10.0. The only difference is the bundled patched Tcl/Tk library.

Initially the original 3.10.0 installer was removed from the website after all URLs got updated to point to the patched version but [it turned out this breaks some workflows](https://discuss.python.org/t/disappearing-macos-packages-on-python-org/11737) so the patched installer is now also available under the original filename.

## [](https://discuss.python.org/t/python-3-9-8-and-3-11-0a2-are-now-available/11763#python-398-2)Python 3.9.8

Get it here: [https://www.python.org/downloads/release/python-398/](https://www.python.org/downloads/release/python-398/)  

Python 3.9.8 is the seventh maintenance release of the legacy 3.9 series. *Python 3.10* is now the latest feature release series of Python 3. [Get the latest release of 3.10.x here](https://python.org/downloads/).

There’s been 202 commits since 3.9.7 which shows that there’s still considerable interest in improving Python 3.9. To compare, at the same stage of the release cycle Python 3.8 received over 25% fewer commits. See the [changelog](https://docs.python.org/release/3.9.8/whatsnew/changelog.html) for details on what changed.

On macOS, the default installer is now the new `universal2` variant. It’s compatible with Mac OS X 10.9 and newer, including macOS 11 Big Sur and macOS 12 Monterey. You may need to upgrade third-party components, like `pip`, to the newest versions. You may experience differences in behavior in IDLE and other Tk-based applications due to using the newest version of Tk. As always, if you encounter problems when using this installer variant, please check [https://bugs.python.org](https://bugs.python.org) for existing reports and for opening new issues.

The next Python 3.9 maintenance release will be 3.9.9, currently scheduled for 2022-01-03.

## [](https://discuss.python.org/t/python-3-9-8-and-3-11-0a2-are-now-available/11763#python-3110a2-3)Python 3.11.0a2

Get it here: [https://www.python.org/downloads/release/python-3110a2/](https://www.python.org/downloads/release/python-3110a2/)

Python 3.11 is still in development. This release, 3.11.0a2 is the second of seven planned alpha releases.

Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process.

During the alpha phase, features may be added up until the start of the beta phase (2022-05-06) and, if necessary, may be modified or deleted up until the release candidate phase (2022-08-01). Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

Many new features for Python 3.11 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 657](https://www.python.org/dev/peps/pep-0657/) – Include Fine-Grained Error Locations in Tracebacks
-   The [Faster CPython Project 1](https://github.com/faster-cpython) is already yielding some exciting results: this version of CPython 3.11 is ~12% faster on the geometric mean of the PyPerformance benchmarks, compared to 3.10.0.
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.11 will be 3.11.0a3, currently scheduled for Monday, 2021-12-06.

## [](https://discuss.python.org/t/python-3-9-8-and-3-11-0a2-are-now-available/11763#we-hope-you-enjoy-the-new-releases-4)We hope you enjoy the new releases

Your friendly release team,  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
