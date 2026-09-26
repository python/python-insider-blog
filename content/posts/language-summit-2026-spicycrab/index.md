---
title: Spicycrab (Python Language Summit 2026)
publishDate: '2026-09-30'
updatedDate: '2026-09-30'
author: Seth Larson
description: 'Kushal Das shows off Spicycrab, a Python-to-Rust transpiler for Python users who need performance without learning Rust or leaving Python'
tags: [language-summit, language-summit-2026]
published: true
---

Kushal Das brought a project that fills a niche for Python users who hit a performance wall that can’t be solved by scaling horizontally, but who also don’t want to learn a new programming language. [Spicycrab](https://github.com/kushaldas/spicycrab/) is a Python-to-Rust transpiler named for Kushal’s love of spicy food. The demonstration showed compiling a simple Python script to Rust source code and then into an executable binary.

```commandline
$ crabpy transpile greet.py -o greet
```

This simple demo produces Rust source code at `greet/src/main.rs`, which can be run with `cargo run`.


## Who is this for?

After introducing the tool, Kushal shared more about who could benefit from a tool like Spicycrab.

Back when Kushal was working with Django, there would often be a moment where the web service could no longer scale on the single virtual machine that was allocated to the team. At that time in 2008, the only option was to learn to write [C extensions](https://docs.python.org/3/extending/index.html) for the “hot paths”, but this approach meant you weren’t writing Python and you had to contend with crashes and security issues from writing C.

Now that Rust is here, some of the challenges like security and crashing are addressed, but Rust’s “syntax breaks [his] brain” (although [PyO3](https://pyo3.rs/) helps). Kushal wanted to get more people taking advantage of Rust’s performance without needing to learn Rust.

Kushal shared that many smaller organizations he knows in this exact resource-constrained situation would move away from a programming language like Python towards a language like Go for web backends. Kushal wanted to provide a tool that offers easy performance without needing to leave Python behind. “I hope that Python can become that fast one day, but what can we do until then?”

Next, Kushal demonstrated [an async web service using actix-web](https://spicycrab.readthedocs.io/en/latest/actix_web.html), which includes [type annotations](https://docs.python.org/3/library/typing.html). This mechanism works by transpiling [actix-web](https://actix.rs/) and its dependencies to Python and then installing the resulting code as a Python package behind the scenes.

Kushal installed actix-web using [Cargo](https://doc.rust-lang.org/cargo/), with a few chuckles as 180 dependencies were downloaded and compiled, a callback to some concerns from the “Rust for CPython” project regarding third-party dependencies. After installation and transpiling completed, the following web server was built using Spicycrab:

```python
from spicycrab_actix_web import App, HttpServer, HttpResponse, get

async def hello() -> HttpResponse:
    return HttpResponse.Ok().body("Hello World!")

async def main() -> None:
    HttpServer.new(App.new().route("/", get().to(hello))).bind("127.0.0.1:8080").run()
```

After running the transpiler and compiling again, the resulting binary served the “Hello World!” response over HTTP.

## Discussion

Ken Jin asked why this approach would be chosen over [mypyc](https://mypyc.readthedocs.io/), Cython, or [SPy](https://github.com/spylang/spy). Kushal answered that
“SPy only supports a subset of Python” but admitted that “mypyc is good and in many cases that [mypyc] be used directly”. Kushal’s primary
motivation for going this route was to solve multiple problems at once, and one of the problems was getting
Python users to use Rust “without being scared of the syntax”.

Gregory P. Smith provided a “spicier” thought that was “existential for Python”. Greg imagined it becoming more commonplace for state-of-the-art large language models to rewrite code from one programming language to another, such as from Python to Rust for performance. Kushal noted that this solves the issue “one time”, but doesn’t answer how the code is maintained long-term, and that the cost of doing so would be prohibitive for many. As an example, the [rewrite of Bun from Zig to Rust cost $165,000 USD](https://bun.com/blog/bun-in-rust).
