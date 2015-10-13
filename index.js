/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'dsember-core',
  isDevelopingAddon: function() {
    return true;
  },
  //included: function(app) {
  //  this._super.included(app);
  //}
  included: function included(app, parentAddon) {
    var target = (parentAddon || app);

    target.options.sassOptions = target.options.sassOptions || {};
    target.options.sassOptions.includePaths = target.options.sassOptions.includePaths || [];

    target.options.sassOptions.includePaths.push(
      path.join(target.bowerDirectory, 'bootstrap-sass', 'assets', 'stylesheets')
    );

    target.import('bower_components/blueimp-md5/js/md5.min.js');
  }
};
