/* jshint node: true */
// eslint-disable-next-line no-undef
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'livarava-neuroner-mockups',
    environment: environment,
    rootURL: '/ui',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.rootURL = '/ui/';
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV['api'] = {
      host: "https://dev.livarava.com",
      key: "Q0eQWbEUJRerVFqEURGxz8pO8F2yc2sMO-Z1qUu0"
    };
  }

  if (environment === 'local') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.rootURL = '/ui/';
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV['api'] = {
      host: "http://local.livarava.com",
      key: "test"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.rootURL = '/ui/';
    //ENV.locationType = 'hash';
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
    ENV.googleAnalytics = {
      webPropertyId: 'UA-3675054-22'
    };
  }

  return ENV;
};
