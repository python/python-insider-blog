---
title: Pip 20.1 has been released
publishDate: '2020-04-30'
updatedDate: '2020-04-30'
author: Sumana Harihareswara
description: 'On behalf of the PyPA, I am pleased to announce that a new version of pip, pip 20.1, has been released. To install pip 20.1, you can run:   > python -m pip i...'
tags:
  - pip
  - releases
published: true
legacyUrl: /2020/04/pip-20-1-released.html
---

On behalf of the PyPA, I am pleased to announce that a new version of pip, pip 20.1, has been released. To install pip 20.1, you can run:  

> python -m pip install --upgrade pip

The highlights for this release are:

-   Significant speedups when building local directories, by changing behavior to perform in-place builds, instead of copying to temporary directories.
-   Significant speedups in `pip list --outdated`, by parallelizing network access. This is the first instance of parallel code within pip's codebase.
-   A new `pip cache` command, which makes it possible to introspect and manage pip's cache directory.
-   Better `pip freeze` for packages installed from direct URLs, enabled by the implementation of PEP 610.

  
This release also contains an alpha version of pip's next generation resolver. It is **off by default** because it is **unstable and not ready for everyday use**. If you're curious about this, please visit [this GitHub issue about the resolver, what doesn't work yet, and what kind of testing would help us out](https://github.com/pypa/pip/issues/8099). We [plan to release a version of pip that includes a beta of the new resolver in May](https://pyfound.blogspot.com/2020/03/new-pip-resolver-to-roll-out-this-year.html). The [full changelog](https://pip.pypa.io/en/latest/news/) is available. As with all pip releases, a significant amount of the work was contributed by pip's user community. Huge thanks to all who have contributed, whether through code, documentation, issue reports and/or discussion. Your help keeps pip improving, and is hugely appreciated. Thank you to the pip and PyPA maintainers, and to all the contributors and volunteers who work on or use Python packaging tools. And thank you to [Mozilla (through its Mozilla Open Source Support Awards)](https://www.mozilla.org/en-US/moss/) and to [the Chan Zuckerberg Initiative](https://chanzuckerberg.com/eoss/) DAF, an advised fund of Silicon Valley Community Foundation, for funding enabling work on the new resolver, and thanks to the PSF and the Packaging WG for obtaining and administering that funding.
