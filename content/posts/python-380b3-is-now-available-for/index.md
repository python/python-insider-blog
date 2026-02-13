---
title: Python 3.8.0b3 is now available for testing
publishDate: '2019-08-07'
updatedDate: '2019-08-07'
author: Łukasz Langa
description: 'It''s time for a new Python preview:   https://www.python.org/downloads/release/python-380b3/ This release is the third of four planned beta release previews....'
tags: []
published: true
legacyUrl: /2019/08/python-380b3-is-now-available-for.html
---

It's time for a new Python preview:  
[https://www.python.org/downloads/release/python-380b3/](https://www.python.org/downloads/release/python-380b3/) This release is the third of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release. The next pre-release of Python 3.8 will be 3.8.0b4, the last beta release, currently scheduled for 2019-08-26.  

### Call to action

We **strongly encourage** maintainers of third-party Python projects to **test with 3.8** during the beta phase and report issues found to [the Python bug tracker](https://bugs.python.org/) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (2019-09-30). Our goal is have no ABI changes after beta 3 and no code changes after 3.8.0rc1, the release candidate. To achieve that, it will be extremely important to get as much exposure for 3.8 as possible during the beta phase. Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

### Last beta coming

Beta 4 can only be released if all “Release blocker” and “Deferred blocker” issues on [bugs.python.org](http://bugs.python.org/) for 3.8.0 are resolved. The core team will prioritize fixing those for the next four weeks.  

### Acknowledgements

Thanks to our binary builders, Ned and Steve, who were very quick today to get the macOS and Windows installers ready. The Windows story in particular got pretty magical, it’s now really fully automatic end-to-end. Thanks to Victor for vastly improving the reliability of multiprocessing tests since Beta 2. Thanks to Pablo for keeping the buildbots green.
