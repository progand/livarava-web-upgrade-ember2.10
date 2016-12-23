import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',

  clearSearch(){
    this.set('search', '');
  }
});
