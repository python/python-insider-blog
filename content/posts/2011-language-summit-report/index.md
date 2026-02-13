---
title: 2011 Language Summit Report
publishDate: '2011-03-24'
updatedDate: '2011-03-24'
author: Brian Curtin
description: 'This year''s Language Summit took place on Thursday March 10 in Atlanta, the day before the conference portion of PyCon began. In attendance were members of t...'
tags: []
published: true
legacyUrl: /2011/03/2011-language-summit-report.html
---

This year's Language Summit took place on Thursday March 10 in Atlanta, the day before the conference portion of PyCon began. In attendance were members of the [CPython](http://www.python.org), [PyPy](http://www.pypy.org), [Jython](http://www.jython.org), [IronPython](http://www.ironpython.net), and [Parrot](http://www.parrot.org) VMs; packaging developers from [Fedora](http://www.fedoraproject.org), [Ubuntu](http://www.ubuntu.com), and [Debian](http://www.debian.org); developers of the [Twisted](http://www.twistedmatrix.com) project, and several others.

#### Development Blog

One of the first orders of business was discussion of this very blog, initiated by PSF Communications Officer Doug Hellmann. Due to the high-traffic and often intense nature of the python-dev mailing-list, the blog hopes to be an easier way for users to get development news. We plan to cover PEPs, any major decisions, new features, and critical bug fixes, and will include informal coverage of what's going on in the development process.

