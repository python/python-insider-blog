---
title: 'Announcing defusedxml, Fixes for XML Security Issues'
publishDate: '2013-02-19'
updatedDate: '2013-02-21'
author: Brian Curtin
description: The following post was created on behalf of CPython contributor Christian Heimes using a subset of details found here. Christian Heimes announces the release...
tags: []
published: true
legacyUrl: /2013/02/announcing-defusedxml-fixes-for-xml.html
---

*The following post was created on behalf of CPython contributor Christian Heimes using a subset of details found [here](https://bitbucket.org/tiran/defusedxml).* Christian Heimes announces the release of his [defusedxml](https://bitbucket.org/tiran/defusedxml) and [defusedexpat](https://bitbucket.org/tiran/defusedexpat) packages to address XML-related security issues which were reported to [security@python.org](mailto:security@python.org) over the last several months. Throughout the development of the patches, the security team has coordinated with other open source projects in order to make this announcement at 1500 UTC on Tuesday February 19. Details will follow once releases of CPython have been organized. ***Note: this post will be updated with more details as they switch from being private to publicly available, including links to the public bug reports on [http://bugs.python.org](http://bugs.python.org/).***  
  
defusedxml on PyPI: [https://pypi.python.org/pypi/defusedxml](https://pypi.python.org/pypi/defusedxml)  
defusedexpat on PyPI: [https://pypi.python.org/pypi/defusedexpat](https://pypi.python.org/pypi/defusedexpat)  
"XML vulnerabilities" on bug tracker: [http://bugs.python.org/issue17239](http://bugs.python.org/issue17239)  

## [Synopsis](https://bitbucket.org/PSF/defusedxml/#id2)

The results of an attack on a vulnerable XML library can be fairly dramatic. With just a few hundred **Bytes** of XML data an attacker can occupy several **Gigabytes** of memory within **seconds**. An attacker can also keep CPUs busy for a long time with a small to medium size request. Under some circumstances it is even possible to access local files on your server, to circumvent a firewall, or to abuse services to rebound attacks to third parties. The attacks use and abuse less common features of XML and its parsers. The majority of developers are unacquainted with features such as processing instructions and entity expansions that XML inherited from SGML. At best they know about <!DOCTYPE> from experience with HTML but they are not aware that a document type definition (DTD) can generate an HTTP request or load a file from the file system. None of the issues is new. They have been known for a long time. Billion laughs was first reported in 2003. Nevertheless some XML libraries and applications are still vulnerable and even heavy users of XML are surprised by these features. It's hard to say whom to blame for the situation. It's too short sighted to shift all blame on XML parsers and XML libraries for using insecure default settings. After all they properly implement XML specifications. Application developers must not rely that a library is always configured for security and potential harmful data by default.

## [Attack vectors](https://bitbucket.org/PSF/defusedxml#id3)

### [billion laughs / exponential entity expansion](https://bitbucket.org/PSF/defusedxml#id4)

The [Billion Laughs](http://en.wikipedia.org/wiki/Billion_laughs) attack -- also known as exponential entity expansion -- uses multiple levels of nested entities. The original example uses 9 levels of 10 expansions in each level to expand the string lol to a string of 3 \* 10 9 bytes, hence the name "billion laughs". The resulting string occupies 3 GB (2.79 GiB) of memory; intermediate strings require additional memory. Because most parsers don't cache the intermediate step for every expansion it is repeated over and over again. It increases the CPU load even more. An XML document of just a few hundred bytes can disrupt all services on a machine within seconds. Example XML:

<!DOCTYPE xmlbomb \[
<!ENTITY a "1234567890" >
<!ENTITY b "&a;&a;&a;&a;&a;&a;&a;&a;">
<!ENTITY c "&b;&b;&b;&b;&b;&b;&b;&b;">
<!ENTITY d "&c;&c;&c;&c;&c;&c;&c;&c;">
\]>
<bomb>&d;</bomb>

### [quadratic blowup entity expansion](https://bitbucket.org/PSF/defusedxml#id5)

A quadratic blowup attack is similar to a [Billion Laughs](http://en.wikipedia.org/wiki/Billion_laughs) attack; it abuses entity expansion, too. Instead of nested entities it repeats one large entity with a couple of ten thousand chars over and over again. The attack isn't as efficient as the exponential case but it avoids triggering countermeasures of parsers against heavily nested entities. Some parsers limit the depth and breadth of a single entity but not the total amount of expanded text throughout an entire XML document. A medium-sized XML document with a couple of hundred kilobytes can require a couple of hundred MB to several GB of memory. When the attack is combined with some level of nested expansion an attacker is able to achieve a higher ratio of success.

<!DOCTYPE bomb \[
<!ENTITY a "xxxxxxx... a couple of ten thousand chars">
\]>
<bomb>&a;&a;&a;... repeat</bomb>

### [external entity expansion (remote)](https://bitbucket.org/PSF/defusedxml#id6)

Entity declarations can contain more than just text for replacement. They can also point to external resources by public identifiers or system identifiers. System identifiers are standard URIs. When the URI is a URL (e.g. a http:// locator) some parsers download the resource from the remote location and embed them into the XML document verbatim. Simple example of a parsed external entity:

<!DOCTYPE external \[
<!ENTITY ee SYSTEM "http://www.python.org/some.xml">
\]>
<root>&ee;</root>

The case of parsed external entities works only for valid XML content. The XML standard also supports unparsed external entities with a NData declaration. External entity expansion opens the door to plenty of exploits. An attacker can abuse a vulnerable XML library and application to rebound and forward network requests with the IP address of the server. It highly depends on the parser and the application what kind of exploit is possible. For example:

-   An attacker can circumvent firewalls and gain access to restricted resources as all the requests are made from an internal and trustworthy IP address, not from the outside.
-   An attacker can abuse a service to attack, spy on or DoS your servers but also third party services. The attack is disguised with the IP address of the server and the attacker is able to utilize the high bandwidth of a big machine.
-   An attacker can exhaust additional resources on the machine, e.g. with requests to a service that doesn't respond or responds with very large files.
-   An attacker may gain knowledge, when, how often and from which IP address a XML document is accessed.
-   An attacker could send mail from inside your network if the URL handler supports smtp:// URIs.

### [external entity expansion (local file)](https://bitbucket.org/PSF/defusedxml#id7)

External entities with references to local files are a sub-case of external entity expansion. It's listed as an extra attack because it deserves extra attention. Some XML libraries such as lxml disable network access by default but still allow entity expansion with local file access by default. Local files are either referenced with a file:// URL or by a file path (either relative or absolute). An attacker may be able to access and download all files that can be read by the application process. This may include critical configuration files, too.

<!DOCTYPE external \[
<!ENTITY ee SYSTEM "file:///PATH/TO/simple.xml">
\]>
<root>&ee;</root>

## [Python XML Libraries](https://bitbucket.org/PSF/defusedxml#id9)

vulnerabilities and features
| kind | sax | etree | minidom | pulldom | xmlrpc |
| --- | --- | --- | --- | --- | --- |
| billion laughs | **True** | **True** | **True** | **True** | **True** |
| quadratic blowup | **True** | **True** | **True** | **True** | **True** |
| external entity expansion (remote) | **True** | False (3) | False (4) | **True** | untested |
| external entity expansion (local file) | **True** | False (3) | False (4) | **True** | untested |
| DTD retrieval | **True** | False | False | **True** | untested |
| gzip bomb | False | False | False | False | **True** |
| xpath support (7) | False | False | False | False | False |
| xsl(t) support (7) | False | False | False | False | False |
| xinclude support (7) | False | **True** (6) | False | False | False |
| C library | expat | expat | expat | expat | expat |

1.  Lxml is protected against billion laughs attacks and doesn't do network lookups by default.
2.  libxml2 and lxml are not directly vulnerable to gzip decompression bombs but they don't protect you against them either.
3.  xml.etree doesn't expand entities and raises a ParserError when an entity occurs.
4.  minidom doesn't expand entities and simply returns the unexpanded entity verbatim.
5.  genshi.input of genshi 0.6 doesn't support entity expansion and raises a ParserError when an entity occurs.
6.  Library has (limited) XInclude support but requires an additional step to process inclusion.
7.  These are features but they may introduce exploitable holes

  

## [How to avoid XML vulnerabilities](https://bitbucket.org/PSF/defusedxml#id24)

### [Best practices](https://bitbucket.org/PSF/defusedxml#id25)

-   Don't allow DTDs
-   Don't expand entities
-   Don't resolve externals
-   Limit parse depth
-   Limit total input size
-   Limit parse time
-   Favor a SAX or iterparse-like parser for potential large data
-   Validate and properly quote arguments to XSL transformations and XPath queries
-   Don't use XPath expression from untrusted sources
-   Don't apply XSL transformations that come untrusted sources

(based on Brad Hill's [Attacking XML Security](https://www.isecpartners.com/media/12976/iSEC-HILL-Attacking-XML-Security-bh07.pdf))

## [Related CVEs](https://bitbucket.org/PSF/defusedxml#id35)

CVE-2013-1664

Unrestricted entity expansion induces DoS vulnerabilities in Python XML libraries (XML bomb)

CVE-2013-1665

External entity expansion in Python XML libraries inflicts potential security flaws and DoS vulnerabilities

## [Acknowledgements](https://bitbucket.org/PSF/defusedxml#id46)

Brett Cannon (Python Core developer)

review and code cleanup

Antoine Pitrou (Python Core developer)

code review

Aaron Patterson, Ben Murphy and Michael Koziarski (Ruby community)

Many thanks to Aaron, Ben and Michael from the Ruby community for their report and assistance.

Thierry Carrez (OpenStack)

Many thanks to Thierry for his report to the Python Security Response Team on behalf of the OpenStack security team.

Carl Meyer (Django)

Many thanks to Carl for his report to PSRT on behalf of the Django security team.

Daniel Veillard (libxml2)

Many thanks to Daniel for his insight and assistance with libxml2.

semantics GmbH ([http://www.semantics.de/](http://www.semantics.de/))

Many thanks to my employer semantics for letting me work on the issue during working hours as part of semantics's open source initiative.
