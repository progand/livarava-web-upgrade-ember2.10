import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  titleToken: 'Feeds',
  model(){
    return this.infinityModel('rssfeed');
  }
});
