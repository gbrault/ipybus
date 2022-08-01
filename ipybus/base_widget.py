import ipywidgets as widgets
from traitlets import Unicode, Int

# See js/lib/IPYBUS_widget.js for the frontend counterpart to this file.

@widgets.register
class IPYBUS(widgets.DOMWidget):
    """An IPYBUS_widget widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('IPYBUSView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('IPYBUSModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('ipybus').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('ipybus').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.2').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.2').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    value = Unicode('IPYBUS').tag(sync=True)

    variable = Unicode('ipybus_var').tag(sync=True)

    count =  Int().tag(sync=True)
