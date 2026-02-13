---
title: Python 3.8.0b1 is now available for testing
publishDate: '2019-06-04'
updatedDate: '2019-06-04'
author: Łukasz Langa
description: 'The time has come for Python 3.8.0b1! Download it from:   https://www.python.org/downloads/release/python-380b1/ This release is the first of four planned be...'
tags: []
published: true
legacyUrl: /2019/06/python-380b1-is-now-available-for.html
---

The time has come for Python 3.8.0b1! Download it from:  
[https://www.python.org/downloads/release/python-380b1/](https://www.python.org/downloads/release/python-380b1/) This release is the first of four planned beta release previews. Beta release previews are intended to give the wider community the opportunity to test new features and bug fixes and to prepare their projects to support the new feature release. The next pre-release of Python 3.8 will be 3.8.0b2, currently scheduled for 2019-07-01.

### Call to action

We **strongly encourage** maintainers of third-party Python projects to **test with 3.8** during the beta phase and report issues found to [the Python bug tracker](https://bugs.python.org/) as soon as possible. While the release is planned to be feature complete entering the beta phase, it is possible that features may be modified or, in rare cases, deleted up until the start of the release candidate phase (2019-09-30). Our goal is have no ABI changes after beta 3 and no code changes after 3.8.0rc1, the release candidate. To achieve that, it will be extremely important to get as much exposure for 3.8 as possible during the beta phase. Please keep in mind that this is a preview release and its use is **not** recommended for production environments.

### A new challenger has appeared!

With the release of Python 3.8.0b1, development started on Python 3.9. The “master” branch in the cpython repository now tracks development of 3.9 while Python 3.8 received its own branch, called simply “3.8”.

### Acknowledgments

As you might expect, creating new branches triggers a lot of changes in configuration for all sorts of tooling that we’re using. Additionally, the inevitable deadline for new features caused a flurry of activity that tested the buildbots to the max. The revert hammer got used more than once. The Release Manager would not be able to make this release available alone. Many thanks to the fearless duo of Pablo Galindo Salgado and Victor Stinner for spending tens of hours during the past week working on getting the buildbots green for release. Seriously, that took a lot of effort. We are all so lucky to have you both. Thanks to Andrew Svetlov for his swift fixes to asyncio and to Yury Selivanov for code reviews, even when jetlagged. Thanks to Julien Palard for untangling the documentation configs. Thank you to Zachary Ware for help with buildbot and CI configuration. Thanks to Mariatta for helping with the bots. Thank you to Steve Dower for delivering the Windows installers. Most importantly though, huge thanks to Ned Deily who not only helped me understand the scope of this special release but also did some of the grunt work involved. Last but not least, thanks to you for making this release more meaty than I expected. There’s plenty of super exciting changes in there. Just take a look at “[What’s New](https://docs.python.org/3.8/whatsnew/3.8.html)”!

### One more thing

Hey, fellow Core Developer, Beta 2 is in four weeks. If your important new feature got reverted last minute, or you decided not to merge due to inadequate time, I have a one time offer for you (restrictions apply). If you:  

-   find a second core developer champion for your change; **and**
-   in tandem you finish your change complete with tests and documentation before Beta 2

then I will let it in. I’m asking for a champion because it’s too late now for changes with hasty design or code review. And as I said, restrictions apply. For instance, at this point changes to existing APIs are unlikely to be accepted. Don’t start new work with 3.8 in mind. 3.9 is going to come sooner than you think!
