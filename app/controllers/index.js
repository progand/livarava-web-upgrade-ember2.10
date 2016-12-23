import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    performTransition(transition) {
      if(transition.params){
        this.transitionToRoute(transition.route, transition.params);
      } else {
        this.transitionToRoute(transition.route);
      }
    }
  },

  userActionsMatcher(item, term) {
    return String(item.title).toLowerCase().indexOf(term.toLowerCase());
  }
});
