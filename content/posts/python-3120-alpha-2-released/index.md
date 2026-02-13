---
title: Python 3.12.0 alpha 2 released
publishDate: '2022-11-15'
updatedDate: '2022-11-15'
author: Thomas Wouters
description: 'I''m pleased to announce the release of Python 3.12 alpha 2. https://www.python.org/downloads/release/python-3120a2/ This is an early developer preview of Pyt...'
tags: []
published: true
legacyUrl: /2022/11/python-3120-alpha-2-released.html
---

I'm pleased to announce the release of Python 3.12 alpha 2.

[https://www.python.org/downloads/release/python-3120a2/](https://www.python.org/downloads/release/python-3120a2/)

**This is an early developer preview of Python 3.12.**

# Major new features of the 3.12 series, compared to 3.11

Python 3.12 is still in development. This release, 3.12.0a2 is the second of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2023-05-08) and, if necessary, may be modified or deleted up until the release candidate phase (2023-07-31). Please keep in mind that this is a preview release and its use is **not** recommended for production environments. Many new features for Python 3.12 are still being planned and written. Among the new major new features and changes so far:

-   Even more improved error messages. More exceptions potentially caused by typos now make suggestions to the user.
-   Support for the Linux perf profiler to report Python function names in traces.
-   The deprecated wstr and wstr\_length members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the unittest module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated smtpd and distutils modules have been removed (see [PEP 594](https://peps.python.org/pep-0594/) and [PEP 632](https://peps.python.org/pep-0632/)). The setuptools package (installed by default in virtualenvs and many other places) continues to provide the distutils module.
-   A number of other old, broken and deprecated functions, classes and methods have been removed.
-   (Hey, **fellow core developer**, if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

For more details on the changes in Python 3.12, see [What's New In Python 3.12](https://docs.python.org/dev/whatsnew/3.12.html). The next pre-release of Python 3.12 will be 3.12.0a3, currently scheduled for 2022-12-05.

# More resources

-   [Online Documentation](https://docs.python.org/3.12/)
-   [PEP 693](https://www.python.org/dev/peps/pep-0693/), the 3.12 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues).
-   [Help fund Python and its community](https://www.python.org/psf/donations/).

#   

# And now for something completely different

> Life, believe, is not a dream So dark as sages say; Oft a little morning rain Foretells a pleasant day. Sometimes there are clouds of gloom, But these are transient all; If the shower will make the roses bloom, O why lament its fall? Rapidly, merrily, Life's sunny hours flit by, Gratefully, cheerily, Enjoy them as they fly! What though Death at times steps in And calls our Best away? What though sorrow seems to win, O'er hope, a heavy sway? Yet hope again elastic springs, Unconquered, though she fell; Still buoyant are her golden wings, Still strong to bear us well. Manfully, fearlessly, The day of trial bear, For gloriously, victoriously, Can courage quell despair!

*Life*, by Charlotte Brontë, from *Poems by Currer, Ellis, and Acton Bell*. Charlotte wrote about the publishing under pseudonyms by her and her sisters, Emily and Anne, in a preface to Emily's *Wuthering Heights*:

> Averse to personal publicity, we veiled our own names under those of Currer, Ellis and Acton Bell; the ambiguous choice being dictated by a sort of conscientious scruple at assuming Christian names positively masculine, while we did not like to declare ourselves women, because – without at that time suspecting that our mode of writing and thinking was not what is called "feminine" – we had a vague impression that authoresses are liable to be looked on with prejudice; we had noticed how critics sometimes use for their chastisement the weapon of personality, and for their reward, a flattery, which is not true praise.

#   

# Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation. [https://www.python.org/psf/](https://www.python.org/psf/) Your release team, Thomas Wouters Ned Deily Steve Dower
