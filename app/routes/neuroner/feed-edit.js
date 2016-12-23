import Ember from 'ember';

export default Ember.Route.extend({
	model(param) {
		return this.store.findRecord('neuroner.feed', param.id);
	},
	actions: {
		delete(model) {
	  		let isDelete = confirm("Are you sure to delete?");
	  		if (isDelete) {
	    		model.destroyRecord().then(() => this.transitionTo('neuroner.feeds'));
	  		}
		},
		save(model) {
	  		model.save()
	    		.then(() => this.transitionTo('neuroner.feeds'));
		}
	}
});
