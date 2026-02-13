---
title: The last Python 3.11 alpha (3.11.0a7) is available
publishDate: '2022-04-06'
updatedDate: '2022-04-06'
author: Pablo Galindo
description: 'Brrrrr… do you feel that? That’s the chill of beta freeze coming closer. Meanwhile, your friendly CPython release team doesn’t rest and we have prepared a sh...'
tags: []
published: true
legacyUrl: /2022/04/the-last-python-311-alpha-3110a7-is.html
---

Brrrrr… do you feel that? That’s the chill of beta freeze coming closer. Meanwhile, your friendly CPython release team doesn’t rest and we have prepared a shiny new release for you: Python 3.11.0a7.

[https://www.python.org/downloads/release/python-3110a7/](https://www.python.org/downloads/release/python-3110a7/)

## Major new features of the 3.11 series, compared to 3.10

Among the new major new features and changes so far:  

-   [PEP 657](https://www.python.org/dev/peps/pep-0657/) – Include Fine-Grained Error Locations in Tracebacks
-   [PEP 654](https://www.python.org/dev/peps/pep-0654/) – Exception Groups and except\*
-   [PEP 673](https://www.python.org/dev/peps/pep-0673/) – Self Type
-   [PEP 646](https://www.python.org/dev/peps/pep-0646/) – Variadic Generics
-   [PEP 680](https://www.python.org/dev/peps/pep-0680/)– tomllib: Support for Parsing TOML in the Standard Library
-   [PEP 675](https://www.python.org/dev/peps/pep-0675/)– Arbitrary Literal String Type
-   [PEP 655](https://www.python.org/dev/peps/pep-0655/)– Marking individual TypedDict items as required or potentially-missing
-   [bpo-46752](https://bugs.python.org/issue46752)– Introduce task groups to asyncio
-   The [Faster Cpython Project](https://github.com/faster-cpython) is already yielding some exciting results: this version of CPython 3.11 is ~19% faster on the geometric mean of the [performance benchmarks](http://speed.python.org), compared to 3.10.0.
(Hey, fellow core developer, if a feature you find important is missing from this list, [let Pablo know](mailto:pablogsal@python.org).)

The next pre-release of Python 3.11 will be 3.11.0b1, currently scheduled for Friday, 2022-05-06.

More resources

-   [Online Documentation](https://docs.python.org/3.10/)

-   [PEP 664](https://www.python.org/dev/peps/pep-0664/), 3.11 Release Schedule
-   Report bugs at [https://bugs.python.org](https://bugs.python.org/).

-   [Help fund Python and its community](https://www.python.org/psf/donations/).

## And now for something completely different

In mathematics, the Dirac delta distribution (δ distribution) is a generalized function or distribution over the real numbers, whose value is zero everywhere except at zero, and whose integral over the entire real line is equal to one. The current understanding of the impulse is as a linear functional that maps every continuous function to its value at zero. The delta function was introduced by physicist Paul Dirac as a tool for the normalization of state vectors. It also has uses in probability theory and signal processing. Its validity was disputed until Laurent Schwartz developed the theory of distributions where it is defined as a linear form acting on functions.

Defining this distribution as a “function” as many physicist do is known to be one of the easier ways to annoy mathematicians :)

## We hope you enjoy the new releases!

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.  
[https://www.python.org/psf/  
](https://www.python.org/psf/)

Your friendly release team,  
[Ned Deily @nad](https://discuss.python.org/u/nad)  
[Steve Dower @steve.dower](https://discuss.python.org/u/steve.dower)  
[Pablo Galindo Salgado @pablogsal](https://discuss.python.org/u/pablogsal)
