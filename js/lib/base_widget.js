var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

// See base_widget.py for the kernel counterpart to this file.


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
debugger;
var BaseModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'BaseModel',
        _view_name : 'BaseView',
        _model_module : 'ipybus',
        _view_module : 'ipybus',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Base',
        variable: 'ipybus_var'
    })
});


// Custom View. Renders the widget model.
var BaseView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        this.value_changed();

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        this.model.on('change:value', this.value_changed, this);
        this.update(); // Set defaults.
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
        variable = this.model.get('variable');
        window[variable]=this.model;
    }
});


module.exports = {
    BaseModel: BaseModel,
    BaseView: BaseView
};
