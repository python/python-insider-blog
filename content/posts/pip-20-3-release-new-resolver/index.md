---
title: 'Releasing pip 20.3, featuring new dependency resolver'
publishDate: '2020-11-30'
updatedDate: '2022-05-23'
author: Sumana Harihareswara
description: 'On behalf of the Python Packaging Authority and the pip team, I am pleased to announce that we have just released pip 20.3, a new version of pip. You can ins...'
tags:
  - pip
  - releases
published: true
legacyUrl: /2020/11/pip-20-3-release-new-resolver.html
---

On behalf of the [Python Packaging Authority](https://www.pypa.io) and the pip team, I am pleased to announce that **we have just released pip 20.3**, a new version of pip. You can install it by running `python -m pip install --upgrade pip`.

This is an important and disruptive release -- we [explained why in a blog post last year](https://pyfound.blogspot.com/2019/12/moss-czi-support-pip.html). We've even made [a video about it](https://www.youtube.com/watch?v=B4GQCBBsuNU).

## Highlights

-   **DISRUPTION**: Switch to the new dependency resolver by default. Watch out for changes in handling editable installs, constraints files, and more: [https://pip.pypa.io/en/latest/user\_guide/#changes-to-the-pip-dependency-resolver-in-20-3-2020](https://pip.pypa.io/en/latest/user_guide/#changes-to-the-pip-dependency-resolver-in-20-3-2020)
    
-   **DEPRECATION**: Deprecate support for Python 3.5 (to be removed in pip 21.0).
    
-   **DEPRECATION**: pip freeze will stop filtering the pip, setuptools, distribute and wheel packages from pip freeze output in a future version. To keep the previous behavior, users should use the new `--exclude` option.
    
-   Substantial improvements in new resolver for performance, output and error messages, avoiding infinite loops, and support for constraints files.
    
-   Support for PEP 600: Future `manylinux` Platform Tags for Portable Linux Built Distributions.
    
-   Documentation improvements: Resolver migration guide, quickstart guide, and new documentation theme.
    
-   Add support for MacOS Big Sur compatibility tags.
    

The new resolver is now *on by default* for Python 3 users. It is significantly stricter and more consistent when it receives incompatible instructions, and reduces support for certain kinds of constraints files, so some workarounds and workflows may break. Please see [our guide on how to test and migrate, and how to report issues](https://pip.pypa.io/en/latest/user_guide/#changes-to-the-pip-dependency-resolver-in-20-3-2020). You can use the deprecated (old) resolver, using the flag `--use-deprecated=legacy-resolver`, until we remove it in the pip 21.0 release in January 2021.  

You can find more details (including deprecations and removals) [in the changelog](https://pip.pypa.io/en/stable/news/).

## Coming soon: end of Python 2.7 support

We aim to release pip 21.0 in January 2021, per our [release cadence](https://pip.pypa.io/en/latest/development/release-process/#release-cadence). At that time, pip will [stop supporting Python 2.7](https://pip.pypa.io/en/latest/development/release-process/#python-2-support) and will therefore stop supporting Python 2 entirely. When users use pip 20.3 in a Python 2 environment, the old dependency resolver is still the default.  

## For more info or to contribute:

We run this project as transparently as possible, so you can:

-   read and participate in [GitHub issues](https://github.com/pypa/pip/projects/6)  
    
-   contribute to [our user experience work](https://pip.pypa.io/en/stable/ux_research_design/): [sign up to become a member of the UX Studies group](https://bit.ly/pip-ux-studies) (after you join, we'll notify you about future UX surveys and interviews)
-   contact us in the [Discourse](https://discuss.python.org/t/an-update-on-pip-and-dependency-resolution/1898) [forum](https://discuss.python.org/t/an-update-on-pip-and-dependency-resolution/1898) or [Zulip chat](https://python.zulipchat.com/#narrow/stream/218659-pip-development)
-   read [our meeting notes](https://wiki.python.org/psf/PackagingWG#Dependency_resolver_and_user_experience_improvements_for_pip)

## Thank you

Thanks to our contractors on this project: [Simply Secure](https://simplysecure.org/) (specifically Georgia Bullen, Bernard Tyers, Nicole Harris, Ngọc Triệu, and Karissa McKelvey), [Changeset Consulting](https://changeset.nyc/) (Sumana Harihareswara), [Atos](https://www.atos.net) (Paul F. Moore), [Tzu-ping Chung](https://uranusjr.com), [Pradyun Gedam](https://pradyunsg.me/), and Ilan Schnell. Thanks also to Ee Durbin at the Python Software Foundation for liaising with the project.

This award continues our relationship with Mozilla, which supported Python packaging tools with [a Mozilla Open Source Support Award in 2017 for Warehouse](https://pyfound.blogspot.com/2017/11/the-psf-awarded-moss-grant-pypi.html). Thank you, Mozilla! (MOSS has a number of types of awards, which are open to different sorts of open source/free software projects. If your project will seek financial support in 2021, do check [the MOSS website](https://www.mozilla.org/en-US/moss/) to see if you qualify.)

  

This is new funding from the Chan Zuckerberg Initiative. This project is being made possible in part by a grant from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation. Thank you, CZI! (If your free software/open source project is seeking funding and is used by researchers, check [the Joint Roadmap for Open Science Tools Rapid Response Fund](https://investinopen.org/blog/jrost-rapid-response-fund/) and consider applying.)

The [funding for pip's overhaul](https://pyfound.blogspot.com/2019/12/moss-czi-support-pip.html) will end at the end of 2020; if your organization wants to help continue [improvements in Python packaging](https://github.com/psf/fundable-packaging-improvements/), please join [the sponsorship program](https://pyfound.blogspot.com/2020/04/sponsoring-python-packaging.html).  

  

As with all pip releases, a significant amount of the work was contributed by pip's user community. Huge thanks to all who have contributed, whether through code, documentation, issue reports and/or discussion. Your help keeps pip improving, and is hugely appreciated. Thank you to the pip and [PyPA](https://www.pypa.io/) maintainers, to the PSF and the Packaging WG, and to all the contributors and volunteers who work on or use Python packaging tools.

*\-Sumana Harihareswara, pip project manager*
