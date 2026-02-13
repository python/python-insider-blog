---
title: Python 3.12.0 alpha 6 released
publishDate: '2023-03-08'
updatedDate: '2023-03-08'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.12 alpha 6. https://www.python.org/downloads/release/python-3120a6/ This is an early developer preview of Pyt...'
tags: []
published: true
legacyUrl: /2023/03/python-3120-alpha-6-released.html
---

I'm pleased to announce the release of Python 3.12 alpha 6.

[https://www.python.org/downloads/release/python-3120a6/](https://www.python.org/downloads/release/python-3120a6/)

**This is an early developer preview of Python 3.12.**

# Major new features of the 3.12 series, compared to 3.11

Python 3.12 is still in development. This release, 3.12.0a6 is the sixth of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2023-05-08) and, if necessary, may be modified or deleted up until the release candidate phase (2023-07-31). Please keep in mind that this is a preview release and its use is **not** recommended for production environments. Many new features for Python 3.12 are still being planned and written. Among the new major new features and changes so far:

-   Even more improved error messages. More exceptions potentially caused by typos now make suggestions to the user.
-   Support for the Linux perf profiler to report Python function names in traces.
-   The deprecated wstr and wstr\_length members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the unittest module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated smtpd and distutils modules have been removed (see [PEP 594](https://peps.python.org/pep-0594/) and [PEP 632](https://peps.python.org/pep-0632/)). The setuptools package (installed by default in virtualenvs and many other places) continues to provide the distutils module.
-   A number of other old, broken and deprecated functions, classes and methods have been removed.

-   Invalid backslash escape sequences in strings now warn with SyntaxWarning instead of DeprecationWarning, making them more visible. (They will become syntax errors in the future.)
-   The internal representation of integers has changed in preparation for performance enhancements. (This should not affect most users as it is an internal detail, but it may cause problems for Cython-generated code.)
-   (Hey, **fellow core developer**, if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes in Python 3.12, see [What's New In Python 3.12](https://docs.python.org/dev/whatsnew/3.12.html). The next pre-release of Python 3.12 will be 3.12.0a7, currently scheduled for 2023-04-03.

# More resources

-   [Online Documentation](https://docs.python.org/3.12/)
-   [PEP 693](https://www.python.org/dev/peps/pep-0693/), the 3.12 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

#  

# And now for something completely different

> Let me not to the marriage of true minds Admit impediments. Love is not love Which alters when it alteration finds, Or bends with the remover to remove: O, no! it is an ever-fixed mark, That looks on tempests and is never shaken; It is the star to every wandering bark, Whose worth’s unknown, although his height be taken. Love’s not Time’s fool, though rosy lips and cheeks Within his bending sickle’s compass come; Love alters not with his brief hours and weeks, But bears it out even to the edge of doom. If this be error, and upon me prov’d, I never writ, nor no man ever love’d.

*Sonnet 116*, by William Shakespeare.

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation. [https://www.python.org/psf/](https://www.python.org/psf/) Your release team, Thomas Wouters Ned Deily Steve Dower
