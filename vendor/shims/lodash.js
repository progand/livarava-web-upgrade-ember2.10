(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['_'] };
  }

  define('lodash', [], vendorModule);
})();
