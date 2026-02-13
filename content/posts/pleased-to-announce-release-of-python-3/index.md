---
title: Python 3.12.0 beta 4 released
publishDate: '2023-07-11'
updatedDate: '2023-07-11'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.12 beta 4. https://www.python.org/downloads/release/python-3120b4/ This is a beta preview of Python 3.12 Pyth...'
tags: []
published: true
legacyUrl: /2023/07/pleased-to-announce-release-of-python-3.html
---

I'm pleased to announce the release of Python 3.12 beta 4.

[https://www.python.org/downloads/release/python-3120b4/](https://www.python.org/downloads/release/python-3120b4/)

# This is a beta preview of Python 3.12

Python 3.12 is still in development. This release, 3.12.0b4, is the final of four beta release previews of 3.12.  
Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release. We **strongly encourage** maintainers of third-party Python projects to **test with 3.12** during the beta phase and report issues found to \[the Python bug tracker (https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (Monday, 2023-07-31). Our goal is to have no ABI changes after this release, and as few code changes as possible after 3.12.0rc1, the first release candidate. To achieve that, it will be **extremely important** to get as much exposure for 3.12 as possible during the beta phase. Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

# Major new features of the 3.12 series, compared to 3.11

Some of the new major new features and changes in Python 3.12 are:

-   New type annotation syntax for generic classes ([PEP 695](https://peps.python.org/pep-0695/)).
-   More flexible f-string parsing, allowing many things previously disallowed ([PEP 701](https://peps.python.org/pep-0701/)).
-   Support for the buffer protocol in Python code ([PEP 688](https://peps.python.org/pep-0688/)).
-   Even more improved error messages. More exceptions potentially caused by typos now make suggestions to the user.
-   Many large and small performance improvements (like [PEP 709](https://peps.python.org/pep-0709/)).
-   Support for the Linux perf profiler to report Python function names in traces.
-   The deprecated wstr and wstr\_length members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the unittest module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated smtpd and distutils modules have been removed (see [PEP 594](https://peps.python.org/pep-0594/) and [PEP 632](https://peps.python.org/pep-0632/). The setuptools package continues to provide the distutils module.
-   A number of other old, broken and deprecated functions, classes and methods have been removed.
-   Invalid backslash escape sequences in strings now warn with SyntaxWarning instead of DeprecationWarning, making them more visible. (They will become syntax errors in the future.)
-   The internal representation of integers has changed in preparation for performance enhancements. (This should not affect most users as it is an internal detail, but it may cause problems for Cython-generated code.)
-   (Hey, fellow core developer, if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes to Python 3.12, see [What’s new in Python 3.12](https://docs.python.org/3.12/whatsnew/3.12.html). The next pre-release of Python 3.12 will be 3.12.0rc1, the **first release candidate**, currently scheduled for 2023-07-31.

  

# More resources

[Online Documentation](https://docs.python.org/3.12/). [PEP 693](https://www.python.org/dev/peps/pep-0693/), the Python 3.12 Release Schedule. Report bugs via [GitHub Issues](https://github.com/python/cpython/issues). [Help fund Python and its community](https://www.python.org/psf/donations/).

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to [the Python Software Foundation](https://www.python.org/psf-landing/). Your release team, Thomas Wouters Ned Deily Steve Dower Łukasz Langa
