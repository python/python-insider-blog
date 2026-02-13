---
title: 'Python releases 3.10.7, 3.9.14, 3.8.14, and 3.7.14 are now available'
publishDate: '2022-09-07'
updatedDate: '2022-09-07'
author: Łukasz Langa
description: 'We have some security content, and plenty of regular bug fixes for 3.10. Let’s dive right in. [](https://discuss.python.org/#cve-2020-10735httpscvemitreorgcg...'
tags: []
published: true
legacyUrl: /2022/09/python-releases-3107-3914-3814-and-3714.html
---

We have some security content, and plenty of regular bug fixes for 3.10. Let’s dive right in.

## [](https://discuss.python.org/#cve-2020-10735httpscvemitreorgcgi-bincvenamecginamecve-2020-10735-1)[CVE-2020-10735](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-10735)

Converting between int and str in bases other than 2 (binary), 4, 8 (octal), 16 (hexadecimal), or 32 such as base 10 (decimal) [now raises a ValueError](https://docs.python.org/release/3.10.7/whatsnew/3.10.html#notable-security-feature-in-3-10-7) if the number of digits in string form is above a limit to avoid potential denial of service attacks due to the algorithmic complexity.

Security releases for 3.9.14, 3.8.14, and 3.7.14 are made available simultaneously to address this issue, along with some less urgent security content.

Upgrading your installations is highly recommended.

## [](https://discuss.python.org/#python-3107-2)Python 3.10.7

Get it here:

[https://www.python.org/downloads/release/python-3107/](https://www.python.org/downloads/release/python-3107/)

This bugfix version of Python was released out-of-schedule to address the CVE, and as such contains a smaller number of changes compared to 3.10.6 (200 commits), or in fact 3.9.7 (187 commits) at the same stage of the release cycle a year ago. But there’s still over a 100 commits in this latest Python version so it’s worth [checking out the change log](https://docs.python.org/release/3.10.7/whatsnew/changelog.html).

## [](https://discuss.python.org/#and-now-for-something-completely-different-3)And now for something completely different

In quantum mechanics, the uncertainty principle (also known as Heisenberg’s uncertainty principle) is any of a variety of mathematical inequalities asserting a fundamental limit to the accuracy with which the values for certain pairs of physical quantities of a particle, such as position and momentum or the time and the energy can be predicted from initial conditions.

Such variable pairs are known as complementary variables or canonically conjugate variables; and, depending on interpretation, the uncertainty principle limits to what extent such conjugate properties maintain their approximate meaning, as the mathematical framework of quantum physics does not support the notion of simultaneously well-defined conjugate properties expressed by a single value.

The uncertainty principle implies that it is in general not possible to predict the value of a quantity with arbitrary certainty, even if all initial conditions are specified.

## [](https://discuss.python.org/#we-hope-you-enjoy-the-new-releases-4)We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

[https://www.python.org/psf/](https://www.python.org/psf/)

  

Your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
