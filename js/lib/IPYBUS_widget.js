var widgets = require('@jupyter-widgets/IPYBUS');
var _ = require('lodash');

// See IPYBUS_widget.py for the kernel counterpart to this file.


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
//  when different from the IPYBUS class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
debugger;
var IPYBUSModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'IPYBUSModel',
        _view_name : 'IPYBUSView',
        _model_module : 'ipybus',
        _view_module : 'ipybus',
        _model_module_version : '0.1.3',
        _view_module_version : '0.1.3',
        value : 'IPYBUS',
        variable: 'ipybus_var'
    })
});


// Custom View. Renders the widget model.
var IPYBUSView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        variable = this.model.get('variable');
        window[variable]=this.model;
        this.value_changed();

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
        this.model.on('change:value', this.value_changed, this);
        this.update(); // Set defaults.
    },

    value_changed: function() {
        var count = this.model.get('count');
        count ++;
        this.model.set('count',count);
        // avoid output change
        // this.el.textContent = "message("+count+") length="+(this.model.get('value')).length;
    }
});


module.exports = {
    IPYBUSModel: IPYBUSModel,
    IPYBUSView: IPYBUSView
};
