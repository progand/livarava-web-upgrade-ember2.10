import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create(){
      var neuron = this.store.createRecord('neuron', {
        title: this.get('title')
      });

      neuron.save();
    }
  }
});
