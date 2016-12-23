import Ember from 'ember';
import getActions from '../utils/get-user-actions';

export default Ember.Route.extend({
  titleToken: 'Home',
  actions: {
    didTransition: function() {
      this.controller.set('userActions', getActions(this.controller.get('model')));
      return true; // Bubble the didTransition event
    }
  }
});
