---
title: 'Python 3.13.0RC2, 3.12.6, 3.11.10, 3.10.15, 3.9.20, and 3.8.20 are now available!'
publishDate: '2024-09-07'
updatedDate: '2024-09-07'
author: Łukasz Langa
description: 'Hi there!   A big joint release today. Mostly security fixes but we also have the final release candidate of 3.13 so let’s start with that! Python 3.13.0RC2 ...'
tags: []
published: true
legacyUrl: /2024/09/python-3130rc2-3126-31110-31015-3920.html
---

Hi there!  
A big joint release today. Mostly security fixes but we also have the final release candidate of 3.13 so let’s start with that!

### Python 3.13.0RC2

Final opportunity to test and find any show-stopper bugs before we bless and release 3.13.0 final on October 1st.

Get it here: [Python Release Python 3.13.0rc2 | Python.org](https://www.python.org/downloads/release/python-3130rc2/)

#### Call to action

We strongly encourage maintainers of third-party Python projects to prepare their projects for 3.13 compatibilities during this phase, and where necessary publish Python 3.13 wheels on PyPI to be ready for the final release of 3.13.0. Any binary wheels built against Python 3.13.0rc2 will work with future versions of Python 3.13. As always, report any issues to [the Python bug tracker](https://github.com/python/cpython/issues).

Please keep in mind that this is a preview release and while it’s as close to the final release as we can get it, its use is **not** recommended for production environments.

#### Core developers: time to work on documentation now

-   Are all your changes properly documented?
-   Are they mentioned in [What’s New](https://docs.python.org/3.13/whatsnew/3.13.html)?
-   Did you notice other changes you know of to have insufficient documentation?

As a reminder, until the final release of 3.13.0, the 3.13 branch is set up so that the Release Manager ([@thomas](https://discuss.python.org/u/thomas)) has to merge the changes. Please add him (`@Yhg1s` on GitHub) to any changes you think should go into 3.13.0. At this point, unless something critical comes up, it should really be **documentation only**. Other changes (including tests) will be pushed to 3.13.1.

#### New features in Python 3.13

-   A [new and improved interactive interpreter](https://docs.python.org/3.13/whatsnew/3.13.html#a-better-interactive-interpreter), based on [PyPy](https://pypy.org)’s, featuring multi-line editing and color support, as well as colorized [exception tracebacks](https://docs.python.org/3.13/whatsnew/3.13.html#improved-error-messages).
-   An [*experimental* free-threaded build mode](https://docs.python.org/3.13/whatsnew/3.13.html#free-threaded-cpython), which disables the Global Interpreter Lock, allowing threads to run more concurrently. The build mode is available as an experimental feature in the Windows and macOS installers as well.
-   A [preliminary, *experimental* JIT](https://docs.python.org/3.13/whatsnew/3.13.html#experimental-jit-compiler), providing the ground work for significant performance improvements.
-   The `locals()` builtin function (and its C equivalent) now has [well-defined semantics when mutating the returned mapping](https://docs.python.org/3.13/whatsnew/3.13.html#defined-mutation-semantics-for-locals), which allows debuggers to operate more consistently.
-   The (cyclic) garbage collector is now [incremental](https://docs.python.org/3.13/whatsnew/3.13.html#incremental-garbage-collection), which should mean shorter pauses for collection in programs with a lot of objects.
-   A modified version of [mimalloc](https://github.com/microsoft/mimalloc) is now included, optional but enabled by default if supported by the platform, and required for the free-threaded build mode.
-   Docstrings now have [their leading indentation stripped](https://docs.python.org/3.13/whatsnew/3.13.html#other-language-changes), reducing memory use and the size of .pyc files. (Most tools handling docstrings already strip leading indentation.)
-   The [dbm module](https://docs.python.org/3.13/library/dbm.html) has a new [dbm.sqlite3 backend](https://docs.python.org/3.13/whatsnew/3.13.html#dbm) that is used by default when creating new files.
-   The minimum supported macOS version was changed from 10.9 to **10.13 (High Sierra)**. Older macOS versions will not be supported going forward.
-   WASI is now a [Tier 2 supported platform](https://peps.python.org/pep-0011/#tier-2). Emscripten is no longer an [officially supported platform](https://peps.python.org/pep-0011/#no-longer-supported-platforms) (but [Pyodide](https://pyodide.org) continues to support Emscripten).
-   iOS is now a [Tier 3 supported platform](https://peps.python.org/pep-0730/), with [Android on the way as well](https://peps.python.org/pep-0738/).

### Python 3.12.6

This is an expedited release for 3.12 due to security content. The schedule returns back to regular programming in October.

One notable change for macOS users: as mentioned in the previous release of 3.12, this release **drops support for macOS versions 10.9 through 10.12**. Versions of macOS older than 10.13 haven’t been supported by Apple since 2019, and maintaining support for them has become too difficult. (All versions of Python 3.13 have already dropped support for them.)

Get it here: [Python Release Python 3.12.6 | Python.org](https://www.python.org/downloads/release/python-3126/)

92 commits.

### Python 3.11.10

Python 3.11 joins the elite club of security-only versions with no binary installers.

Get it here: [Python Release Python 3.11.10 | Python.org](https://www.python.org/downloads/release/python-31110/)

28 commits.

### Python 3.10.15

Get it here: [Python Release Python 3.10.15 | Python.org](https://www.python.org/downloads/release/python-31015/)

24 commits.

### Python 3.9.20

Get it here: [Python Release Python 3.9.20 | Python.org](https://www.python.org/downloads/release/python-3920/)

22 commits.

### Python 3.8.20

Python 3.8 is very close to End of Life (see [the Release Schedule](https://peps.python.org/pep-0569/)). Will this be the last release of 3.8 ever? We’ll see… but now I think I jinxed it.

Get it here: [Python Release Python 3.8.20 | Python.org](https://www.python.org/downloads/release/python-3820/)

22 commits.

### Security content in today’s releases

-   [gh-123678](https://github.com/python/cpython/issues/123678) and [gh-116741](https://github.com/python/cpython/issues/116741): Upgrade bundled libexpat to 2.6.3 to fix [CVE-2024-28757](https://github.com/advisories/GHSA-ch5v-h69f-mxc8), [CVE-2024-45490](https://github.com/advisories/GHSA-4hvh-m426-wv8w), [CVE-2024-45491](https://github.com/advisories/GHSA-784x-7qm2-gp97) and [CVE-2024-45492](https://github.com/advisories/GHSA-5qxm-qvmj-8v79).
-   [gh-118486](https://github.com/python/cpython/issues/118486): [`os.mkdir()`](https://docs.python.org/3/library/os.html#os.mkdir) on Windows now accepts *mode* of `0o700` to restrict the new directory to the current user. This fixes CVE-2024-4030 affecting [`tempfile.mkdtemp()`](https://docs.python.org/3/library/tempfile.html#tempfile.mkdtemp) in scenarios where the base temporary directory is more permissive than the default.
-   [gh-123067](https://github.com/python/cpython/issues/123067): Fix quadratic complexity in parsing `"`\-quoted cookie values with backslashes by [`http.cookies`](https://docs.python.org/3/library/http.cookies.html#module-http.cookies). Fixes CVE-2024-7592.
-   [gh-113171](https://github.com/python/cpython/issues/113171): Fixed various false positives and false negatives in IPv4Address.is\_private, IPv4Address.is\_global, IPv6Address.is\_private, IPv6Address.is\_global. Fixes CVE-2024-4032.
-   [gh-67693](https://github.com/python/cpython/issues/67693): Fix [`urllib.parse.urlunparse()`](https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlunparse) and [`urllib.parse.urlunsplit()`](https://docs.python.org/3/library/urllib.parse.html#urllib.parse.urlunsplit) for URIs with path starting with multiple slashes and no authority. Fixes CVE-2015-2104.
-   [gh-121957](https://github.com/python/cpython/issues/121957): Fixed missing audit events around interactive use of Python, now also properly firing for `python -i`, as well as for `python -m asyncio`. The event in question is `cpython.run_stdin`.
-   [gh-122133](https://github.com/python/cpython/issues/122133): Authenticate the socket connection for the `socket.socketpair()` fallback on platforms where `AF_UNIX` is not available like Windows.
-   [gh-121285](https://github.com/python/cpython/issues/121285): Remove backtracking from tarfile header parsing for `hdrcharset`, PAX, and GNU sparse headers. That’s CVE-2024-6232.
-   [gh-114572](https://github.com/python/cpython/issues/114572): [`ssl.SSLContext.cert_store_stats()`](https://docs.python.org/3/library/ssl.html#ssl.SSLContext.cert_store_stats) and [`ssl.SSLContext.get_ca_certs()`](https://docs.python.org/3/library/ssl.html#ssl.SSLContext.get_ca_certs) now correctly lock access to the certificate store, when the [`ssl.SSLContext`](https://docs.python.org/3/library/ssl.html#ssl.SSLContext) is shared across multiple threads.
-   [gh-102988](https://github.com/python/cpython/issues/102988): [`email.utils.getaddresses()`](https://docs.python.org/3/library/email.utils.html#email.utils.getaddresses) and [`email.utils.parseaddr()`](https://docs.python.org/3/library/email.utils.html#email.utils.parseaddr) now return `('', '')` 2-tuples in more situations where invalid email addresses are encountered instead of potentially inaccurate values. Add optional *strict* parameter to these two functions: use `strict=False` to get the old behavior, accept malformed inputs. `getattr(email.utils, 'supports_strict_parsing', False)` can be use to check if the *strict* paramater is available. This improves the CVE-2023-27043 fix.
-   [gh-123270](https://github.com/python/cpython/issues/123270): Sanitize names in [`zipfile.Path`](https://docs.python.org/3/library/zipfile.html#zipfile.Path) to avoid infinite loops ([gh-122905](https://github.com/python/cpython/issues/122905)) without breaking contents using legitimate characters. That’s CVE-2024-8088.
-   [gh-121650](https://github.com/python/cpython/issues/121650): [`email`](https://docs.python.org/3/library/email.html#module-email) headers with embedded newlines are now quoted on output. The [`generator`](https://docs.python.org/3/library/email.generator.html#module-email.generator) will now refuse to serialize (write) headers that are unsafely folded or delimited; see [`verify_generated_headers`](https://docs.python.org/3/library/email.policy.html#email.policy.Policy.verify_generated_headers). That’s CVE-2024-6923.
-   [gh-119690](https://github.com/python/cpython/issues/119690): Fixes data type confusion in audit events raised by `_winapi.CreateFile` and `_winapi.CreateNamedPipe`.
-   [gh-116773](https://github.com/python/cpython/issues/116773): Fix instances of `<_overlapped.Overlapped object at 0xXXX> still has pending operation at deallocation, the process may crash`.
-   [gh-112275](https://github.com/python/cpython/issues/112275): A deadlock involving `pystate.c`’s `HEAD_LOCK` in `posixmodule.c` at fork is now fixed.

### Stay safe and upgrade!

Upgrading is highly recommended to all users of affected versions.

### Thank you for your support

Thanks to all of the many volunteers who help make Python Development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organization contributions to the Python Software Foundation.

–  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
on behalf of your friendly release team,

Ned Deily [@nad](https://discuss.python.org/u/nad)  
Steve Dower [@steve.dower](https://discuss.python.org/u/steve.dower)  
Pablo Galindo Salgado [@pablogsal](https://discuss.python.org/u/pablogsal)  
Łukasz Langa [@ambv](https://discuss.python.org/u/ambv)  
Thomas Wouters [@thomas](https://discuss.python.org/u/thomas)
