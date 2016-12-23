import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    return Ember.Object.create(serialized);
  },

  serialize(deserialized) {
    return deserialized;
  }
});
