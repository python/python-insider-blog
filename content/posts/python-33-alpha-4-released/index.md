---
title: Python 3.3 Alpha 4 Released
publishDate: '2012-06-01'
updatedDate: '2012-06-01'
author: Brian Curtin
description: 'Yesterday, May 31, brought the fourth alpha release in the Python 3.3 development schedule. It''s an exciting release as it introduces a number of long awaite...'
tags:
  - '3'
  - releases
published: true
legacyUrl: /2012/06/python-33-alpha-4-released.html
---

Yesterday, May 31, brought the [fourth alpha release](http://www.python.org/download/releases/3.3.0/) in the Python 3.3 development schedule. It's an exciting release as it introduces a number of long awaited features that we really hope the community will enjoy.

#### New Features

##### PEP 405 - Virtual Environments

Just in time for Alpha 4 comes the addition of [PEP 405](http://www.python.org/dev/peps/pep-0405/)'s support for virtual environments by way of the venv module and pyenv script.

> python -m venv /home/yourname/dev/myproject

You may know this functionality through [virtualenv](http://www.virtualenv.org/en/latest/index.html), originally created by Ian Bicking. Thanks to Carl Meyer, Vinay Sajip, and anyone else for working on the PEP and implementation, we now have this widely used functionality available in a Python release!

##### PEP 420 - Namespace Packages

After a long road featuring two preceding PEPS ([382](http://www.python.org/dev/peps/pep-0382/) and [402](http://www.python.org/dev/peps/pep-0402/)), several sprints (including one [sponsored by the PSF](http://pythonsprints.com/2011/06/16/pep-382-sprint-maryland/)), and much discussion on python-dev, import-sig, and at PyCon language summits over the last two years, namespace packages are here. At [the summit](http://blog.python.org/2012/03/2012-language-summit-report.html), Eric Smith stepped up to write a new PEP after the group decided to reject PEPs 382 and 402.

The result is [PEP 420](http://www.python.org/dev/peps/pep-0420/). The most obvious feature of a namespace package is the lack of a \_\_init\_\_.py file. However, there's a lot more to it, so check out the PEP!

##### PEP 3144 - The ipaddress Module

After discussion starting during the Python 3.2 development cycle, the ipaddress module has a new home in the standard library for 3.3. [PEP 3144](http://www.python.org/dev/peps/pep-3144/), authored by Peter Moody and taken up by core contributor Nick Coghlan, introduces a collection of classes for working with addresses, networks, and interfaces for both IPv4 and IPv6.

##### Windows Build Upgraded to Visual Studio 2010

As was [recently covered](http://blog.python.org/2012/05/recent-windows-changes-in-python-33.html), the Alpha 4 Windows installers now feature binaries produced by Visual Studio 2010, up from the 2008 version. We needed to upgrade to keep up with what most organizations and many of our contributors were using, along with the fact that *not changing* would mean we'd be at least two versions behind at our next opportunity to do so. With Python 3.4 not coming out until some time in 2014, we didn't want to end up eight years behind the curve and have to make that big of a version jump.

#### Bug Fixes

As with all of our releases, many contributors submitted patches to fix over 80 issues since last month's Alpha 3. We have fixes across a number of modules, including batches of fixes to [IDLE](http://docs.python.org/dev/library/idle.html), [email](http://docs.python.org/dev/library/email.html), and [urllib](http://docs.python.org/dev/library/urllib.request.html).

#### We Need Your Help!

As with all of our releases, backwards compatibility is important to us, so we'd love to hear if any of your projects have issues. Please help us make the best release possible by [trying it out](http://www.python.org/download/releases/3.3.0/)!

Python 3.3 is quickly shaping up to be the release everyone's waiting for, so run your tests and report your issues to [http://bugs.python.org](http://bugs.python.org).

* * *

[Download it now](http://www.python.org/download/releases/3.3.0/)!
