ipybus
===============================

A widget to communicate with the backend

Installation
------------

To install use pip:

    $ pip install ipybus

For a development installation (requires [Node.js](https://nodejs.org) and [Yarn version 1](https://classic.yarnpkg.com/)),

    $ git clone https://github.com/gbrault/ipybus.git
    $ cd ipybus
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --overwrite --sys-prefix ipybus
    $ jupyter nbextension enable --py --sys-prefix ipybus

When actively developing your extension for JupyterLab, run the command:

    $ jupyter labextension develop --overwrite ipybus

Then you need to rebuild the JS when you make a code change:

    $ cd js
    $ yarn run build

You then need to refresh the JupyterLab page when your javascript changes.
