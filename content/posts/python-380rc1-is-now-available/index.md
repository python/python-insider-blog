---
title: Python 3.8.0rc1 is now available
publishDate: '2019-10-01'
updatedDate: '2019-10-01'
author: Łukasz Langa
description: 'Python 3.8.0 is almost ready. After a rather tumultuous few days, we are very happy to announce the availability of the release candidate:   https://www.pyth...'
tags: []
published: true
legacyUrl: /2019/10/python-380rc1-is-now-available.html
---

Python 3.8.0 is **almost** ready. After a rather tumultuous few days, we are very happy to announce the availability of the release candidate:  
[https://www.python.org/downloads/release/python-380rc1/](https://www.python.org/downloads/release/python-380rc1/) This release, **3.8.0rc1**, is the final planned release preview. Assuming no critical problems are found prior to **2019-10-14**, the scheduled release date for 3.8.0, no code changes are planned between this release candidate and the final release. Please keep in mind that this is not the gold release yet and as such its use is **not** recommended for production environments.

## Major new features of the 3.8 series, compared to 3.7

Some of the new major new features and changes in Python 3.8 are:  

-   [PEP 572](https://www.python.org/dev/peps/pep-0572/), Assignment expressions
-   [PEP 570](https://www.python.org/dev/peps/pep-0570/), Positional-only arguments
-   [PEP 587](https://www.python.org/dev/peps/pep-0587/), Python Initialization Configuration (improved embedding)
-   [PEP 590](https://www.python.org/dev/peps/pep-0590/), Vectorcall: a fast calling protocol for CPython
-   [PEP 578](https://www.python.org/dev/peps/pep-0578), Runtime audit hooks
-   [PEP 574](https://www.python.org/dev/peps/pep-0574), Pickle protocol 5 with out-of-band data
-   Typing-related: [PEP 591](https://www.python.org/dev/peps/pep-0591) (Final qualifier), [PEP 586](https://www.python.org/dev/peps/pep-0586) (Literal types), and [PEP 589](https://www.python.org/dev/peps/pep-0589) (TypedDict)
-   Parallel filesystem cache for compiled bytecode
-   Debug builds share ABI as release builds
-   f-strings support a handy `=` specifier for debugging
-   `continue` is now legal in `finally:` blocks
-   on Windows, the default `asyncio` event loop is now `ProactorEventLoop`
-   on macOS, the *spawn* start method is now used by default in `multiprocessing`
-   `multiprocessing` can now use shared memory segments to avoid pickling costs between processes
-   `typed_ast` is merged back to CPython
-   `LOAD_GLOBAL` is now 40% faster
-   `pickle` now uses Protocol 4 by default, improving performance
-   (Hey, **fellow core developer,** if a feature you find important is missing from this list, [let Łukasz know](mailto:lukasz@python.org).)
