ipybus
===============================

A widget to communicate with the backend

See below example: ipybus_var front-end can set the hw.value in the backend

Usage
-----

```IPython
[1] import ipybus                               # the communication widget
[2] import ipywidgets as widgets                # the regular widgets
[3] hw = ipybus.IPYBUS()                          # instanciate ipybus
    hw.variable = 'ipybus_var'                  # the name of the front-end variable
[4] output = widgets.Output()                   # to catch hw changes
    def hw_change(value):                       # the change callback
        with output:
            print(value)
    hw.observe(hw_change,names='value')         # wiring the callback
    output                                      # see it there
[5] hw                                          # see the value there
[6] %%javascript
    function changeIt(variable){                // function in the front-end
        variable.set('value',"Nice to have");   // which change the value
        variable.save();
    }
    setTimeout(changeIt, 2000, ipybus_var)      // wait 2 secondes to see the change   
```

Installation
------------

To install use pip:

    $ pip install ipybus
    $ pip jupyter lab build (this require a lot of memory)

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
