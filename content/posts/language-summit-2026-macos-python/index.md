---
title: macOS and Python (Python Language Summit 2026)
publishDate: '2026-09-30T12:00:01Z'
author: Seth Larson
description: 'Ned Deily weighs whether Python should continue shipping macOS installers'
tags: [language-summit, language-summit-2026]
published: true
---

Ned Deily, the macOS expert and release manager, shared that this was the first time discussing this topic in 15 years of Python Language Summits.

When CPython does a release, the main result of the release is source distributions: tarballs and ZIP archives. It’s then up to downstream packagers and distributions to build from these sources for their individual platforms. Historically, though, CPython has also provided some pre-compiled installers for Windows and macOS. This was done because these two platforms are “different” from most others.

The question weighing on Ned was whether it was still worth shipping [macOS installers](https://docs.python.org/3/using/mac.html) as had been done in the past. “macOS has come a long way” and was no longer comparable to Windows “in terms of strangeness”. Ned admitted that the decision to continue was mostly on “autopilot”, that the macOS installers were “off in a dark corner with only a few people involved”, and that for certain stretches that were “too long”, he was the only one maintaining this functionality.

Ned wanted to answer whether Python should “continue to [ship macOS installers]”? And if so, then it was “long-past due” to bring the knowledge about the macOS installer “more to the forefront” and inform other Python core developers what they need to know about changes that affect the macOS platform. “A lot of what happens for macOS also applies to iOS”, Ned continued, “now that we provide compiled binaries for [iOS], too”.


## What’s different about macOS?

macOS has three different build types: “static” and “shared”, which are like Unix builds, and “framework”, which is unique to macOS and iOS. [Frameworks](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPFrameworks/Concepts/WhatAreFrameworks.html) originated in [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP), carried over into Mac OS X, and are used for system interfaces and APIs. macOS can build objects into files that support multiple processor types, such as ARM64 and x86-64, in a single file, which Ned called “fat files”. Apple developer tools (ADT) provide support for transparently building and linking multi-architecture files, including providing a version of Clang that handles this for you. iOS, watchOS, and tvOS use the same ADT, so they also benefit from this multi-architecture support.

Apple Software Development Kit (SDK) files, such as header files and shared libraries, are not installed in traditional locations like `/usr`; instead, they live within the SDK. This allows using a single environment variable to switch between different SDK versions and makes building for any current Apple platform possible on a single macOS system (for example, building for iOS from macOS, or building for Intel x86-64 macOS on Apple Silicon).

Ned noted that Python’s Framework builds make it easy to embed Python directly into a macOS app that “just works everywhere with no external dependencies”.

But of course, it’s not all benefits; there are drawbacks, too. As-is, the macOS installer had accumulated “significant technical debt” over 25 years of support, didn’t follow macOS guidelines for file layouts, and didn’t support [macOS sandboxing](https://developer.apple.com/documentation/security/app-sandbox), which would be required to distribute Python via the App Store. Another drawback was that there was only one system-wide install location. The macOS Framework versioning scheme also didn’t align with the Python versioning scheme due to ABI compatibility issues.

[Free-threaded Python](https://docs.python.org/3/howto/free-threading-python.html) (`python3t`) introduced a whole new separate Framework build instead of rolling support into the current Framework build, but Ned doesn’t think this distinction will last once free-threading is eventually made the default for Python.


## Who uses the official Python macOS distribution?

“We don’t know, but we can make some guesses”, Ned said, sharing that his own mental profile of macOS installer users included “users on managed system environments such as centralized IT departments, public schools, engineering or scientific users, novice programmers, and experimenters”. [py2app](https://py2app.readthedocs.io/) uses the Framework builds, but “has to munge the build to make it work”.

Ned listed a few other projects which build and distribute Python for macOS, including Homebrew, MacPorts, Conda, uv, ActiveState, and Apple themselves as part of Xcode for LLDB. These projects don’t use any of the builds available on [python.org](https://www.python.org); they all build the distribution themselves.

Łukasz Langa asked whether the Python Developers Survey asked about macOS installers. Ned agreed that would be a good idea.


## What’s next?

Ned closed the topic by listing his plans for macOS and Python. He noted that there was no section for macOS in [PEP 11](https://peps.python.org/pep-0011/), the PEP which details platform support for CPython, [whereas there was a section for Windows](https://peps.python.org/pep-0011/#microsoft-windows). He planned to propose such a section for macOS and get feedback from other core developers. More generally, Ned wanted a policy for “supporting macOS in general”, covering people who want to build Python themselves and detailing what is supported.
Currently, all three build types and architectures are considered the same in terms of “support” in PEP 11. Ned wondered whether each of these builds should be treated as a different PEP 11 target. This would allow macOS on ARM to be in a different support tier from macOS on x86-64. Ned would also like to leverage the large overlap in building and packaging for iOS and macOS.

Ned would like to automate the build process, including the packaging and continuous integration, much like Windows already has as a part of the Python release process. In addition, Ned wants to modernize Python’s macOS support, including deprecating and removing the PPC universal builds and migrating to [XCFramework](https://developer.apple.com/documentation/xcode/creating-a-multi-platform-binary-framework-bundle) packaging instead of the legacy Framework format. “We’ve got a lot of cruft”.

But not everything that’s no longer being used can be removed. Even though Apple is phasing out Intel Mac support entirely, there is still likely to be a need for at least the hooks for universal builds. “The universal fat-file build technology has been in use for over 30 years, and Apple has reached for it every time Apple migrates CPU architectures, you can almost bet that Apple will do something that requires universal builds again”.

Nathan Goldbaum asked whether Ned planned to port [PyManager](https://github.com/python/pymanager) to macOS. Ned guessed that the internals would differ between Windows and macOS, but the user interface could be made as similar as possible for users. Ned shared that Russell Keith-Magee had created a small GUI app that may be a good jumping-off point for this work.

Łukasz Langa referenced [MOPUp](https://github.com/glyph/MOPUp) (“**m**ac**O**S **P**ython.org **Up**dater”), a tool by Glyph Lefkowitz which updates the macOS installers from [python.org](https://www.python.org), and in particular noted an “advanced” feature of this tool: uninstalling Python versions. Ned agreed this was a desirable feature, noting that MOPUp was only a command-line tool, but that some years ago Glyph had created a manager that works in combination with the macOS installer.
