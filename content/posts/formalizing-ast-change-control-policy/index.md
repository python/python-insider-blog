---
title: Formalizing the AST Change Control Policy
publishDate: '2011-04-06'
updatedDate: '2011-04-06'
author: Paul Moore
description: Python exposes an abstract syntax tree (AST) representing the compiled form of Python source code in the AST module. The AST module allows user code to inspe...
tags: []
published: true
legacyUrl: /2011/04/formalizing-ast-change-control-policy.html
---

Python exposes an abstract syntax tree (AST) representing the compiled form of Python source code in the [AST module](http://docs.python.org/py3k/library/ast.html). The AST module allows user code to inspect and manipulate of the AST representation, in between parsing of source and compilation of bytecode.

Although the meaning of Python code is defined by the [language reference](http://docs.python.org/py3k/reference/index.html), the AST module is a CPython implementation detail, and is not required to be implemented in other Python implementations.

#### Compatibility of the AST

As part of [work](http://bugs.python.org/issue11549) to rewrite the CPython peephole optimizer to work on the AST (rather than on the raw bytecode, as is currently the case), Eugene Toder needed to make some changes to the structure of the AST. As a CPython implementation detail, it wasn't immediately clear what backward compatibility policies applied to the AST. So, Eugene [asked the question](http://mail.python.org/pipermail/python-dev/2011-April/110399.html) on python-dev. Was it necessary, when changing the AST, to ensure backward compatibility?

The general consensus was that compatibility is *not* required. The AST module exposes a constant, ast.\_\_version\_\_, which provides a means for user code to vary its behaviour depending on the version of the AST it encounters. This was viewed as sufficient compatibility for an implementation-specific module.

#### Other Python Implementations

In actual fact, both Jython and IronPython maintainers pointed out that their respective implementations either had a compatible AST module, or intended to provide one. Even so, they did not feel that this meant that the AST should be frozen, and were happy that as long as the ast.\_\_version\_\_ constant changed, the AST could be modified in incompatible ways.

One point that was raised is that a full suite of tests in test\_ast.py would help other implementations to ensure that their AST representations were compatible with CPython. Increasing the coverage of test\_ast.py would make a good project for someone who wanted to get involved with Python internals!

#### What Will Happen Next?

The [patch](http://bugs.python.org/issue11549) which started the discussion is not yet included in CPython. So possibly, nothing will happen. However, if it does get committed, the AST *will* change in an incompatible way. The ast.\_\_version\_\_ constant will change to reflect this, so user code will know, but changes will be needed. More generally, this will be the way AST changes will be handled in future.

The Python developers are interested in how widely the AST is used, and how much impact this policy will have. If any readers have code that will be affected by the change, they are encouraged to participate in the [discussion on python-dev](http://mail.python.org/pipermail/python-dev/2011-April/110399.html).
