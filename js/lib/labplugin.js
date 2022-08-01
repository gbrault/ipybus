var plugin = require('./index');
var IPYBUS = require('@jupyter-widgets/IPYBUS');

module.exports = {
  id: 'ipybus:plugin',
  requires: [IPYBUS.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipybus',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

