---
title: 'Python 3.3 to Drop Support for OS/2, Windows 2000, and VMS'
publishDate: '2011-05-04'
updatedDate: '2011-05-04'
author: Brian Curtin
description: 'Every so often there comes a time to prune the list of supported operating systems to match the usage landscape. On top of that, the pool of contributing dev...'
tags: []
published: true
legacyUrl: /2011/05/python-33-to-drop-support-for-os2.html
---

Every so often there comes a time to prune the list of supported operating systems to match the usage landscape. On top of that, the pool of contributing developers on a platform also holds significance, as there needs to be someone around to complete development tasks in order to have a quality release. Other factors, such as the age of an operating system and its hindrance on future development work, also weigh on the list.

[Victor Stinner](http://www.haypocalc.com/wiki/Victor_Stinner) recently proposed [dropping OS/2 and VMS support](http://mail.python.org/pipermail/python-dev/2011-April/110872.html) for CPython, a year after his [original question](http://mail.python.org/pipermail/python-dev/2010-April/099471.html) on OS/2 support. Victor's original inquiry came around the time of his seemingly non-stop Unicode efforts, specifically for an issue with [os.execvpe()](http://docs.python.org/library/os#os.execvpe) supporting environment variables via the [PEP 383](http://www.python.org/dev/peps/pep-0383/) surrogateescape handler. OS/2 and VMS currently have no representation on the development team and receive no testing during the release process.

The process of writing this post [got me thinking](http://mail.python.org/pipermail/python-dev/2011-May/111159.html) about a [previous discussion](http://mail.python.org/pipermail/python-dev/2010-March/098074.html) about removing Windows 2000, which seemed to fall to the wayside. Systems setting COMSPEC to command.com were also supposed to be on the chopping block back then. [As of now](http://hg.python.org/peps/rev/b9390aa12855), both have joined OS/2 and VMS. Windows 2000 is up for removal in order to make development work easier, removing the need to account for legacy APIs on an operating system which hit end-of-life in 2010.

In order to begin removing support for those systems, Victor and I started by updating [PEP 11](http://www.python.org/dev/peps/pep-0011/).

#### PEP 11

This PEP outlines the operating systems that are no longer supported and explains the process of adding a system to that list.

Once it is decided that an operating system can start the process of removal, it is formally announced as unsupported. This announcement traditionally goes for the in-development version, so dropping support of OS/2, Windows 2000, and VMS begins with Python 3.3.

The first stage is fairly hands off, more of a raising of the white flag. It's a signal that there's no one around to maintain the code and ensure a quality release. Changes to compilation and installation may be made to alert users on those platforms that the platform is unsupported. A note will go into the "[What's New](http://docs.python.org/dev/whatsnew/3.3.html#unsupported-operating-systems)" document listing the newly unsupported platforms.

After a release cycle of being unsupported, the version afterwards becomes fair game for removal of code. In this case, code can be removed in 3.4. There probably won't be a wholesale removal of that code, but developers that come across it in their normal work may remove any #ifdef blocks, configure sections, or out-of-date code.

#### What You Can Do

If you are a user of OS/2 or VMS, there are a few things you can do to save your platform.

##### Become a Maintainer

Nothing says support better than an active developer. Andrew MacIntyre has been the OS/2 maintainer for some time now, and he stated during Victor's first OS/2 query that OS/2 is behind on Unicode support, so that's certainly an area that needs focus. VMS appears to have some amount of external support via [http://www.vmspython.org](http://www.vmspython.org), but as discussed in [issue 11918](http://bugs.python.org/issue11918), someone needs to step up to allow the continued VMS support upstream.

If you are interested in taking over for either platform, see the [developer's guide](http://docs.python.org/devguide) for the current development processes.

##### Contribute a build slave

With an active developer, a platform stands a better chance of survival. With a build slave, a platform stands an even better chance, not only at survival but also at quality.

Python uses [Buildbot](http://trac.buildbot.net/) for continuous integration, and build slaves are [currently provided](http://www.python.org/dev/buildbot/) for Linux, Mac, Windows, and Open Indiana (Solaris), for various versions, architectures, and configurations. Being able to donate a machine to the build fleet for OS/2 or VMS would allow those platforms to receive the same attention that more mainstream platforms receive.

If you can donate either time or hardware to help keep OS/2 and VMS alive, contact the [python-dev](http://mail.python.org/mailman/listinfo/python-dev) mailing list to coordinate your efforts.
