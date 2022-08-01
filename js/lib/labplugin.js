var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ipybus:plugin',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipybus',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

