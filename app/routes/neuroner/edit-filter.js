import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.findRecord('neuroner.filter', param.id);
  },
  actions: {
    delete(model) {
      let isDelete = confirm("Are you sure to delete?");
      if (isDelete) {
        model.destroyRecord().then(() => this.transitionTo('neuroner.filters'));
      }
    },
    save(model) {
      model.save()
        .then(() => this.transitionTo('neuroner.filters'));
    }
  }
});