Posting to the blog is open to all implementations of Python. For example, while PyPy already has [their own active blog](http://morepypy.blogspot.com/), they are welcome to have news posted here as well. A related side discussion lead to the alternative implementations also being mentioned on the [python.org download page](http://python.org/download). Their releases will also be listed as news items on the [python.org](http://www.python.org) front page.

#### Compatibility Warnings

With 3.2, we introduced ResourceWarning to allow users to find areas of code that depend on CPython's reference counting. The warning not only helps users write better code, but allows them to write safer cross-VM code. To further cross-VM compatibility, a new warning type was suggested: CompatibilityWarning.

The idea came up due to a recently filed CPython bug found by the PyPy developers. [Issue #11455](http://bugs.python.org/issue11455) explains a problem where CPython allows a user to create a type with non-string keys in its \_\_dict\_\_, which at least PyPy and Jython do not support. Ideally, users could enable a warning to detect such cases, just as they do with ResourceWarning.

#### Standalone Standard Library

Now that the transition of CPython's source from Subversion to Mercurial has been completed, the idea of breaking out the standard library into its own repository was resurrected. The developers of alternative implementations are very interested in this conversion, as it would greatly simplify their development processes. They currently take a snapshot from CPython and apply any implementation specific patches, replace some C extensions with pure Python versions, etc.

The conversion will need to be laid out in an upcoming PEP, and one of the discussion points will be how versioning will be worked out. Since the library will live outside of any of the implementations, it would likely be versioned by itself, and the tests will need version considerations as well.

Another topic for the standard library breakout was pure Python implementations and their C extension counterparts. Maciej Fijalkowski of the PyPy project mentioned that over time, some modules have had minor feature differences between their C and Python versions. As discussion of the breakout goes on, the group suggested a more strict approach to changing such modules, as to not penalize the use of one or the other. Additionally, a preference on pure Python implementations was decided, with C implementations being created only in the event that a performance gain is achieved.

#### Performance Benchmark Site

The PyPy Speed Center has done a great job of showing PyPy's performance results, and some discussion was had about hosting a similar site on python.org, possibly as performance.python.org for all VMs to take part in. In addition to performance benchmarks, others such as memory usage, test success, and language compatibility should be considered. Some effort will be needed to adapt the infrastructure to work with multiple Python implementations, as it currently tests PyPy vs. CPython.

Talk of putting some high-performance machines in the [Open Source Lab at Oregon State University](http://osuosl.org/), where Allison Randal is on the board, came up as a target for where the new Speed Center could live. Jesse Noller mentioned efforts to obtain hardware to put in the lab -- donations welcome!

If you or your organization are interested in donating for this cause or others, please contact the [Python Software Foundation](http://www.python.org/psf/about) and check out our [donations page](http://www.python.org/psf/donations).

#### Moratorium Lifted

With the start of development on CPython 3.3, the moratorium on language changes has been lifted. While the flood gates are open, language changes are expected to be conservative while we try to slow the rate of change and continue to allow alternative implementations to catch up. Although no one caught up to the 3.x line thanks to the moratorium, PyPy and IronPython recently reached 2.7 compatibility, and IronPython is beginning down the road to 3.x.

As for what language changes are expected in 3.3, look forward to seeing [PEP 380](http://www.python.org/dev/peps/pep-0380/) accepted. The PEP introduces a new yield from <expr> syntax, allowing a generator to yield to another generator. Other than this, no other language changes are expected in the near future.

#### Exception Attributes

The next topic was a quick discussion on exceptions providing better attributes, rather than forcing users to rely on string messages. For example, on an ImportError, it would be useful to have easy access to the import which failed, rather than parsing to find it.

The implementation will likely rely on a keyword-only argument when initializing an exception object, and a patch currently exists for the [ImportError case](http://bugs.python.org/issue8754).

#### Contributor Agreements

Contributor agreements were also mentioned, and some form of electronic agreement is underway. Google's [individual contributor agreement](http://code.google.com/legal/individual-cla-v1.0.html) was one of several inspirations for what the new system should work like. The topic has been long discussed, and many people are looking forward to a resolution in this area. Additionally, research is being done to ensure that any move to an electronic agreement remains valid in non-US jurisdictions.

#### Google Summer of Code

Martin von Löwis took a minute to introduce another year of Google Summer of Code under the PSF umbrella. Developers are encouraged not only to act as mentors, but also to propose projects for students to work on -- and remember that suggesting a project does not imply that you will mentor it. If you are interested in helping in any way, see the PSF's [Call for Projects and Mentors](http://pyfound.blogspot.com/2011/03/google-summer-of-code-call-for-projects.html).

#### Distutils

[Distutils2](https://bitbucket.org/tarek/distutils2/wiki/Home) came up and Tarek Ziadé mentioned that their sprint goal was to finish the port to Python 3 and prepare for the eventual merger back into the Python standard library. Additionally, with the merge comes a new name: packaging. The packaging team also plans to provide a standalone package, still called Distutils2, supporting Python 2.4 through 3.2.

The result of the packaging sprint, which was one of the larger groups at the PyCon sprints, was very successful. Their current results are on [Bitbucket](https://bitbucket.org/tarek/cpython), awaiting the standard library merge.

#### The Future of Alternative VMs

IronPython mentioned their future plans, and a 3.x release is next on their plate. They announced their 2.7.0 release at PyCon, their first community-based release since the project was handed off from Microsoft, and will be starting towards 3.x over the next few months.

Jython recently came out with a 2.5.2 release and have begun planning on a 2.6 release. Some suggested that they jump to 2.7, as the differences between 2.6 and 2.7 aren't all that great, but it may take longer to get a first release if they jump. "Release early, release often" was one of the quotes coming out of the talk, and they might be able to get away with going 2.6 to 3.x and considering any 2.6 to 2.7 differences after the fact.

#### Development Funding

Coming out of the 3.x planning talks was the topic of funding for development work and how it might be able to speed up some of the alternative implementations getting to 3.x. While funds are available, a proposal to the PSF has to be made before anything can be discussed. Those interested in receiving grants for these efforts should contact the PSF board.

#### Baseline Python

Jim Fulton began a discussion on what he called "baseline" Python. In his experience deploying Python applications, he has found the system Python to be unpredictable and difficult to target. With Fedora and Ubuntu/Debian packaging experts on-hand, we were able to get a look into why things are the way they are.

For Fedora, the base Python install has the Live CD in mind, so it's a very minimal installation with few dependencies, basically the bare minimum to allow the system to run. Additional differences are seen in directory layouts, removal of standard library modules like distutils, or that the distribution provides out-of-date libraries.

There didn't appear to be a clear-cut solution right away, but the relevant parties will continue to work on the problem.

#### 3.3 Features

Some thoughts for 3.3 features came up, including two PEPs. [PEP 382](http://www.python.org/dev/peps/pep-0382), covering Namespace Packages, should appear at some point in the cycle. It was also mentioned during the distutils merger topic.

[PEP 393](http://www.python.org/dev/peps/pep-0393), defining a flexible string repesentation, was also up for discussion and also has some interested students as a GSoC project. Along with the implementation, some effort will need to be placed on the performance and memory characteristics of the new internals in order to see if they can be accepted.

#### Unladen Swallow

Unladen Swallow is currently in a "resting" state and will not be included in CPython 3.3 as-is. To make further progress, we would need to identify several champions, as the domain experts are unavailable to do the work. During the discussion, it was again mentioned that if funding is what it would take to push Unladen Swallow to the next level, interested parties should apply to the PSF.

While Unladen Swallow is in its resting state and has an uncertain future, the project provided a large benefit to the Python and general open source community. The benchmark suite used by Unladen Swallow is very useful for testing alternative implementations, for example. Additionally, contributions to LLVM and Clang from the Unladen Swallow developers helped out those projects as well.

Two other performance ideas were also briefly discussed, including Dave Malcolm's function inlining proposal. Martin von Löwis mentioned a JIT extension module he has in the works, although the PyPy developers expressed skepticism of the effectiveness of a JIT of this kind.

#### Paving a Path to Asynchronous Frameworks

Ending the day was a discussion of some level of integration of Twisted into the standard library. The main idea is that an alternative to asyncore exists which allows for an easier transition to Twisted or other asynchronous programming frameworks.

The process will be laid out in an upcoming PEP, which some suggested would serve a purpose similar to the WSGI reference but for asynchronous event loops. Along with the PEP author(s), the Twisted project and others will need to put in effort to ensure everyone is on the same page.

#### More Information

For more information, see CPython developer Nick Coghlan's [rough notes](http://www.boredomandlaziness.org/2011/03/python-language-summit-rough-notes.html) and [highlights](http://www.boredomandlaziness.org/2011/03/python-language-summit-highlights.html)
