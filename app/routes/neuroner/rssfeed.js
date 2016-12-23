import Ember from 'ember';

export default Ember.Route.extend({
  perPage: 5,

  actions: {
    didTransition(){
      this.controller.set('deleting', false);
    }
  },

  model(params){
    return this.store.findRecord('rssfeed', params.feed_id);
  }
});
