---
title: 'Python versions 3.10.8, 3.9.15, 3.8.15, 3.7.15 now available'
publishDate: '2022-10-11'
updatedDate: '2022-10-11'
author: Łukasz Langa
description: 'Déjà vu? Right, a month after the expedited releases we are doing the dance again. This coincides with the regular scheduled time for 3.10.8 but since we acc...'
tags: []
published: true
legacyUrl: /2022/10/python-versions-3108-3915-3815-3715-now.html
---

*Déjà vu?* Right, a month after the expedited releases we are doing the dance again. This coincides with the regular scheduled time for 3.10.8 but since we accrued a few fixes in 3.7 - 3.9 as well, we’re again releasing all four editions at the same time. We’re not promising to continue at this pace ![:sweat_smile:](./image-1.png)

## [](https://discuss.python.org/c/committers/5#security-content-this-time-1)Security content this time

-   CVE-2022-40674: bundled libexpat was upgraded from 2.4.7 to 2.4.9 which fixes a heap use-after-free vulnerability in function `doContent`
-   gh-97616: a fix for a possible buffer overflow in `list *= int`
-   gh-97612: a fix for possible shell injection in the example script `get-remote-certificate.py`(this issue originally had a CVE assigned to it, which its author withdrew)
-   gh-96577: a fix for a potential buffer overrun in `msilib`

## [](https://discuss.python.org/c/committers/5#python-3108-2)Python 3.10.8

Get it here: [https://www.python.org/downloads/release/python-3108/](https://www.python.org/downloads/release/python-3108/)

As a bugfix release coming a mere month after an out-of-schedule security release, 3.10.8 is somewhat smaller compared to 3.9.8 released at the same stage of the release cycle a year ago. There’s 151 commits vs 204 in 3.9. It’s still a larger release than 3.10.7 at 113 commits. One way or the other, it’s worth [checking out the change log](https://docs.python.org/release/3.10.8/whatsnew/changelog.html).

## [](https://discuss.python.org/c/committers/5#and-now-for-something-completely-different-3)And now for something completely different

Granular convection is a phenomenon where granular material subjected to shaking or vibration will exhibit circulation patterns similar to types of fluid convection.

It is sometimes described as the Brazil nut effect when the largest particles end up on the surface of a granular material containing a mixture of variously sized objects; this derives from the example of a typical container of mixed nuts, where the largest will be Brazil nuts.

The phenomenon is also known as the muesli effect since it is seen in packets of breakfast cereal containing particles of different sizes but similar densities, such as muesli mix.

Under experimental conditions, granular convection of variously sized particles has been observed forming convection cells similar to fluid motion.

## [](https://discuss.python.org/c/committers/5#we-hope-you-enjoy-the-new-releases-4)We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

Your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)
