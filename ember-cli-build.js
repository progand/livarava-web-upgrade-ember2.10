/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/babel-polyfill/browser-polyfill.js', {
    prepend: true
  });

  //CSS
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import({
    development: 'bower_components/font-awesome/css/font-awesome.css',
    production: 'bower_components/font-awesome/css/font-awesome.min.css'
  });

  //Fonts
  var fontAwesomeFonts = new Funnel(app.bowerDirectory + '/font-awesome', {
    srcDir: '/fonts',
    include: ['**/*.woff', '**/*.eot', '**/*.svg', '**/*.ttf', '**/*.woff2'],
    destDir: '/fonts'
  });

  //JS
  app.import('bower_components/bootstrap/js/dist/util.js');
  app.import('bower_components/bootstrap/js/dist/alert.js');
  app.import('bower_components/bootstrap/js/dist/dropdown.js');
  app.import('bower_components/bootstrap/js/dist/tab.js');
  app.import('bower_components/lodash/dist/lodash.min.js');
  app.import('vendor/shims/lodash.js', {
    exports: {
      'lodash': ['default']
    }
  });

  return app.toTree(fontAwesomeFonts);
};
