---
title: Join the Python Security Response Team!
publishDate: '2026-02-17'
author: Seth Larson
description: 'The Python Security Response Team now has an approved public governance document (PEP 811) and is welcoming new members.'
tags:
  - security
  - psrt
published: true
---

Thanks to the work of the Security Developer-in-Residence Seth Larson, the Python Security Response Team (PSRT) now has an approved public governance document ([PEP 811](https://peps.python.org/pep-0811/)). Following the new governance structure the PSRT now publishes a [public list of members](https://www.python.org/psf/records/board/psrt/), has documented responsibilities for members and admins, and a defined process for onboarding and offboarding members to balance the needs of security and sustainability. The document also clarifies the relationship between the Python Steering Council and the PSRT.

And this new onboarding process is already working! The PSF Infrastructure Engineer, [Jacob Coffee](https://github.com/JacobCoffee), has just joined the PSRT as the first new non-"Release Manager" member since Seth joined the PSRT in 2023. We expect new members to join further bolstering the sustainability of security work for the Python programming language.

Thanks to [Alpha-Omega](https://alpha-omega.dev/) for their support of Python ecosystem security by sponsoring Seth's work as the Security Developer-in-Residence at the Python Software Foundation.

## What is the Python Security Response Team?

Security doesn't happen by accident: it's thanks to the work of volunteers and paid Python Software Foundation staff on the Python Security Response Team to triage and coordinate vulnerability reports and remediations keeping all Python users safe. Just last year the PSRT published 16 vulnerability advisories for CPython and pip, the most in a single year to date!

And the PSRT usually can't do this work alone, PSRT coordinators are encouraged to involve maintainers and experts on the projects and submodules. By involving the experts directly in the remediation process ensures fixes adhere to existing API conventions and threat-models, are maintainable long-term, and have minimal impact on existing use-cases.

Sometimes the PSRT even coordinates with other open source projects to avoid catching the Python ecosystem off-guard by publishing a vulnerability advisory that affects multiple other projects. The most recent example of this is [PyPI's ZIP archive differential attack mitigation](https://blog.pypi.org/posts/2025-01-02-zip-archive-differential-attack/).

This work deserves recognition and celebration just like contributions to source code and documentation. Seth and Jacob are developing further improvements to workflows involving "GitHub Security Advisories" to record the reporter, coordinator, and remediation developers and reviewers to CVE and OSV records to properly thank everyone involved in the otherwise private contribution to open source projects.

## How can I join the Python Security Response Team?

Maybe you've read all this and are interested in directly helping the Python programming language be more secure! The process is similar to the Core Team nomination process, you need an existing PSRT member to nominate you and for your nomination to receive at least ⅔ positive votes from existing PSRT members.

You do not need to be a core developer, team member, or triager to be a member of the Python Security Response Team. Anyone with security expertise that is known and highly-trusted within the Python community and has time to volunteer or donate through their employer would make a good candidate for the PSRT. Please note that all PSRT team members have documented responsibilities and are expected to contribute meaningfully to the remediation of vulnerabilities.

Being a member of the PSRT is not required to be notified of vulnerabilities and shouldn't be to receive "early notification" of vulnerabilities affecting CPython and pip. The Python Software Foundation is a [CVE Numbering Authority](https://www.cve.org/PartnerInformation/ListofPartners/partner/PSF) and publishes CVE and OSV records with up-to-date information about vulnerabilities affecting CPython and pip.
