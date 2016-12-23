import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {    
    if (Array.isArray(serialized)) {
      return Ember.A(serialized.map(item => Ember.Object.create(item)));
    }
    return serialized;
  },

  serialize(deserialized) {
    return deserialized;
  }
});
