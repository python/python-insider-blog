---
title: Python 3.16.0 alpha 2 is now available
publishDate: '2026-11-10'
author: Savannah Ostrowski
description: The second developer preview of Python 3.16 is ready for testing.
tags:
  - releases
published: true
---

**This is an early developer preview of Python 3.16**

[python.org/downloads/release/python-3160a2/](https://www.python.org/downloads/release/python-3160a2/)

## What’s new in Python 3.16?

Python 3.16.0a2 is ready to try! This is the second of seven planned alpha releases, with new features, bug fixes, and performance improvements to test.

Python 3.16 is still in development. Features can be added until beta 1 on May 4, 2027, and may be modified or removed until the first release candidate on July 27, 2027. The final release is planned for October 5, 2027. This preview is intended for testing and is not recommended for production use.

Here are a few highlights from Python 3.16 so far, compared with 3.15.

* [More expressive regular expressions](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-re-set-operations-and-unicode-properties). The `re` module now supports nested character sets, set operations such as intersection and difference, and matching characters by Unicode properties, such as uppercase letters.
* [Faster startup](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-interpreter-startup). Python starts faster, and several common operations have been optimized, including garbage collection and the construction of built-in objects.
* [Faster UUID generation](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-uuid-optimizations). `uuid4()` and `uuid7()` now have C implementations, making generation about 15-30x faster than the pure Python implementations in microbenchmarks.
* [Improved error messages](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-improved-error-messages)
* [Encrypted Client Hello](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-ssl-ech). The `ssl` module adds support for ECH when built with OpenSSL 4.0 or later.
* [Build support for more Apple platforms](https://docs.python.org/3.16/whatsnew/3.16.html#whatsnew316-apple-platforms). CPython can now be built for tvOS, watchOS, and visionOS. These platforms are not yet part of the supported platform tiers in PEP 11.

See [What’s new in Python 3.16](https://docs.python.org/3.16/whatsnew/3.16.html) for more changes.

(Hey, **fellow core team member,** if there’s a feature you’d like highlighted in a future announcement, [let Savannah know](mailto:savannah@python.org).)

Please try this alpha with your libraries and applications and report Python bugs on the [CPython issue tracker](https://github.com/python/cpython/issues).

The next alpha, Python 3.16.0a3, is scheduled for December 15, 2026. The full schedule is in [PEP 826](https://peps.python.org/pep-0826/).

## More resources

* [Python 3.16 documentation](https://docs.python.org/3.16/)  
* [Changelog](https://docs.python.org/3.16/whatsnew/changelog.html)  
* [Support Python through the Python Software Foundation](https://www.python.org/psf/donations/)

## And now for something completely different

Next up in the Python 3.16 Film Festival is [*The Martian* (2015)](https://en.wikipedia.org/wiki/The_Martian_\(film\)). Stranded on Mars, Mark Watney has to keep himself alive with what he has on hand. The plan to bring him home takes shape much like CPython does, with people around the world bringing different skills to a shared effort.

> So we do this together or not at all.
>
> — Commander Melissa Lewis, *The Martian* (2015)

## Enjoy the new release

Thanks to everyone who contributed to this alpha and to everyone giving it a try. Please consider volunteering your time or asking your organisation to support the [Python Software Foundation](https://www.python.org/psf-landing/).

Happy testing!

Regards from Washington state,

Your release team,  
Savannah Ostrowski  
Ned Deily  
Steve Dower  
Julien Palard
