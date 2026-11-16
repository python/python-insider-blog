---
title: Python 3.15.1, 3.14.9 and 3.13.17 are out
publishDate: '2026-10-21'
author: Hugo van Kemenade
description: 'Three certified security releases for 3.15, 3.14 and 3.13.'
tags:
  - releases
published: true
---

Here are expedited security releases of Python 3.15 and 3.14, and a special security release of 3.13.

* [Python 3.15.1](https://www.python.org/downloads/release/python-3151/)
* [Python 3.14.9](https://www.python.org/downloads/release/python-3149/)
* [Python 3.13.17](https://www.python.org/downloads/release/python-31317/)

They all upgrade the bundled pip to version 26.2.2,
which includes certifi 2026.10.19 to address the [eMudhra / emSign CA certificate security incident](https://emudhra.we-have-a-problem.com/).

We don't normally update pip for security releases like Python 3.13 because of backward compatibility concerns, but since 3.13 only just entered security-only mode, doing a special release with *installers* seemed prudent.

See the [Discourse announcement](https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576) for more information.

For all existing virtual environments on your system, please upgrade pip and uv to the latest versions.

To upgrade pip securely within a virtualenv:

```sh
python -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
```

If you cannot immediately upgrade to this release, you can upgrade certificates for a Python 3.15 macOS installation and pip itself via:

```sh
/Library/Frameworks/Python.framework/Versions/3.15/bin/python3.15 -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
/Library/Frameworks/Python.framework/Versions/3.15/bin/python3.15 -m pip install --upgrade certifi
/Library/Frameworks/PythonT.framework/Versions/3.15/bin/python3.15t -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
```

For 3.14:

```sh
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3.14 -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
/Library/Frameworks/Python.framework/Versions/3.14/bin/python3.14 -m pip install --upgrade certifi
/Library/Frameworks/PythonT.framework/Versions/3.14/bin/python3.14t -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
```

For 3.13:

```sh
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3.13 -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
/Library/Frameworks/Python.framework/Versions/3.13/bin/python3.13 -m pip install --upgrade certifi
/Library/Frameworks/PythonT.framework/Versions/3.13/bin/python3.13t -m pip install "pip @ https://files.pythonhosted.org/packages/3f/06/3e4420302363fbb71be3c7f35ce042f54bfca330e3e66b3a2e3c4cca579f/pip-26.2.2-py3-none-any.whl#sha256=fd7f4dfa8190e014013b9f08f3e973f4e4c26ffd179a204895533a7254813a70"
```

## macOS 27.0 `IDLE` and `tkinter`

Additionally, the macOS installer for this release is built with a pre-release of Tk, fixing [a possible hang on macOS 27.0](https://github.com/python/cpython/issues/158053) in applications using `tkinter`, like `IDLE`, in older releases.


## Enjoy the new release

Thanks to all of the many volunteers who help make Python development and these releases possible! Please consider supporting our efforts by volunteering yourself or through organisation contributions to the [Python Software Foundation](https://www.python.org/psf-landing/).

Your certified release team,
<br>Hugo van Kemenade
<br>Thomas Wouters
<br>Ned Deily
<br>Steve Dower
