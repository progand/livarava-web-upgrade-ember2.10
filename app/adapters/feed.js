import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  pathForType(type) {
    var camelized = Ember.String.dasherize(type);
    return Ember.String.singularize(camelized);
  }
});
