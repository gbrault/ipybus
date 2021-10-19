// Export widget models and views, and the npm package version number.
module.exports = require('./base_widget.js');
module.exports['version'] = require('../package.json').version;
