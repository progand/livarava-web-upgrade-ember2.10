import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    addRule() {
      this.get('model.rules').pushObject(Ember.Object.create({}));
    },
    addNotification() {
      this.get('model.notifications').pushObject(Ember.Object.create({
        kind: "email",
        destination: ""
      }));
    },
    deleteRule(object) {
      this.get('model.rules').removeObject(object);
    },
    deleteNotification(object) {
      this.get('model.notifications').removeObject(object);
    },
    setAll(kind) {
      this.set('model.kind', kind);
    },
    addGroup() {
      this.get('model.group').pushObject(Ember.Object.create({
        all: true,
        rules: Ember.A([Ember.Object.create({
          text: "",
          kind: ""
        })])
      }));
    },
    save() {
      this.set('json', JSON.stringify(this.get('model')));
      this.get('save')(this.get('model'));
    },
    delete() {
      this.get('delete')(this.get('model'));
    },
    searchFeeds(term) {
      if (Ember.isBlank(term)) {
        return [];
      }
      return this.get('store').query('neuroner.feed', {
        filter: {
          url: term
        }
      });
    }
  }
});
