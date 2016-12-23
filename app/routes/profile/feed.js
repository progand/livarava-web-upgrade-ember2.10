import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'News',

  model(){
    return this.store.findAll('feed');
  }
});
