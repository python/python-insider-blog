---
title: Deprecations between Python 2.7 and 3.x
publishDate: '2011-03-28'
updatedDate: '2011-03-28'
author: Paul Moore
description: 'Recent discussion on python-dev highlighted an issue with Python''s current deprecation policy facing developers moving from Python 2.7 to current versions of...'
tags: []
published: true
legacyUrl: /2011/03/recent-discussion-on-python-dev.html
---

Recent [discussion on python-dev](http://mail.python.org/pipermail/python-dev/2011-March/109010.html) highlighted an issue with Python's current deprecation policy facing developers moving from Python 2.7 to current versions of Python 3.x. As a result of this issue, the development team has modified the current deprecation policy to take into account the fact that Python users will normally migrate directly from Python 2.7 to the latest version of 3.x without ever seeing older versions.

#### Background

Python has a strong commitment to backward compatibility. No change is allowed unless it conforms to compatibility guidelines, which in essence say that correct programs should not be broken by new versions of Python. However, this is not always possible, e.g., where an API is clearly broken and needs to be replaced by something else. In this case, Python follows a deprecation policy based on a one-year transition period where features to be removed are formally deprecated. In the intermediate period, a deprecation warning must be issued to allow developers time to update their code. Full details of Python's deprecation policy are documented in [PEP 5](http://www.python.org/dev/peps/pep-0005/). As changes are only made in new Python releases, and there is normally an 18 month gap between releases, this means that a one-release deprecation period is the norm.

The one exception to this policy was Python 3. The major version change from Python 2 to Python 3 was specifically intended to allow changes which broke backward compatibility, to allow the Python developers the chance to correct issues which simply couldn't be fixed within the existing policy. For example, making strings Unicode by default, and returning iterators instead of lists.

#### Parallel Lines of Development

Knowing the transition to Python 3 would take time, 5 years by many estimates, there was going to be some amount of parallel development on 2 and 3.

With Python 2.7 being the final release of Python 2, it was agreed upon that the maintenance period would be extended for a substantial period. In the end, developers who want to move to a newer version of Python will need to make the jump to Python 3.

Here lies one the problems...

#### Surprise deprecations

In [a thread on python-dev](http://mail.python.org/pipermail/python-dev/2011-March/109010.html), a poster pointed out that one specific function in the C API, PyCObject\_AsVoidPtr, was removed with what appeared to be insufficient warning. And yet, this is what the deprecation policy was supposed to protect against! What happened?

The change was part of a larger migration from an older API (PyCObject) to a newer, improved one (PyCapsule). The problem is that PyCObject is the default, and indeed, only API available in Python 2.6. It went on to be deprecated in Python 2.7. In Python 3.2, that API doesn't exist and the new PyCapsule should be used. That gives a deprecation period from the release of Python 2.7 (July 2010) to the release of Python 3.2 (February 2011) - about 7 months. That is a lot less than the minimum 12 month period, and makes it difficult for developers to support a reasonable range of Python releases.

For someone moving from 3.0 to 3.1 then 3.2, the deprecation path is fine. Python 3.1 was released in March 2010 with the deprecation, and so in the 3.x release series, a deprecation period of almost 12 months was available. However, that's not what people really do: they go from 2.7 straight to the latest version of 3.x, in this case 3.2, resulting in this problem. This was never the intention of python-dev, but PEP 5 had not been written with parallel versions of Python, both of which were under active development, in mind.

#### So what do we do?

While the PyCObject/PyCapsule API break is a definite problem, it's not impossible to work around, but at least one poster on python-dev had some difficulties to deal with. Overall, this shouldn't have happened.

For the specific case of PyCObject/PyCapsule, the problem already exists and there is not much that can be done. Reinstating PyCObject was not really an option, as that would only add further incompatibilities. However, the general view was that it is possible, albeit tedious, to write code to adapt to whichever API is available. In fact, in Python 3.1, the PyCObject API was written as a wrapper over the PyCapsule API. There was a suggestion that should anyone need it, the Python 3.1 implementation could be extracted for use in 3rd party code. Additionally, it was agreed that a "retroactive" PEP covering the change would be written, to describe the reasons behind the change and document resources which can help developers migrate.

On a more general note, the Python development team is now aware of the problem and will work to avoid it reoccurring. Guido [posted a review](http://mail.python.org/pipermail/python-dev/2011-March/109450.html) of the situation and suggested that Python 3 should be conservative in the use of deprecations for the moment. At a minimum, deprecated APIs will be retained substantially longer before being removed, to give developers moving from 2.7 a migration path.

More indirectly, the thread raised the issue of how to more effectively communicate changes in Python to a wider audience, in a more timely manner - an issue that this blog was formed precisely to address.

#### What does all this mean?

First and foremost, it means that the Python developers don't always get everything right. Nobody meant to make life harder for developers, it just wasn't something that was spotted in time.

Secondly, fixing the problem can do more harm than good, so the PyCObject API is not being reinstated. While reinstatement might help developers who were bitten by the change, overall it would make compatibility issues more complex. In the meantime, we have to put up with the issue and move on. Lessons were learned, and we won't make the same mistake next time.

On thing this shows is that the Python development team wants to hear from the users. Compatibility is very important, and every effort is made to make the transition to new versions as painless as possible. In particular, library developers should be able to support multiple Python versions with a reasonable level of effort.

Finally, the developers haven't abandoned 2.7. While it won't be getting new features and there will be no 2.8, the views of people using 2.7 are still important. Making sure users can move to 3.x when they are ready is vital for the whole Python community.
