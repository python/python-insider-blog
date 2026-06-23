---
title: Mitigated API authentication bypass for python.org download metadata
publishDate: '2026-06-23'
author: Seth Larson
description: 'Vulnerability mitigated in python.org with follow-up third-party audit from Trail of Bits'
tags:
  - security
published: true
---

## Summary

On February 23rd 2026, Splitline Ng from the DEVCORE Research Team reported to the [Python Security Response Team](https://devguide.python.org/security/psrt/) (PSRT) an authentication bypass vulnerability in the [python.org](https://python.org) release management API. By supplying an admin username with an arbitrary API key the request was processed with admin privileges.

If exploited, this would have allowed an attacker to modify Python release and file metadata that affects what URLs users are offered when visiting [python.org/downloads](https://python.org/downloads). While it would not enable existing release files to be modified in-place, it would enable an attacker to modify the URLs that are provided on [python.org](https://python.org) for each release file, including verification material URLs. There is no evidence this vulnerability was exploited after auditing logs and database backups. This scenario is even more unlikely to have happened unnoticed due to the many redistributions requiring Python Sigstore and PGP materials be verified prior to builds.

## Details

PSRT confirmed the vulnerability on a local instance of python.org. [Seth Larson](https://github.com/sethmlarson) and [Hugo van Kemenade](https://hugovk.dev/) developed and deployed [the patch](https://github.com/python/pythondotorg/pull/2946) to production with help from [Jacob Coffee](https://github.com/jacobcoffee). Less than 48 hours after the initial report the PSRT and the reporter confirmed that the proof-of-concept provided by the reporter no longer worked locally or on the production deployment.

This vulnerability was likely never exploited, however due to the age of the vulnerability ([existing in the codebase since 2014](https://github.com/python/pythondotorg/commit/0be429f0213cc735084a81d9b5d2dcf56467849b#diff-79d93d354534ebbcabe21fac3845315a8efe1fa0350576810962b3cc50fa3f5cR12-R14)) we don’t have absolute certainty beyond our logs and database backups. We believe attempts to exploit this vulnerability would have been “loud” and discovered quickly given the number of downstream tools and distributions automatically verifying the Sigstore and PGP materials.

We confirmed that all artifacts on python.org had not been modified by verifying Sigstore and PGP materials. Our own workflow verifying all Sigstore signatures did not signal any changes to artifacts from years prior. While verifying PGP materials we were able to verify all signatures where keys are still readily accessible from Python 2.5 to 3.13. Note that Python 3.14 and onwards [no longer provide PGP materials](https://peps.python.org/pep-0761/), so these were verified with Sigstore.

The codebase was manually audited and additional hardening was applied. In addition to manual auditing, LLM auditing tools were unable to find additional issues with authentication. The delay between the initial finding and publishing of this final report was to give ample time for auditing for other issues related to authentication, to receive access to LLM auditing tools, and to complete a [third-party audit from Trail of Bits](https://blog.trailofbits.com/2026/06/22/introducing-patch-the-planet/) prior to publication of this report.

## Remediations

* Patch applied and deployed to ensure that behavior is not mixed between the “guest” authentication mode and API key authentication. This fixes the issue and documents clearly the branch in behavior between the two cases. ([python/pythondotorg#2946](https://github.com/python/pythondotorg/pull/2946)). Trail of Bits audit improved this functionality to require HTTPS URLs for newer releases ([python/pythondotorg#3014](https://github.com/python/pythondotorg/pull/3014)) through a custom field validator.
* Added test cases for all negative authentication branches.
* Database and API now rejects URLs which do not start with “`https://www.python.org/`”. This additional hardening will reject attacker-controlled URLs even if authentication or authorization is circumvented. ([python/pythondotorg#2947](https://github.com/python/pythondotorg/pull/2947))
* Increased logging retention from 3 days to 30 days for requests to python.org. This will aid in audit work for any follow-up reports.

## Timeline

* February 23rd: Report received from DEVCORE Research Team
* February 23rd: Report acknowledged and confirmed by PSRT
* February 24th: Patch reviewed and applied to python.org
* February 24th: Patch confirmed working by DEVCORE Research Team
* February 25th: Audit of logs, database backups, Sigstore and PGP completed, showing no exploitation. Codebase was manually audited by staff.
* April 23rd: LLM security auditing tools were applied to the codebase, finding no issues related to authentication or authorization.
* June 1st: Trail of Bits began audit of python.org and Python release process.
* June 23rd: This final report is published.

## Acknowledgements

Thanks to Splitline Ng from the DEVCORE Research Team for responsibly disclosing this vulnerability and confirming the remediation.

Funding for the follow-up third-party audit was provided by [OpenAI](https://openai.com/). The [audit and mitigations](https://blog.trailofbits.com/2026/06/22/introducing-patch-the-planet/) were completed by [Trail of Bits](https://trailofbits.com/), with special thanks to Facundo Tuesca and Eric Quintero. Audit results and mitigations were reviewed and applied by Seth Larson. Seth Larson's role as [Security Developer-in-Residence](https://www.python.org/psf/developersinresidence/) at the Python Software Foundation is supported by [Alpha-Omega](https://alpha-omega.dev).

If your organization wants to support security at the Python Software Foundation through the [Developers-in-Residence program](https://www.python.org/psf/developersinresidence/) please reach out to [sponsors@python.org](mailto:sponsors@python.org).
