import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  actions: {
    toggleText(){
      this.toggleProperty('expanded');
    }
  }
});
