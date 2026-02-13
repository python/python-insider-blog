---
title: Python 3.10.0a7 is now available for testing
publishDate: '2021-04-06'
updatedDate: '2021-04-07'
author: Pablo Galindo
description: 'Brrrrr… do you feel that? That’s the chill of beta freeze coming closer. Meanwhile, your friendly CPython release team doesn’t rest even on holidays and we h...'
tags: []
published: true
legacyUrl: /2021/04/python-3100a7-is-now-available-for.html
---

Brrrrr… do you feel that? That’s the chill of beta freeze coming closer. Meanwhile, your friendly CPython release team doesn’t rest even on holidays and we have prepared a shiny new release for you: Python 3.10.0a7.

Get the new release here:

[https://www.python.org/downloads/release/python-3100a7/](https://www.python.org/downloads/release/python-3100a7/)

Python 3.10.0a7

Release Date: April 5, 2021

This is an early developer preview of Python 3.10

### Major new features of the 3.10 series, compared to 3.9

Python 3.10 is still in development. This release, 3.10.0a7 is the last of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2021-05-03) and, if necessary, may be modified or deleted up until the release candidate phase (2021-10-04). Please keep in mind that this is a preview release and its use is not recommended for production environments.

Many new features for Python 3.10 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 623](https://www.python.org/dev/peps/pep-0623/) – Deprecate and prepare for the removal of the wstr member in PyUnicodeObject.
-   [PEP 604](https://www.python.org/dev/peps/pep-0604/) – Allow writing union types as X | Y
-   [PEP 612](https://www.python.org/dev/peps/pep-0612/) – Parameter Specification Variables
-   [PEP 626](https://www.python.org/dev/peps/pep-0626/) – Precise line numbers for debugging and other tools.
-   [bpo-38605](https://bugs.python.org/issue38605): `from __future__ import annotations` ([PEP 563](https://www.python.org/dev/peps/pep-0563/)) is now the default.
-   [PEP 618](https://www.python.org/dev/peps/pep-0618/) – Add Optional Length-Checking To zip.
-   [bpo-12782](https://bugs.python.org/issue12782): Parenthesized context managers are now officially allowed.
-   [PEP 632](https://www.python.org/dev/peps/pep-0632/) – Deprecate distutils module.
-   [PEP 613](https://www.python.org/dev/peps/pep-0613/) – Explicit Type Aliases
-   [PEP 634](https://www.python.org/dev/peps/pep-0634/) – Structural Pattern Matching: Specification
-   [PEP 635](https://www.python.org/dev/peps/pep-0635/) – Structural Pattern Matching: Motivation and Rationale
-   [PEP 636](https://www.python.org/dev/peps/pep-0636/) – Structural Pattern Matching: Tutorial
-   [PEP 644](https://www.python.org/dev/peps/pep-0644/) – Require OpenSSL 1.1.1 or newer
-   [PEP 624](https://www.python.org/dev/peps/pep-0624/) – Remove Py\_UNICODE encoder APIs
-   [PEP 597](https://www.python.org/dev/peps/pep-0597/) – Add optional EncodingWarning
-   (Hey, fellow core developer, if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.10 will be 3.10.0b1 ( the first beta release and feature freeze ), currently scheduled for Monday, 2021-05-03.

# [](https://discuss.python.org/t/python-3-10-0a7-is-now-available/8107#more-resources)More resources

-   [Online Documentation](https://docs.python.org/3.10/)
-   [PEP 619](https://www.python.org/dev/peps/pep-0619/), 3.10 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-10-0a7-is-now-available/8107#and-now-for-something-completely-different)And now for something completely different

In physics, the [twin paradox](https://en.wikipedia.org/wiki/Twin_paradox) is a thought experiment in special relativity involving identical twins, one of whom makes a journey into space in a high-speed rocket and returns home to find that the twin who remained on Earth has aged more. This result appears puzzling because each twin sees the other twin as moving, and so, as a consequence of an incorrect and naive application of time dilation and the principle of relativity, each should paradoxically find the other to have aged less. However, this scenario can be resolved by realising that the travelling twin is undergoing acceleration, which makes him a non-inertial observer. In both views, there is no symmetry between the spacetime paths of the twins. Therefore, the twin paradox is not a paradox in the sense of a logical contradiction.

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)
