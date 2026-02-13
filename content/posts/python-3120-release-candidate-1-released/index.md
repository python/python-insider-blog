---
title: Python 3.12.0 release candidate 1 released
publishDate: '2023-08-06'
updatedDate: '2023-08-06'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.12 release candidate 1. https://www.python.org/downloads/release/python-3120rc1/    This is the first release...'
tags: []
published: true
legacyUrl: /2023/08/python-3120-release-candidate-1-released.html
---

I'm pleased to announce the release of Python 3.12 release candidate 1.

[https://www.python.org/downloads/release/python-3120rc1/](https://www.python.org/downloads/release/python-3120rc1/)

  

# This is the first release candidate of Python 3.12.0

This release, **3.12.0rc1**, is the penultimate release preview. Entering the release candidate phase, only reviewed code changes which are clear bug fixes are allowed between this release candidate and the final release. The second candidate (and the last planned release preview) is scheduled for Monday, 2023-09-04, while the official release of 3.12.0 is scheduled for Monday, 2023-10-02.

There will be **no ABI changes** from this point forward in the 3.12 series, and the goal is that there will be as few code changes as possible.

## [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#call-to-action-2)Call to action

We strongly encourage maintainers of third-party Python projects to prepare their projects for 3.12 compatibilities during this phase, and where necessary publish Python 3.12 wheels on PyPI to be ready for the final release of 3.12.0. Any binary wheels built against Python 3.12.0rc1 will work with future versions of Python 3.12. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it’s as close to the final release as we can get it, its use is **not** recommended for production environments.

### [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#core-developers-time-to-work-on-documentation-now-3)Core developers: time to work on documentation now

-   Are all your changes properly documented?
-   Are they mentioned in [What’s New](https://docs.python.org/3.12/whatsnew/3.12.html)?
-   Did you notice other changes you know of to have insufficient documentation?

# [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#major-new-features-of-the-312-series-compared-to-311-4)Major new features of the 3.12 series, compared to 3.11

## [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#new-features-5)New features

-   [More flexible f-string parsing](https://docs.python.org/3.12/whatsnew/3.12.html#pep-701-syntactic-formalization-of-f-strings), allowing many things previously disallowed ([PEP 701](https://peps.python.org/pep-0701/)).
-   [Support for the buffer protocol](https://docs.python.org/3.12/whatsnew/3.12.html#pep-688-making-the-buffer-protocol-accessible-in-python) in Python code ([PEP 688](https://peps.python.org/pep-0688/)).
-   A new debugging/profiling API ([PEP 669](https://peps.python.org/pep-0669/)).
-   [Support for isolated subinterpreters](https://docs.python.org/3.12/whatsnew/3.12.html#pep-684-a-per-interpreter-gil) with separate Global Interpreter Locks ([PEP 684](https://peps.python.org/pep-0684)).
-   [Even more improved error messages](https://docs.python.org/3.12/whatsnew/3.12.html#improved-error-messages). More exceptions potentially caused by typos now make suggestions to the user.
-   [Support for the Linux `perf` profiler](https://docs.python.org/3.12/howto/perf_profiling.html) to report Python function names in traces.
-   [Many large and small performance improvements](https://docs.python.org/3.12/whatsnew/3.12.html#optimizations) (like [PEP 709](https://peps.python.org/pep-0709/)), delivering an estimated 5% overall performance improvementcitation needed.

## [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#type-annotations-6)Type annotations

-   [New type annotation syntax](https://docs.python.org/3.12/whatsnew/3.12.html#pep-695-type-parameter-syntax) for generic classes ([PEP 695](https://peps.python.org/pep-0695/)).
-   [New override decorator](https://docs.python.org/3.12/whatsnew/3.12.html#pep-698-override-decorator-for-static-typing) for methods ([PEP 698](https://peps.python.org/pep-0698)).

## [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#deprecations-7)Deprecations

-   The deprecated `wstr` and `wstr_length` members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the `unittest` module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated `smtpd` and `distutils` modules have been removed (see [PEP 594](https://peps.python.org/pep-0594/) and [PEP 632](https://peps.python.org/pep-0632/). The `setuptools` package continues to provide the `distutils` module.
-   [A number of other old, broken and deprecated functions, classes and methods](https://docs.python.org/3.12/whatsnew/3.12.html#removed) have been removed.
-   Invalid backslash escape sequences in strings now warn with `SyntaxWarning` instead of `DeprecationWarning`, making them more visible. (They will become syntax errors in the future.)
-   The internal representation of integers has changed in preparation for performance enhancements. (This should not affect most users as it is an internal detail, but it may cause problems for Cython-generated code.)

(Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes to Python 3.12, see [What’s new in Python 3.12](https://docs.python.org/dev/whatsnew/3.12.html). The next pre-release of Python 3.12 will be 3.12.0rc2, the **final release candidate**, currently scheduled for 2023-09-04.

# [](https://discuss.python.org/t/python-3-12-0-release-candidate-1-released/31137#more-resources-8)More resources

-   [Online Documentation](https://docs.python.org/3.12/).
-   [PEP 693](https://www.python.org/dev/peps/pep-0693/), the Python 3.12 Release Schedule.
-   Report bugs via [GitHub Issues](https://github.com/python/cpython/issues).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

# Enjoy the new release

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to [the Python Software Foundation](https://www.python.org/psf-landing/). Your release team, Thomas Wouters Ned Deily Steve Dower Łukasz Langa
