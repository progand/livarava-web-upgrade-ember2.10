import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  actions: {},

  model(params, transition){
    return this.infinityModel('rssitem', {
      startingPage: 1,
      filter: {
        feed: transition.params['neuroner.rssfeed']['feed_id']
      }
    });
  }
});
