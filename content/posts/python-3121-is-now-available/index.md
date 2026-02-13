---
title: Python 3.12.1 is now available
publishDate: '2023-12-08'
updatedDate: '2023-12-08'
author: Thomas Wouters
description: 'Python 3.12.1 is now available. https://www.python.org/downloads/release/python-3121/    This is the first maintenance release of Python 3.12 Python 3.12 is ...'
tags: []
published: true
legacyUrl: /2023/12/python-3121-is-now-available.html
---

Python 3.12.1 is now available.

[https://www.python.org/downloads/release/python-3121/](https://www.python.org/downloads/release/python-3121/)

  

# This is the first maintenance release of Python 3.12

Python 3.12 is the newest major release of the Python programming language, and it contains many new features and optimizations. 3.12.1 is the latest maintenance release, containing more than 400 bugfixes, build improvements and documentation changes since 3.12.0.  

# [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#major-new-features-of-the-312-series-compared-to-311-2)

# Major new features of the 3.12 series, compared to 3.11

## [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#new-features-3)

## New features

-   [More flexible f-string parsing](https://docs.python.org/3.12/whatsnew/3.12.html#pep-701-syntactic-formalization-of-f-strings) , allowing many things previously disallowed ([PEP 701](https://peps.python.org/pep-0701/)).
-   [Support for the buffer protocol](https://docs.python.org/3.12/whatsnew/3.12.html#pep-688-making-the-buffer-protocol-accessible-in-python) in Python code ([PEP 688](https://peps.python.org/pep-0688/)).
-   [A new debugging/profiling API](https://docs.python.org/3.12/whatsnew/3.12.html#pep-669-low-impact-monitoring-for-cpython) ([PEP 669](https://peps.python.org/pep-0669/)).
-   [Support for isolated subinterpreters](https://docs.python.org/3.12/whatsnew/3.12.html#pep-684-a-per-interpreter-gil) with separate Global Interpreter Locks ([PEP 684](https://peps.python.org/pep-0684)).
-   [Even more improved error messages](https://docs.python.org/3.12/whatsnew/3.12.html#improved-error-messages). More exceptions potentially caused by typos now make suggestions to the user.
-   [Support for the Linux `perf` profiler](https://docs.python.org/3.12/howto/perf_profiling.html) to report Python function names in traces.
-   [Many large and small performance improvements](https://docs.python.org/3.12/whatsnew/3.12.html#optimizations) (like [PEP 709](https://peps.python.org/pep-0709/) and support for the BOLT binary optimizer), delivering an estimated 5% overall performance improvement.

## [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#type-annotations-4)

## Type annotations

-   [New type annotation syntax](https://docs.python.org/3.12/whatsnew/3.12.html#pep-695-type-parameter-syntax) for generic classes ([PEP 695](https://peps.python.org/pep-0695/)).
-   [New override decorator](https://docs.python.org/3.12/whatsnew/3.12.html#pep-698-override-decorator-for-static-typing) for methods ([PEP 698](https://peps.python.org/pep-0698)).

## [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#deprecations-5)

## Deprecations

-   The deprecated `wstr` and `wstr_length` members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the `unittest` module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated `smtpd` and `distutils` modules have been removed (see [PEP 594](https://peps.python.org/pep-0594/) and [PEP 632](https://peps.python.org/pep-0632/). The `setuptools` package continues to provide the `distutils` module.
-   [A number of other old, broken and deprecated functions, classes and methods](https://docs.python.org/3.12/whatsnew/3.12.html#removed) have been removed.
-   Invalid backslash escape sequences in strings now warn with `SyntaxWarning` instead of `DeprecationWarning`, making them more visible. (They will become syntax errors in the future.)
-   The internal representation of integers has changed in preparation for performance enhancements. (This should not affect most users as it is an internal detail, but it may cause problems for Cython-generated code.)

For more details on the changes to Python 3.12, see [What’s new in Python 3.12](https://docs.python.org/dev/whatsnew/3.12.html).

# [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#more-resources-6)

# More resources

-   [Online Documentation](https://docs.python.org/3.12/).
-   [PEP 693](https://www.python.org/dev/peps/pep-0693/), the Python 3.12 Release Schedule.
-   Report bugs via [GitHub Issues](https://github.com/python/cpython/issues).
-   [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) or [via GitHub Sponsors](https://github.com/sponsors/python), and support [the Python community](https://www.python.org/psf/donations/).

  

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
