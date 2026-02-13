---
title: Python 3.10.0rc2 is available
publishDate: '2021-09-07'
updatedDate: '2021-09-07'
author: Pablo Galindo
description: 'Python 3.10 is one month away, can you believe it? This snake is still trying to bite as it has been an interesting day of fighting fires, release blockers, ...'
tags: []
published: true
legacyUrl: /2021/09/python-3100rc2-is-available.html
---

Python 3.10 is one month away, can you believe it? This snake is still trying to bite as it has been an interesting day of fighting fires, release blockers, and a bunch of late bugs but your friendly release team always delivers ![:slight_smile:](./image-1.png)

You can get this new release while is still fresh here:

[https://www.python.org/downloads/release/python-3100rc2/](https://www.python.org/downloads/release/python-3100rc2/)

This release, 3.10.0rc2, is the last preview before the final release of Python 3.10.0 on 2021-10-04. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between release candidates and the final release. There will be no ABI changes from this point forward in the 3.10 series and the goal is that there will be as few code changes as possible.

### Call to action

![:warning:](./image-2.png) ![:warning:](./image-3.png) ![:warning:](./image-4.png) ![:warning:](./image-5.png) ![:warning:](./image-6.png) ![:warning:](./image-7.png)

The 3.10 branch is now accepting changes for 3.10.1. To maximize stability, the final release will be cut from the v3.10.0rc2 tag. If you need the release manager to cherry-pick any critical fixes, mark issues as release blockers and/or add him as a reviewer on a critical backport PR on GitHub.

To see which changes are currently cherry-picked for inclusion in 3.10.0, look at the short-lived branch-v3.10.0 [https://github.com/python/cpython/tree/branch-v3.10.0](https://github.com/python/cpython/tree/branch-v3.10.0) on GitHub.

![:warning:](./image-8.png) ![:warning:](./image-9.png) ![:warning:](./image-10.png) ![:warning:](./image-11.png) ![:warning:](./image-12.png) ![:warning:](./image-13.png)

#### **Core developers: all eyes on the docs now**

-   Are all your changes properly documented?

-   Did you notice other changes you know of to have insufficient documentation?

#### **Community members**

We strongly encourage maintainers of third-party Python projects to prepare their projects for 3.10 compatibilities during this phase. As always, report any issues to [the Python bug tracker](https://bugs.python.org/).

Please keep in mind that this is a preview release and its use is \*\*not\*\* recommended for production environments.

### Major new features of the 3.10 series, compared to 3.9

Many new features for Python 3.10 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 623](https://www.python.org/dev/peps/pep-0623/) – Deprecate and prepare for the removal of the wstr member in PyUnicodeObject.
-   [PEP 604](https://www.python.org/dev/peps/pep-0604/) – Allow writing union types as X | Y
-   [PEP 612](https://www.python.org/dev/peps/pep-0612/) – Parameter Specification Variables
-   [PEP 626](https://www.python.org/dev/peps/pep-0626/) – Precise line numbers for debugging and other tools.
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

The next release will be the final release of Python 3.10.0, which is currently scheduled for Monday, 2021-10-04.

[bpo-38605](https://bugs.python.org/issue38605): `from __future__ import annotations` ([PEP 563](https://www.python.org/dev/peps/pep-0563/)) used to be on this list in previous pre-releases but it has been postponed to Python 3.11 due to some compatibility concerns. You can read the Steering Council communication about it [here](https://mail.python.org/archives/list/python-dev@python.org/thread/CLVXXPQ2T2LQ5MP2Y53VVQFCXYWQJHKZ/) to learn more.

### More resources

-   [Online Documentation](https://docs.python.org/3.10/)
-   [PEP 619](https://www.python.org/dev/peps/pep-0619/), 3.10 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

### And now for something completely different

Maxwell’s demon is a thought experiment that would hypothetically violate the second law of thermodynamics. It was proposed by the physicist James Clerk Maxwell in 1867. In the thought experiment, a demon controls a small massless door between two chambers of gas. As individual gas molecules (or atoms) approach the door, the demon quickly opens and closes the door to allow only fast-moving molecules to pass through in one direction, and only slow-moving molecules to pass through in the other. Because the kinetic temperature of a gas depends on the velocities of its constituent molecules, the demon’s actions cause one chamber to warm up and the other to cool down. This would decrease the total entropy of the two gases, without applying any work, thereby violating the second law of thermodynamics.

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,

Pablo Galindo @pablogsal

Ned Deily @nad

Steve Dower @steve.dower
