---
title: Python 3.10.0a5 is now available for testing
publishDate: '2021-02-03'
updatedDate: '2021-03-01'
author: Pablo Galindo
description: 'Well, this one took a bit more time due to some surprise last time reference leaks and release blockers to fix, but now Python 3.10.0a5 it’s here. Will this ...'
tags: []
published: true
legacyUrl: /2021/02/python-3100a5-is-now-available-for.html
---

Well, this one took a bit more time due to some surprise last time reference leaks and release blockers to fix, but now Python 3.10.0a5 it’s here. Will this be the first release announcements of the 3.10 series without copy-paste typos? Go get it here:

[https://www.python.org/downloads/release/python-3100a5/](https://www.python.org/downloads/release/python-3100a5/)

This is an early developer preview of Python 3.10

# Major new features of the 3.10 series, compared to 3.9

Python 3.10 is still in development. This release, 3.10.0a5 is the fifth of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2021-05-03) and, if necessary, may be modified or deleted up until the release candidate phase (2021-10-04). Please keep in mind that this is a preview release and its use is not recommended for production environments.

Many new features for Python 3.10 are still being planned and written. Among the new major new features and changes so far:

-   [PEP 623](https://www.python.org/dev/peps/pep-0623/) – Remove wstr from Unicode
-   [PEP 604](https://www.python.org/dev/peps/pep-0604/) – Allow writing union types as X | Y
-   [PEP 612](https://www.python.org/dev/peps/pep-0612/) – Parameter Specification Variables
-   [PEP 626](https://www.python.org/dev/peps/pep-0626/) – Precise line numbers for debugging and other tools.
-   [bpo-38605](https://bugs.python.org/issue38605): `from __future__ import annotations` ([PEP 563](https://www.python.org/dev/peps/pep-0563/) ) is now the default.
-   [PEP 618](https://www.python.org/dev/peps/pep-0618/) – Add Optional Length-Checking To zip.
-   [bpo-12782](https://bugs.python.org/issue12782) : Parenthesized context managers are now officially allowed.
-   (Hey, fellow core developer, if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.10 will be 3.10.0a6, currently scheduled for 2021-03-01.

# More resources

-   [Online Documentation](https://docs.python.org/3.10/)
-   [PEP 619](https://www.python.org/dev/peps/pep-0619/) , 3.10 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

# And now for something completely different

The Chandrasekhar limit is the maximum mass of a stable white dwarf star. White dwarfs resist gravitational collapse primarily through electron degeneracy pressure, compared to main sequence stars, which resist collapse through thermal pressure. The Chandrasekhar limit is the mass above which electron degeneracy pressure in the star’s core is insufficient to balance the star’s own gravitational self-attraction. Consequently, a white dwarf with a mass greater than the limit is subject to further gravitational collapse, evolving into a different type of stellar remnant, such as a neutron star or black hole. Those with masses up to the limit remain stable as white dwarfs. The currently accepted value of the Chandrasekhar limit is about 1.4 M☉ (2.765×1030 kg). So we can be safe knowing that our sun is not going to become a black hole!
