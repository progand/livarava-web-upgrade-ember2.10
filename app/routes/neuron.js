import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    return model.get('header');
  },
  model(params) {
    return this.store.findRecord('neuron', params.neuron_id);
  }
});
