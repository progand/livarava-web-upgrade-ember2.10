import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    	addRule() {
      		this.get('group.rules').pushObject(Ember.Object.create({}));
    	},
    	deleteRule(object) {
      		object.remove();
      		this.get('group.rules').removeObject(object);
    	},
    	setAll(all = false) {
      		this.set('group.all', all);
    	}
	}
});
