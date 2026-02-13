---
title: 'Python 3.10.3, 3.9.11, 3.8.13, and 3.7.13 are now available with security content'
publishDate: '2022-03-16'
updatedDate: '2022-03-16'
author: Łukasz Langa
description: 'Welcome again to the exciting world of releasing new Python versions! Last time around I was complaining about cursed releases. This time around I could comp...'
tags: []
published: true
legacyUrl: /2022/03/python-3103-3911-3813-and-3713-are-now.html
---

Welcome again to the exciting world of releasing new Python versions!

Last time around I was complaining about [cursed releases](https://discuss.python.org/t/python-3-10-2-3-9-10-and-3-11-0a4-are-now-available/13146). This time around I could complain about security content galore and how [one of them](https://mta.openssl.org/pipermail/openssl-announce/2022-March/000216.html) ruined my ingenious idea to [release Python on Pi Day and call it Py Day](https://discuss.python.org/t/py-day-is-coming-a-joint-security-release-spree-for-python-3-7-3-8-3-9-and-3-10-on-march-14th/14109). Well, you can’t have everything in life. Or at least not everything **at once**.

And yet it seems this time around we’ve got a lot of security fixes all at once. Just look at this list:

-   **15 (sic!) CVEs**: libexpat upgraded from 2.4.1 to 2.4.7 ([BPO-46794](https://bugs.python.org/issue46794), [BPO-46932](https://bugs.python.org/issue46932), [BPO-46811](https://bugs.python.org/issue46811), [BPO-46784](https://bugs.python.org/issue46784), [BPO-46400](https://bugs.python.org/issue46400))
-   **CVE-2022-0778**: OpenSSL upgraded from 1.1.1l to 1.1.1n in macOS and Windows installers ([BPO-47024](https://bugs.python.org/issue47024))
-   **CVE-2016-3189**, **CVE-2019-12900**: bzip2 upgraded from 1.0.6 to 1.0.8 in Windows installers ([BPO-44549](https://bugs.python.org/issue44549))
-   **CVE-2022-26488**: Windows installer now ensures the correct path is being repaired when “Add to PATH” is used ([BPO-46948](https://bugs.python.org/issue46948))
-   **CVE-2021-28363**: bundled `pip` upgraded from 21.2.4 to 22.0.4 ([BPO-46985](https://bugs.python.org/issue46985))
-   authorization bypass fixed in `urllib.request` ([BPO-46756](https://bugs.python.org/issue46756))
-   REDoS avoided in `importlib.metadata` ([BPO-46474](https://bugs.python.org/issue46474))
-   SQLite upgraded from 3.36.0 to 3.37.2 in macOS and Windows installers ([BPO-45925](https://bugs.python.org/issue45925))

### [](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353#python-3103-1)Python 3.10.3

Get it here: [https://www.python.org/downloads/release/python-3103/](https://www.python.org/downloads/release/python-3103/)

Python 3.10.3 is the third maintenance release of the newest version of the Python programming language, which contains many new features and optimizations. We recommend it over the other releases listed below.

This is a large bugfix release with 220 commits since 3.10.2. Just look at [the change log](https://docs.python.org/release/3.10.3/whatsnew/changelog.html)!

The next maintenance release of Python 3.10 is planned for early June.

### [](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353#python-3911-2)Python 3.9.11

Get it here: [https://www.python.org/downloads/release/python-3911/](https://www.python.org/downloads/release/python-3911/ )  

This is the penultimate planned full bugfix release of Python 3.9. In mid-May, we’ll be releasing the last one, after which the 3.9 series will enter its *security-only fixes period*. More details in [PEP 596](https://www.python.org/dev/peps/pep-0596/).

Python 3.9 is the first Python version since 2.7 to have a regular bugfix release larger than “.10”. It’s also still a significant release at 163 commits since 3.9.10. That’s in fact 30+ commits more than between 3.9.9 and 3.9.10. [The change log](https://docs.python.org/release/3.9.11/whatsnew/changelog.html) isn’t as long as the 3.10.3 one but it’s still pretty extensive!

As a reminder, on macOS, the default installer is now the new `universal2` variant. It’s compatible with Mac OS X 10.9 and newer, including macOS 11 Big Sur and macOS 12 Monterey. Python installed with this variant will work natively on Apple Silicon processors.

### [](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353#python-3813-3)Python 3.8.13

Get it here: [https://www.python.org/downloads/release/python-3813/](https://www.python.org/downloads/release/python-3813/)

[Changes](https://docs.python.org/release/3.8.13/whatsnew/changelog.html) here are almost exclusively security-only as the life cycle of Python versions prescribes. You might have noticed there is a small number of regular bug fixes nonetheless. This is because without those we wouldn’t be able to continue running the full test suite for the 3.8 branch. This in turn could hide regressions in future security fixes.

### [](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353#python-3713-4)Python 3.7.13

Get it here: [https://www.python.org/downloads/release/python-3713/](https://www.python.org/downloads/release/python-3713/)

Just like 3.8, Python 3.7 is in its security-only fixes period. In turn, the [changes in 3.7.13](https://docs.python.org/release/3.7.13/whatsnew/changelog.html) look almost identical to the ones in 3.8.13.

Python 3.7 will continue to receive source-only releases until June 2023.

### [](https://discuss.python.org/t/python-3-10-3-3-9-11-3-8-13-and-3-7-13-are-now-available-with-security-content/14353#we-hope-you-enjoy-the-new-releases-5)We hope you enjoy the new releases

Your friendly release team,  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)
