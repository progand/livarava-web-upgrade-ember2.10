import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('feedback');
  },

  actions: {
    save(model) {
      model.save();
    }    
  }
});
