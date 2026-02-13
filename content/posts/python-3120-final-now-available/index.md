---
title: Python 3.12.0 (final) now available
publishDate: '2023-10-02'
updatedDate: '2023-10-02'
author: Thomas Wouters
description: 'Finally, it’s final! The final release of Python 3.12.0 (final) is here! https://www.python.org/downloads/release/python-3120/ This is the stable release of ...'
tags: []
published: true
legacyUrl: /2023/10/python-3120-final-now-available.html
---

Finally, it’s final! The final release of Python 3.12.0 (final) is here!

[https://www.python.org/downloads/release/python-3120/](https://www.python.org/downloads/release/python-3120/)

# This is the stable release of Python 3.12.0

Python 3.12.0 is the newest major release of the Python programming language, and it contains many new features and optimizations.

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
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

# [](https://discuss.python.org/t/python-3-12-0-final-is-here/35186#and-now-for-something-completely-different-7)

# And now for something completely different

```
They have no need of our help
So do not tell me
These haggard faces could belong to you or me
Should life have dealt a different hand
We need to see them for who they really are
Chancers and scroungers
Layabouts and loungers
With bombs up their sleeves
Cut-throats and thieves
They are not
Welcome here
We should make them
Go back to where they came from
They cannot
Share our food
Share our homes
Share our countries
Instead let us
Build a wall to keep them out
It is not okay to say
These are people just like us
A place should only belong to those who are born there
Do not be so stupid to think that
The world can be looked at another way

(now read from bottom to top)

```

[Refugees](https://brianbilston.com/2016/03/23/refugees/), by [Brian Bilston](https://mastodon.online/@brianbilston).

# We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to [the Python Software Foundation](https://www.python.org/psf-landing/).

Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower  
Łukasz Langa
