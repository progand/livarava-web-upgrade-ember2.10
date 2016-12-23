import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    'filter[status]': {
      refreshModel: true
    },
    'filter[task_type]': {
      refreshModel: true
    },
    'filter[author]': {
      refreshModel: true
    },
    'filter[executant]': {
      refreshModel: true
    },
    'filter[currency]': {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('task', _.omitBy(params, _.isNil));
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('me', this.modelFor('application'));
  }
});
