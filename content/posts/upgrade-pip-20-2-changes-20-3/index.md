---
title: 'Upgrade to pip 20.2, plus, changes coming in 20.3'
publishDate: '2020-07-30'
updatedDate: '2020-07-30'
author: Sumana Harihareswara
description: 'On behalf of the Python Packaging Authority, I am pleased to announce that we have just released pip 20.2, a new version of pip. You can install it by running...'
tags:
  - pip
  - releases
published: true
legacyUrl: /2020/07/upgrade-pip-20-2-changes-20-3.html
---

On behalf of the Python Packaging Authority, I am pleased to announce that **we have just released pip 20.2**, a new version of pip. You can install it by running python -m pip install --upgrade pip. The **highlights** for this release are: - **The beta of the next-generation dependency resolver is available -- please test**  
\- Faster installations from wheel files  
\- Improved handling of wheels containing non-ASCII file contents  
\- Faster pip list using parallelized network operations  
\- Installed packages now contain metadata about whether they were directly requested by the user ([PEP 376](https://www.python.org/dev/peps/pep-0376/)’s REQUESTED file) The new dependency resolver is *off by default* because it is in beta and *not yet ready for everyday use*. The new dependency resolver is significantly stricter and more consistent when it receives incompatible instructions, and reduces support for certain kinds of constraints files, so some workarounds and workflows may break. Please test it with the \--use-feature=2020-resolver flag. Please see [our guide on how to test and migrate, how to report issues, and context for the change](https://pip.pypa.io/en/latest/user_guide/#changes-to-the-pip-dependency-resolver-in-20-2-2020). Please report bugs through [the resolver testing survey](https://tools.simplysecure.org/survey/index.php?r=survey/index&sid=989272&lang=en). Thanks to all who tested [the alpha of the new resolver in pip 20.1](https://blog.python.org/2020/04/pip-20-1-released.html) for feedback that helped us get it to the beta stage. We are preparing to **change the default dependency resolution behavior** and make the new resolver the **default in pip 20.3** (in October 2020). This release also partially optimizes pip’s network usage during installation (as part of [a Google Summer of Code project by McSinyx](https://summerofcode.withgoogle.com/projects/#5428041779511296)). Please test it with pip install --use-feature=2020-resolver --use-feature=fast-deps and [report bugs to the issue tracker](https://github.com/pypa/pip/issues/new?template=bug-report.md). This functionality is *still experimental* and *not ready for everyday use*. You can find more details (including deprecations and removals) in **[the changelog](https://pip.pypa.io/en/stable/news/)**. As with all pip releases, a significant amount of the work was contributed by pip’s user community. Huge **thanks** to all who have contributed, whether through code, documentation, issue reports and/or discussion. Your help keeps pip improving, and is hugely appreciated. Specific thanks go to Mozilla (through its [Mozilla Open Source Support Awards](https://www.mozilla.org/en-US/moss/)) and to the [Chan Zuckerberg Initiative DAF](https://chanzuckerberg.com/eoss/), an advised fund of Silicon Valley Community Foundation, for their funding that enabled substantial work on the new resolver.
