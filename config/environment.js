'use strict';

module.exports = function(/* environment, appConfig */) {
  var bootstrapPath = require('path').join(__dirname, '..', 'bower_components', 'bootstrap-sass', 'assets', 'stylesheets');

  return {
    sassOptions: {
      includePaths: [ bootstrapPath ]
    }
  };
};
