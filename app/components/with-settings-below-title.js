import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggle(){
      this.toggleProperty('expanded');
    }
  }
});
