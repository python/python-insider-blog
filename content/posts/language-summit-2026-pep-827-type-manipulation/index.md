---
title: 'PEP 827: Type Manipulation (Python Language Summit 2026)'
publishDate: '2026-09-30T12:00:09Z'
author: Seth Larson
description: 'Michael J. Sullivan presents PEP 827 and discusses a key design decision: how to store type annotations?'
tags: [language-summit, language-summit-2026]
published: true
---

Michael J. Sullivan came to the Language Summit to discuss [PEP 827](https://peps.python.org/pep-0827/), a PEP that includes many proposed improvements to Python type annotations. For the Python Language Summit, Michael wanted to focus in particular on one aspect: how type annotations are stored.

Michael began by introducing PEP 827 “by looking at a completely different programming language”. He brought up an example from [Prisma](https://github.com/prisma/orm), an object-relational mapper (ORM) library written in [TypeScript](https://www.typescriptlang.org/docs/). Calling
`findMany` on a `User` model infers a return type based on the input parameters’ values, such as when selecting a subset of fields:

```ts
const user = await prisma.user.findMany({
  select: {
    name: true,
    email: true,
    posts: true,
  },
});
```

This query derives a type that looks like this in TypeScript:

```ts
{
  email: string;
  name: string | null;
  posts: {
    id: number;
    title: string;
    content: string | null;
    authorId: number | null;
  }[];
}[]
```

With PEP 827, Python’s type annotations could work similarly. Return types
could be inferred from a function’s input parameter types.

Another use-case PEP 827 serves is generating new types programmatically, such as for CRUD (Create, Read, Update, Delete) web applications, where a single database table typically has a separate ORM model definition for each CRUD operation. Create would require all properties without defaults, Read would include all the public properties of a model, and Update would make all properties optional (supporting the `PATCH` HTTP method). Delete doesn’t typically need a model, as only the primary key is needed to delete a record.

The example given in PEP 827 uses a `Hero` model, which has a `secret_name` and an optional `age` parameter, and creates three other models for the “public get”, create, and update operations:

```python
class HeroBase(SQLModel):
    name: str = Field(index=True)
    age: int | None = Field(default=None, index=True)

class Hero(HeroBase, table=True):
    id: int | None = Field(default=None, primary_key=True)
    secret_name: str

class HeroPublic(HeroBase):
    id: int

class HeroCreate(HeroBase):
    secret_name: str

class HeroUpdate(HeroBase):
    name: str | None = None
    age: int | None = None
    secret_name: str | None = None
```

Keeping all of these models and parameters up-to-date with the database model requires lots of diligence and can’t usually be done programmatically. So what if there was a way to instead contain the complexity within a type that transforms the overall model type for each of the CRUD operations? PEP 827 would allow writing Python types like the example below, containing the complexity in the `Public`, `Create`, and `Update` annotations:

```python
class Hero(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    age: int | None = Field(default=None, index=True)
    secret_name: str = Field(hidden=True)

type HeroPublic = Public[Hero]
type HeroCreate = Create[Hero]
type HeroUpdate = Update[Hero]
```

## Type manipulation primitives in PEP 827

The core of the idea is introducing a handful of primitives to Python’s type system:

* Conditional types (`true_type if bool_type else false_type`).
* Comprehension types (`*[t for t in Iter[iter_t]]`). Comprehension types can have conditional `if` clauses, just like regular comprehensions.
* Member types (`typing.Members[t]` would return an iterable of the type’s members). `member.name` and `member.type` would be properties of the member.

The PEP was “inspired by TypeScript, but importantly [the PEP] is not modeled after TypeScript”. Michael noted that Python and JavaScript are “very different languages”, so the system ended up looking “quite a bit different”. The PEP was also designed so that no new keywords would be required to adopt it.

PEP 827 contains many other proposed features that Michael didn’t have time to cover, including new operators, callable special construction, tuple slicing and length, iterating over unions, getting types of an attribute, inspecting initializers, and ways to handle `__init_subclass__` decorators. The PEP contains a [mypy-based prototype](https://github.com/msullivan/mypy-typemap/tree/typemap) for all the features being proposed.

## How to store type annotations?

Having introduced the PEP, Michael then returned to his original motivation: discussing how to store type annotations for runtime use. Popular libraries like [Pydantic](https://docs.pydantic.dev/) and [FastAPI](https://fastapi.tiangolo.com/) use type annotations at runtime to drive their behavior. “This was complicated by our desire to use Python-y syntax”, like `if`, `for`, and dot notation.
In concrete terms, Python will itself *evaluate* the types at runtime. In order to implement everything in PEP 827, there would need to be a way to access the *unevaluated* type even after Python had
executed the conditionals or iterations. As currently drafted, “the PEP is carefully designed to support an evaluator that works by calling the [`__annotate__()`](https://docs.python.org/3/reference/datamodel.html#object.__annotate__) functions”.

There’s already a module, `annotationlib`, which has a “string format” ([`Format.STRING`](https://docs.python.org/3/library/annotationlib.html#annotationlib.Format.STRING)). In theory, if you call `annotationlib.get_annotations(..., format=Format.STRING)`, then you’d get the type annotation back unevaluated. “But this isn’t how this function is implemented today”; instead, the function does “dreadfully clever stuff” using proxy objects that overload every dunder method.

Imogen has [drafted a PEP proposing a new “AST” format](https://discuss.python.org/t/draft-pep-more-expressive-type-expressions/108856) that is related to this problem, but Michael thought it would be smaller and more straightforward to make the `STRING` format work with conditional expressions. “There’s a surprisingly large design space here with trade-offs between time, space, and complexity”.

One of the original ideas considered by the PEP that moved to `__annotate__()` functions was “can we just store the strings?” The most straightforward option would be for `__annotate__()` to support `STRING` in addition to `VALUE` and `VALUE_WITH_FAKE_GLOBALS`. The `__annotate__()` function would get a little bigger, but if `STRING` is passed as the format, it would return the strings “instead of requiring the library to do something complicated to get there”.

This approach is fast, but uses more memory by representing annotations redundantly. The team considered whether to do the “even more obvious thing” and evaluated storing *only the strings*. But this isn’t enough; type annotations can refer to local variables, so evaluating them requires more context. “This is the whole reason we moved away from `from __future__ import annotations` ([PEP 563](https://peps.python.org/pep-0563/)), did [PEP 649](https://peps.python.org/pep-0649/), and added complexity to generating `__annotate__` functions”.

Michael detailed a proposed alternate approach that saves memory at the expense of computation speed: “If we have the string for a type annotation, and we have the environment closure for `__annotate__`, then we can `eval()` the string in that closure and it will work. What would that look like?
Generate an `__annotate__` function that only implements the format for `STRING`, but is set up to only contain the free variables that the annotation used. If the type annotation refers to local
variables, the annotation will still depend on [the variables], [the type annotation] wouldn’t directly do anything with [the variables]. [The type annotation] would just build the dictionary with the strings.
We’d have a function in `annotationlib` that knows
how to pull [the variables] out, combine that with the strings, and evaluate them [both] properly. We could make `__annotate__()` call that [annotationlib] function when you ask for an evaluated type annotation”.
This approach would use a lot less memory than using strings, but would be much slower because you’d need to use [`eval()`](https://docs.python.org/3/library/functions.html#eval).

## Discussion

Stefan Behnel asked whether accepting PEP 827 would make the type system Turing-complete with the proposed conditionals and comprehensions. Michael replied that the Python type system “is already Turing-complete, but only *accidentally* Turing-complete”. Java had run into this issue with generics with subtyping bounds, and “Python does the same Generic stuff as Java”. “There was never an intention for the type system to be Turing-complete”, therefore accepting PEP 827 would only change the type system to be “intentionally Turing-complete”.

Łukasz Langa commented on the aesthetics of the proposed syntax, pointing out the example of the comprehensions with “stars”. He cautioned core developers against seeing this syntax and having a knee-jerk negative reaction, such as thinking: “Oh [f-string], they’re going to make type hints look even worse”. Łukasz was clear that “...these features are for [frameworks] to implement internally [features] that allow type checkers to magically generate the correct types”. “Users are not meant to write types like these or only use them very rarely”.

Łukasz also commented on the performance of using strings: when he first wrote `from __future__ import annotations`, one of the motivations was that strings are “[interned](https://docs.python.org/3/library/sys.html#sys.intern)”. Using string interning for types would take “less memory”. The problem was that the alphabet for interning strings doesn’t allow for square brackets (`[]`), which are used often in Python type annotations. There was a question whether this could be changed in Python, to which Łukasz replied that “we could, but then we ruin Python for everybody else” because this behavior has been “relied on for over 30 years”. “However…”, Łukasz continued, “what if `__annotate__()` interned [strings] all the time?” We expect many type annotations to be the same or similar, like `None`, `str`, and `str | None`. Łukasz suggested that this method “wouldn’t cost much memory”, which Michael agreed with.

David Hewitt shared his experience working with TypeScript, where there are very complicated types. “When you’re a TypeScript user and you’re trying to figure out an API, you start clicking down through the API layers”, and you often hit the issue (“as Łukasz described”, with an accompanying “oh [f-string]”). David was concerned about whether this new syntax would be something that users would encounter frequently.

Michael confessed that users clicking into “the select method” on an ORM would “see a wild type” and “there’s no getting around that”. “...but hopefully they’ll see the docstring first. If they look at the return type they’ll see something nice”. “I think there are cases where you’re doing `select(User)` you might be able to populate specific properties”, but this would be “potentially finicky” and dependent on the language server being used.

“There will be moments where users discover that the world is complex”, Yury Selivanov said, acknowledging the need for complex type annotations. “Right now the world is not typed”. “The Python type system does not match the expressiveness of the language”. “Certainly some people might be confused”, he added, listing a few ways to mitigate this issue, such as better IDEs, language servers, and documentation.
