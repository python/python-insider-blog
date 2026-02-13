---
title: Python 3.12.0 alpha 1 released
publishDate: '2022-10-25'
updatedDate: '2022-10-25'
author: Thomas Wouters
description: 'As Pablo released Python 3.11.0 final earlier today, now it''s my turn to release Python 3.12.0 alpha 1. https://www.python.org/downloads/release/python-3120a...'
tags: []
published: true
legacyUrl: /2022/10/python-3120-alpha-1-released.html
---

As Pablo released Python 3.11.0 final earlier today, now it's my turn to release Python 3.12.0 alpha 1.

**

[https://www.python.org/downloads/release/python-3120a1/](https://www.python.org/downloads/release/python-3120a1/)

This is an early developer preview of Python 3.12  
**  

# Major new features of the 3.12 series, compared to 3.11

  
Python 3.12 is still in development. This release, 3.12.0a1, is the first of seven planned alpha releases. Alpha releases are intended to make it easier to test the current state of new features and bug fixes and to test the release process. During the alpha phase, features may be added up until the start of the beta phase (2023-05-08) and, if necessary, may be modified or deleted up until the release candidate phase (2023-07-31). Please keep in mind that this is a preview release and its use is ***not*** recommended for production environments. Many new features for Python 3.12 are still being planned and written. Among the new major new features and changes so far:  

-   The deprecated \`wstr\` and \`wstr\_length\` members of the C implementation of unicode objects were removed, per [PEP 623](https://peps.python.org/pep-0623/).
-   In the \`unittest\` module, a number of long deprecated methods and classes were removed. (They had been deprecated since Python 3.1 or 3.2).
-   The deprecated \`smtpd\` module has been removed.
-   A number of other old, broken and deprecated functions, classes and methods have been removed.
-   (Hey, \*\*fellow core developer,\*\* if a feature you find important is missing from this list, [let Thomas know](mailto:thomas@python.org).)

The next pre-release of Python 3.12 will be 3.12.0a2, currently scheduled for 2022-11-14.

# More resources

-   [Online Documentation](https://docs.python.org/3.12)
-   [PEP 693](https://www.python.org/dev/peps/pep-0693/), the 3.12 Release Schedule
-   Report bugs at [https://github.com/python/cpython/issues](https://github.com/python/cpython/issues).
-   Help fund Python and its community at [https://www.python.org/psf/donations/](https://www.python.org/psf/donations/).

  

### And now for something completely different

  
[This is Not the Poem that I Had Hoped to Write](https://twitter.com/brian_bilston/status/1579378460610662401)  
  
This is not the poem that I had hoped to write  
when I sat at my desk and the page was white.  
You see, there were other words that I’d had in mind,  
yet this is what I leave behind. I thought it was a poem to eradicate war;  
one of such power, it would heal all the sores  
of a world torn apart by conflict and schism.  
But it isn’t. Lovers, I’d imagined, would quote from it daily,  
Mothers would sing it to soothe crying babies.  
And whole generations would be given new hope.  
Nope. I had grand aspirations. Believe me, I tried.  
Humanity examined with lessons applied.  
But the right words escaped me; so often they do.  
Have these in lieu.  
  
[Brian Bilston](https://twitter.com/brian_bilston)  
  

## Enjoy the new releases

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation. [https://www.python.org/psf/](https://www.python.org/psf/)  
Your release team,  
Thomas Wouters  
Ned Deily  
Steve Dower
