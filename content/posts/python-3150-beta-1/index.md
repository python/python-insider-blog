---
title: Python 3.15.0 beta 1 is here!
publishDate: '2026-05-07'
author: Hugo van Kemenade
description: 'The propreantepenultimate 3.15 beta is out!'
tags:
  - releases
published: true
---

It's the first beta and feature freeze!

https://www.python.org/downloads/release/python-3150b1/

**This is a beta preview of Python 3.15**

Python 3.15 is still in development. This release, 3.15.0b1, is the first of four planned beta releases.

Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release.

We ***strongly encourage*** maintainers of third-party Python projects to ***test with 3.15*** during the beta phase and report issues found to [the Python bug tracker](https://github.com/python/cpython/issues) as soon as possible. While the release is planned to be feature-complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (2026-08-04). Our goal is to have ***no ABI changes*** after beta 4 and as few code changes as possible after the first release candidate. To achieve that, it will be ***extremely important*** to get as much exposure for 3.15 as possible during the beta phase.

This includes creating pre-release wheels for 3.15, as it helps other projects to do their own testing. However, we recommend that your regular production releases wait until 3.15.0rc1, to avoid the risk of ABI breaks.

Please keep in mind that this is a preview release and its use is ***not*** recommended for production environments.

## Major new features of the 3.15 series, compared to 3.14

Some of the major new features and changes in Python 3.15 are:

* [PEP 810](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-lazy-imports): Explicit lazy imports for faster startup times
* [PEP 814](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-frozendict): Add `frozendict` built-in type
* [PEP 661](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sentinel): Add `sentinel` built-in type
* [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-profiling-package): A dedicated profiling package for organizing Python profiling tools
* [PEP 799](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-sampling-profiler): Tachyon: High frequency statistical sampling profiler
* [PEP 831](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-frame-pointers): Frame pointers are enabled by default for improved system-level observability
* [PEP 798](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-unpacking-in-comprehensions): Unpacking in comprehensions
* [PEP 686](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-utf8-default): Python now uses UTF-8 as the default encoding
* [PEP 829](https://peps.python.org/pep-0829/): Package startup configuration files
* [PEP 728](https://peps.python.org/pep-0728/): `TypedDict` with typed extra items
* [PEP 747](https://docs.python.org/3.15/whatsnew/3.15.html#typing): Annotating type forms with `TypeForm`
* [PEP 800](https://peps.python.org/pep-0800/): Disjoint bases in the type system
* [PEP 782](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-pybyteswriter): A new `PyBytesWriter` C API to create a Python bytes object
* [PEP 803, 820, 793](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-abi3t): Stable ABI for free-threaded builds and related C API
* The [JIT compiler](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-jit) has been significantly upgraded, with 8-9% geometric mean performance improvement on x86-64 Linux over the standard interpreter, and 12-13% speedup on AArch64 macOS over the tail-calling interpreter
* The official Windows 64-bit binaries now [use the tail-calling interpreter](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-windows-tail-calling-interpreter)
* [Improved error messages](https://docs.python.org/3.15/whatsnew/3.15.html#improved-error-messages)
* [More color](https://docs.python.org/3.15/whatsnew/3.15.html#whatsnew315-more-color)
* <small>(Hey, **fellow core team member,** if a feature you find important is missing from this list, let Hugo know.)</small>

For more details on the changes to Python 3.15, see [What’s new in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html). The next pre-release of Python 3.15 will be 3.15.0b2, scheduled for 2026-06-02.

## Incompatible changes, removals and new deprecations

- [Incompatible changes](https://docs.python.org/3.15/whatsnew/3.15.html#incompatible-changes)
- Python [removals](https://docs.python.org/3.15/whatsnew/3.15.html#removed) and [deprecations](https://docs.python.org/3.15/whatsnew/3.15.html#deprecated)
- C API [removals](https://docs.python.org/3.15/whatsnew/3.15.html#c-api-removed) and [deprecations](https://docs.python.org/3.15/whatsnew/3.15.html#c-api-deprecated)
- Overview of all [pending deprecations](https://docs.python.org/3.15/deprecations/index.html)

## More resources

* [Online documentation](https://docs.python.org/3.15/)
* [PEP 790](https://peps.python.org/pep-0790/), 3.15 release schedule
* Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues)
* [Help fund Python directly](https://www.python.org/psf/donations/python-dev/) (or via [GitHub Sponsors](https://github.com/sponsors/python)) and support [the Python community](https://www.python.org/psf/donations/)

## And now for something completely different

> “And now which is which?” she said to herself, and nibbled a little of
the right-hand bit to try the effect: the next moment she felt a
violent blow underneath her chin: it had struck her foot!
>
> She was a good deal frightened by this very sudden change, but she felt
that there was no time to be lost, as she was shrinking rapidly; so she
set to work at once to eat some of the other bit. Her chin was pressed
so closely against her foot, that there was hardly room to open her
mouth; but she did it at last, and managed to swallow a morsel of the
lefthand bit.

## Enjoy the new release

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf/donations/).

Regards from sunny Helsinki,

Your release team,\
Hugo van Kemenade\
Ned Deily\
Steve Dower\
Łukasz Langa
