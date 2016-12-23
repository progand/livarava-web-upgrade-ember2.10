import DS from 'ember-data';
import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: (ENV.environment === 'production' && ['dev.livarava.com', 'www.livarava.com'].includes(window.location.host)) ? `https://${window.location.host}` : ENV.api.host,
  namespace: 'api/v2',
  // Scope all ajax calls.
  ajax(url, type, hash) {
    let key = ENV.api.key;

    if (Ember.isEmpty(hash)) {
      hash = {};
    }
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }

    if (type === 'GET') {

      if (ENV.environment !== 'production') {
        hash.data.key = key; // Add an access token param.
      }

      if (!url.includes('api/v2/feed')) {
        hash.data.__t = Date.now();
      }
    } else {
      if (ENV.environment !== 'production') {
        url += `?key=${key}`;
        if (Ember.isEmpty(hash.data.data)) {
          hash.data.data = {};
        }
        hash.data.data.key = key;
      }
    }

    return this._super(url, type, hash);
  }
});
