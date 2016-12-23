import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  titleToken: 'Filters',
  model(){
    return this.infinityModel('rssfilter');
  }
});
