import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('neuroner.filter', {
      label: '',
      kind: 'all',
      rules: Ember.A([Ember.Object.create({
        text: "",
        kind: "contains"
      })]),
      notifications: Ember.A([])
    });
  },

  actions: {
    save(model) {
      model.save()
        .then(() => this.transitionTo('neuroner.filters'));
    }
  }
});
