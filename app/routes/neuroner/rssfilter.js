import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(){
      this.currentModel.save();
    },
    didTransition(){
      this.controller.set('deleting', false);
    }
  },

  model(params){
    return this.store.findRecord('rssfilter', params.filter_id);
  }
});
