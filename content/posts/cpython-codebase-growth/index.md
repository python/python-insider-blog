---
title: 'CPython: 36 Years of Source Code'
publishDate: 2026-08-03
author: Stan Ulbrych
description: >-
  An analysis of the growth of CPython's codebase from its first commits to the
  present day
tags:
  - history
published: true
---
![Stacked area chart showing CPython's growth from a few lines in 1990 to 2.9 million lines in 2026, broken down by language](cpython_growth.svg)

([Click to zoom!](https://blog.python.org/_astro/cpython_growth.CDpb_itO_ZomrED.svg))

While working on a patch and navigating through CPython, I got curious as to how the codebase has grown over the years. Using an interesting tool I found on the internet to *count lines of code* ([cloc](https://github.com/AlDanial/cloc)), some scripts, and some patience (thank goodness for multiple cores, or I’d be at this all day), I amassed a [1,392 commit dataset.](https://gist.github.com/StanFromIreland/bd33d5ee3c59c54cbe1f3bad2fbdb4e9) With that, and some Git spelunking for the annotations, I was able to generate the above graph.

Many thanks to Tim and Ned for their help with this little project! I plan to tidy my scripts and upload them to a repository sometime in the near future. Please feel free to use my dataset :-)
