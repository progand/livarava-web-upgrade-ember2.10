import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

const defaultURL = ENV.environment === 'development' ? 'http://itc.ua/feed/' : '';
const defaultRuleURL = ENV.environment === 'development' ? 'http://itc.ua/' : '';
const defaultRuleSelector = ENV.environment === 'development' ? '.post-txt' : '';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('neuroner.feed', {
			url: defaultURL,
			rules: Ember.A([Ember.Object.create({
				url: defaultRuleURL,
        selector: defaultRuleSelector,
        without: ''
      })]),
		});
  },

  actions: {
    save(model) {
      model.save()
        .then(() => this.transitionTo('neuroner.feeds'));
    }
  }
});
