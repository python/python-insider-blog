---
title: 'Developer-in-Residence Update & Future (Python Language Summit 2026)'
publishDate: '2026-09-30T12:00:07Z'
author: Seth Larson
description: 'Petr Viktorin gives an update on the Developer-in-Residence role and asks Python core developers for projects to prioritize'
tags: [language-summit, language-summit-2026]
published: true
---

The first three [Python Developers-in-Residence](https://www.python.org/psf/developersinresidence/) are Łukasz Langa, Petr Viktorin, and Serhiy Storchaka. Now that Developer-in-Residence Łukasz is [moving on from the role after five years](https://pyfound.blogspot.com/2026/04/reflecting-on-five-years-as-psfs-first.html), the now-“ironically named” *Deputy* Developer-in-Residence Petr came to the Language Summit to give an update on the role and ask core developers what’s next.

![GitHub profile pictures for Łukasz, Petr, and Serhiy with Łukasz departing](image.png)

Petr started the discussion by listing the responsibilities in his contract:

* Keeping the core development workflow operational to ensure core developers and collaborators are not blocked from contribution.
* Improving tools and workflows, which are part of the core development experience, to enable a smoother contribution process.
* Code review of a subset of incoming changes to CPython to help collaborators receive timely communications on their changes.
* Authoring own changes to CPython to help clean the issue and PR backlog.
* Responding to requests for assistance from core developers in a timely manner.
* Regularly reporting on this work to the Steering Council and the wider community.
* Additional responsibilities as directed.

Referencing the explicit “Responding to requests for assistance from core developers”, Petr noted that there “haven’t been that many requests for assistance” recently, so he wanted to ask core developers to communicate what they might want done, either at the Language Summit or later.

Petr continued with an update on what he’d accomplished from 2024 to 2026, including maintaining [buildbots](https://devguide.python.org/testing/buildbots/), mentoring multiple people into becoming triagers or core developers, working on the [Stable ABI](https://docs.python.org/3/c-api/stable.html) for [free-threaded Python](https://docs.python.org/3/howto/free-threading-python.html), working on security vulnerability fixes, and managing CPython sprints at conferences. He compared this work to what Łukasz had accomplished in his five years of tenure, which included more “large-scale project management”, organizing events like the Language Summit, talking to sponsors, and overseeing the other Python Developers-in-Residence.

Petr summarized his approach to the role as focusing on “important tasks, but leaving fun and glamorous ones to volunteers”. He also noted collaborating with people in other “Developer-in-Residence”-like roles, such as Hugo van Kemenade and Stan Ulbrych, who are Sovereign Tech Agency fellows focusing on CPython. Petr opened the floor for discussion by asking what challenges core developers would like the Developers-in-Residence to focus on.

## Discussion

“Thank you for doing all the boring stuff”, Ken Jin opened, appreciating Petr taking on grunt work that enables other core developers, and sharing that if he had to do this work as a volunteer he “would have quit a long time ago”.

“You don’t have to do everything Łukasz did”, Thomas Wouters assured Petr, “we’re hiring a replacement for Łukasz and will sort out what that means for the team”, reminding everyone that the Steering Council members are all volunteers themselves, that managing multiple full-time employees is difficult, and that hiring takes time.

Former Developer-in-Residence Łukasz Langa chimed in with a problem he and other core developers had noticed: the large volume of (likely) LLM-generated pull requests being submitted to CPython. One of Łukasz’s early goals for CPython [when he joined as Developer-in-Residence](https://lukasz.langa.pl/a072a74b-19d7-41ff-a294-e6b1319fdb6e/) was “addressing the PR backlog”, which was successful for some time, but that progress has now completely reversed with LLMs. Łukasz suggested either triaging these PRs somehow, noting he wasn’t sure “how many full-time jobs that task is”, or coming up with “some systematic solution”.
Petr confirmed triaging every LLM pull request wasn’t something he wanted to do, but he was “hired to also do tasks he didn’t want to do”.

There was some discussion between Stefan Behnel and Mark Shannon about ensuring some amount of review “before a human looks at a pull request”, such as having an LLM provide a first pass on a pull request. Savannah Ostrowski was hesitant to engage with drive-by LLM contributions: “I’m not willing to give away my time because it won’t change their behavior”. She suggested that other core developers “nope out” if they didn’t want to engage.

Mark Shannon recommended everyone [watch Pablo Galindo Salgado’s keynote on this topic](https://www.youtube.com/watch?v=e8uozuvRf7g).
There is also a Language Summit Lightning Talk by Gregory P. Smith about attempting to
steer or improve these contributions [using `AGENTS.md`](/2026/09/language-summit-2026-lightning-talks#agentsmd-for-cpython).
