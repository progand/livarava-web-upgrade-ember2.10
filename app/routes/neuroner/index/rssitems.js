import Ember from 'ember';
import InfinityRoute from 'ember-infinity/mixins/route';
import moment from 'moment';
/* global _ */

export default Ember.Route.extend(InfinityRoute, {
  queryParams: {
    fulltext: {
      refreshModel: true
    },
    from: {
      refreshModel: true
    }
  },

  actions: {
    submit({fulltext, from}){
      this.controller.set('fulltext', fulltext);
      this.controller.set('from', from && from.format('x'));
    },
    didTransition(){
      let from = moment(this.controller.get('from'), 'x');
      if (this.controller.get('from') && !from.isValid()) {
        this.controller.set('from', undefined);
        return;
      }
      this.controller.set('data', {
        fulltext: this.controller.get('fulltext'),
        from: from
      });
      this.controller.set('icons', Ember.Object.create({
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-file-image-o',
        clear: 'fa fa-trash',
        close: 'fa fa-times'
      }));
    }
  },

  model(params){
    return this.infinityModel('rssitem', {
      perPage: 10,
      startingPage: 1,
      filter: _.pick(params, 'fulltext', 'from')
    });
  }
});
