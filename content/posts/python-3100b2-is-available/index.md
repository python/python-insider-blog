---
title: Python 3.10.0b2 is available
publishDate: '2021-06-01'
updatedDate: '2021-06-01'
author: Pablo Galindo
description: 'After fighting with some release blockers, implementing a bunch of GC traversal functions, and fixing some pending reference leaks, we finally have Python 3....'
tags: []
published: true
legacyUrl: /2021/06/python-3100b2-is-available.html
---

After fighting with some release blockers, implementing a bunch of GC traversal functions, and fixing some pending reference leaks, we finally have Python 3.10.0 beta 2 ready for you! Thanks to everyone that helped to unblock the release!

https://www.python.org/downloads/release/python-3100b2/

### This is a beta preview of Python 3.10

Python 3.10 is still in development. 3.10.0b2 is the second of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We \*\*strongly encourage\*\* maintainers of third-party Python projects to \*\*test with 3.10\*\* during the beta phase and report issues found to \[the Python bug tracker\](https://bugs.python.org/) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2021-08-02). Our goal is to have no ABI changes after beta 4 and as few code changes as possible after 3.10.0rc1, the first release candidate. To achieve that, it will be \*\*extremely important\*\* to get as much exposure for 3.10 as possible during the beta phase.

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

The next pre-release of Python 3.10 will be 3.10.0b3, currently scheduled for Thursday, 2021-06-17.

[bpo-38605](https://bugs.python.org/issue38605): `from __future__ import annotations` ([PEP 563](https://www.python.org/dev/peps/pep-0563/)) used to be on this list in previous pre-releases but it has been postponed to Python 3.11 due to some compatibility concerns. You can read the Steering Council communication about it [here](https://mail.python.org/archives/list/python-dev@python.org/thread/CLVXXPQ2T2LQ5MP2Y53VVQFCXYWQJHKZ/) to learn more.

### More resources

-   [Online Documentation](https://docs.python.org/3.10/)
-   [PEP 619](https://www.python.org/dev/peps/pep-0619/), 3.10 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

### And now for something completely different

The Ehrenfest paradox concerns the rotation of a "rigid" disc in the theory of relativity. In its original 1909 formulation as presented by Paul Ehrenfest in relation to the concept of Born rigidity within special relativity, it discusses an ideally rigid cylinder that is made to rotate about its axis of symmetry. The radius R as seen in the laboratory frame is always perpendicular to its motion and should therefore be equal to its value R0 when stationary. However, the circumference (2πR) should appear Lorentz-contracted to a smaller value than at rest. This leads to the apparent contradiction that R = R0 and R < R0.

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,

Pablo Galindo @pablogsal

Ned Deily @nad

Steve Dower @steve.dower
