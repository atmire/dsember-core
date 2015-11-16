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

    target.import(path.join(target.bowerDirectory, 'bootstrap-sass', 'assets', 'fonts', 'bootstrap', 'glyphicons-halflings-regular.eot'), {
      destDir: path.join('assets', 'fonts')
    });

    target.import(path.join(target.bowerDirectory, 'bootstrap-sass', 'assets', 'fonts', 'bootstrap', 'glyphicons-halflings-regular.svg'), {
      destDir: path.join('assets', 'fonts')
    });

    target.import(path.join(target.bowerDirectory, 'bootstrap-sass', 'assets', 'fonts', 'bootstrap', 'glyphicons-halflings-regular.ttf'), {
      destDir: path.join('assets', 'fonts')
    });

    target.import(path.join(target.bowerDirectory, 'bootstrap-sass', 'assets', 'fonts', 'bootstrap', 'glyphicons-halflings-regular.woff2'), {
      destDir: path.join('assets', 'fonts')
    });

    target.import(path.join(target.bowerDirectory, 'moment', 'min', 'moment.min.js'));
    target.import(path.join(target.bowerDirectory, 'holderjs', 'holder.min.js'));
  }
};
