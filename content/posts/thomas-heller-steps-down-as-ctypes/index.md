---
title: Thomas Heller Steps Down as ctypes Maintainer
publishDate: '2011-04-01'
updatedDate: '2011-04-02'
author: Brian Curtin
description: 'The Python development community owes a big thanks to long-time ctypes maintainer Thomas Heller. Earlier this month, Thomas announced his departure from the ...'
tags: []
published: true
legacyUrl: /2011/04/thomas-heller-steps-down-as-ctypes.html
---

The Python development community owes a big thanks to long-time [ctypes](http://docs.python.org/library/ctypes) maintainer Thomas Heller. Earlier this month, Thomas [announced his departure](http://mail.python.org/pipermail/python-dev/2011-March/109395.html) from the CPython project, the home of his ctypes library since Python 2.5.

I had a chance to talk with Thomas and he filled me in on his history with Python and his ctypes and py2exe projects.

#### Python

Back in 1999, Thomas came into Mark Lutz's [Programming Python](http://www.amazon.com/Programming-Python-Mark-Lutz/dp/0596009259) while looking for a resource to learn Python and became fascinated with the language right away. He was in the process of replacing [Scheme](http://groups.csail.mit.edu/mac/projects/scheme/) as the extension language for a large C program he had written for Windows.

As for how he got involved in the development team, his first contribution to CPython (and open source in general), was a small Windows-related patch to distutils. His interest in distutils ultimately led him to the creation of the bdist\_wininst command to create point-and-click Windows installers. From there, Greg Ward invited him to the python-dev group where he eventually received commit access.

#### py2exe

Like many Windows users, he had the need to deploy shrink-wrapped Python applications as a single executable file. Early approaches to the problem came from Python luminaries Fredrik Lundh's squeeze and Christian Tismer's sqfreeze, and Thomas contributed several patches to Gordon McMillan's [Installer](http://davidf.sjsoft.com/mirrors/mcmillan-inc/install1.html) project.

His interest in distutils led Thomas to consider porting Installer to an extension to the packaging library. However, he ended up rewriting the source in order to make use of the existing distutils framework. In the end, he chose the simple yet descriptive name py2exe for the project.

#### ctypes

The idea for ctypes came from a need to go beyond what [pywin32](http://sourceforge.net/projects/pywin32/) provided at the time. Additionally, his work with Scheme required an interface to Windows APIs much like his Python work did, so he wanted to keep his project going.

ctypes saw its first public release in 2003 around the release of Python 2.3, after Thomas received numerous requests to publish the project. He mentioned what used to be his small personal project on his [Starship page](http://python.net/crew/theller/), but it grew into a widely used library in no time.

He originally started the project on Windows but quickly heard calls for a Linux port, which the community helped him complete. With the Linux port came the introduction of [libffi](http://sourceware.org/libffi/) to the project, which he also began using on Windows to replace its lower-level implementation.

2006 marked a 1.0 release for ctypes, which corresponded with the library's acceptance into the standard library in Python 2.5. After years of hard work and numerous releases per year, ctypes was now bundled with Python and available by default to a much wider audience.

It took a lot of people to get ctypes to where it is today, and Thomas wants to thank everyone involved, especially Robin Becker. Robin was instrumental in the early phases of the project and contributed both knowledge and encouragement.

#### A New ctypes Maintainer

After all of the hard work Thomas put in over the years, we would hate to see the project come to a stand still. If you have C experience and time to help out the Python project, the community would greatly appreciate your effort. Check out the new [developer guide](http://docs.python.org/devguide) and search [the bug tracker](http://bugs.python.org) for more information.

**Updated:** Fixed some links.
