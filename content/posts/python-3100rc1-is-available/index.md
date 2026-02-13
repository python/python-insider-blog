---
title: Python 3.10.0rc1 is available
publishDate: '2021-08-03'
updatedDate: '2021-08-03'
author: Pablo Galindo
description: 'Python 3.10.0 is almost ready. This release, 3.10.0rc1, is the penultimate release preview. You can get it here: https://www.python.org/downloads/release/pyt...'
tags: []
published: true
legacyUrl: /2021/08/python-3100rc1-is-available.html
---

Python 3.10.0 is almost ready. This release, 3.10.0rc1, is the penultimate release preview. You can get it here:

[https://www.python.org/downloads/release/python-3100rc1/](https://www.python.org/downloads/release/python-3100rc1/)

This release, \*\*3.10.0rc1\*\*, is the penultimate release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate and the last planned release preview is currently planned for 2021-09-06 while the official release is planned for 2021-10-04.  
There will be no ABI changes from this point forward in the 3.10 series and the goal is that there will be as few code changes as possible.

## Call to action

#### Core developers: all eyes on the docs now

-   Are all your changes properly documented?
-   Did you notice other changes you know of to have insufficient documentation?

#### Community members

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

The next pre-release, the second release candidate, will only be released if needed (scheduled for Monday, 2021-09-06). Otherwise, the next release will directly be the final release of Python 3.10.0, which is currently scheduled for Monday, 2021-10-04.

[bpo-38605](https://bugs.python.org/issue38605): `from __future__ import annotations` ([PEP 563](https://www.python.org/dev/peps/pep-0563/)) used to be on this list in previous pre-releases but it has been postponed to Python 3.11 due to some compatibility concerns. You can read the Steering Council communication about it [here](https://mail.python.org/archives/list/python-dev@python.org/thread/CLVXXPQ2T2LQ5MP2Y53VVQFCXYWQJHKZ/) to learn more.

### More resources

-   [Online Documentation](https://docs.python.org/3.10/)
-   [PEP 619](https://www.python.org/dev/peps/pep-0619/), 3.10 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

### And now for something completely different

In quantum physics, the spin is an intrinsic form of angular momentum carried by elementary particles, composite particles, and atomic nuclei. The spin is one of two types of angular momentum in quantum mechanics, the other being orbital angular momentum. The orbital angular momentum operator is the quantum-mechanical counterpart to the classical angular momentum of orbital revolution and appears when there is periodic structure to its wavefunction as the angle varies. For photons, spin is the quantum-mechanical counterpart of the polarization of light; for electrons, the spin has no classical counterpart.

### We hope you enjoy those new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,

Pablo Galindo @pablogsal

Ned Deily @nad

Steve Dower @steve.dower
