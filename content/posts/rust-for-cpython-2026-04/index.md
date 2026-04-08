---
title: Rust for CPython Progress Update April 2026
publishDate: '2026-04-08'
author: Emma Smith
description: "Rust for CPython project status update April 2026"
tags:
  - Rust
published: true
---

> This post has also been shared on [discuss.python.org](https://discuss.python.org/t/rust-for-cpython-progress-update-april-2026/106895).

---

We (the Rust for CPython community) wanted to provide an update on where the project is and our current plans from now to a Python Enhancement Proposal (PEP) for introducing Rust into CPython.

## Recent work

Since the [pre-PEP thread](https://discuss.python.org/t/pre-pep-rust-for-cpython/104906), we’ve been working on making the reference implementation build system  more robust across the platforms CPython supports. We’re now successfully building CPython with Rust in our fork’s CI on all tested platforms.

We’ve also had a number of productive discussions with the Rust team, who have been incredibly generous to meet with us to discuss the needs of the CPython project and how best to address issues we face with integrating Rust with CPython. I’m incredibly grateful to everyone who has joined those meetings.

We’ve also had some discussions about the design of a Rust API for CPython. You can see [issues tagged api-design](https://github.com/Rust-for-CPython/cpython/issues?q=is%3Aissue%20state%3Aopen%20label%3Aapi-design) which cover the critical components of the API design. We’d love to get more input on designing the Rust API, so please see below about contributing if you are interested in working with us on the Rust API. As a reminder, this API will remain internal until a later PEP stabilizes it and makes it public.

## Roadmap to a PEP

Since the pre-PEP, we’ve decided that we will be targeting Python 3.16 rather than 3.15 as the first Python version to include Rust code. This gives us a year to make the reference implementation the best it can be and plenty of time for discussion of the PEP.

The below timeline is subject to change, but covers a rough plan of what and when we hope to accomplish things:

- March
  - Done! ~~Finish the build system work, ensuring platforms tested in CPython CI are green~~
- April
  - Start planning the internal Rust API design
  - Select a single extension module to have a Rust implementation in 3.16
- May
  - Finalize a plan for the internal Rust API design
  - Start implementing the internal Rust API
  - Sprint at PyConUS on the internal Rust API and the extension module
- June
  - Start writing the PEP
- July
  - Finalize the PEP draft
  - Submit the PEP and begin discussion

We recognize introducing Rust is a significant change, and expect the PEP discussion to be lengthy, so we want to make sure there is ample time to discuss it prior to [3.16 beta 1 in May 2027](https://peps.python.org/pep-0826/#schedule).

## Contributing

Interested in contributing to the Rust for CPython project? Please join [our Discord](https://discord.gg/2pw3YSDscP)! We have meetings every Monday at 12:00PM PDT to discuss the project. We’d love to have more folks join those meetings and work with us on Rust for CPython!
