import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";
import _ from 'lodash';

export default Ember.Route.extend(InfinityRoute, {
  notifications: Ember.inject.service('html5-notifications'),

  actions: {
    refresh(){
      this.refresh();
    },
    didTransition() {
      this.set('rssfilter', this.modelFor('neuroner.rssfilter'));
      this.get('notifications').ping();
      return true; // Bubble the didTransition event
    }
  },

  model(params, transition){
    return Ember.RSVP.hash({
      filter: transition.resolvedModels['neuroner.rssfilter'],
      items: this.infinityModel('rssitem', {
        startingPage: 1,
        modelPath: 'controller.model.items',
        filter: {
          fulltext: transition.resolvedModels['neuroner.rssfilter'].get('fulltext')
        }
      })
    });
  },

  onModelAutoRefreshChange: Ember.observer('rssfilter.autorefresh', function () {
    this.updateRefreshInterval();
  }),

  notifyAboutNewItems(items){
    if (!(items && items.length)) {
      return;
    }
    this.get('notifications').notify(items);
    this.refresh();
  },

  updateRefreshInterval(){
    let autorefresh = Number(this.get('rssfilter.autorefresh'));
    clearInterval(this.get('refreshInterval'));
    if (autorefresh) {
      this.set('refreshInterval', setInterval(() => {
        this.store.query('rssitem', {filter: {fulltext: this.get('rssfilter.fulltext')}})
          .then(items => this.notifyAboutNewItems(_.difference(items.toArray(), this.currentModel.items.toArray())));
      }, 1000 * 60 * autorefresh));
    }
  }
})
;
