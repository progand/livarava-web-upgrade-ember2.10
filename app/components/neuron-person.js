import Ember from 'ember';

export default Ember.Component.extend({
  getStatus: Ember.computed('model.online', function () {
    return this.get('model.online') === true ? 'online' : 'offline';
  }),
  getLanguage: Ember.computed('model.language', function () {
    let language = this.get('model.language');
    if (language === 'uk') {
      return language = 'Українська';
    } else if (language === 'ru') {
      return language = 'Русский';
    } else {
      return language = 'English';
    }
  })
});
