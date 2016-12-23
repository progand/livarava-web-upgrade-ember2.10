import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import RSVP from 'rsvp';

export default function getPreviews(data = {}) {
  if (ENV.environment === 'development') {
    data.key = 'Q0eQWbEUJRerVFqEURGxz8pO8F2yc2sMO-Z1qUu0'; // Add an access token param.
  }
  return new RSVP.Promise((resolve, reject) => Ember.$.ajax({
      url: `${ENV.api.host}/api/v2/neuroner.previews`,
      data,
      crossDomain: true
    })
    .done(data => data && Array.isArray(data.data) && resolve(Ember.A(data.data.map(item => Ember.Object.create(item.attributes)))))
    .fail(error => reject(error)));
}
