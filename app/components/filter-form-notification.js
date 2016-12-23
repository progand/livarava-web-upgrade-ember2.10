import Ember from 'ember';

export const DESTINATIONS_TYPES = {
  'email': {
    title: 'Email'
  },
  'slack': {
    title: 'Slack'
  }
};

export default Ember.Component.extend({
  tagName: 'fieldset',
  classNames: "form-group row",
	types: DESTINATIONS_TYPES,
	typeLabel: Ember.computed('notifications.kind', function(){
		const TYPE = DESTINATIONS_TYPES[this.get('notifications.kind')];
		return TYPE ? TYPE.title : 'Select...';
	}),
	actions: {
		change(property, value){
			this.get('notifications').set(property, value);
		},
		remove(item) {
	      this.sendAction('deleteNotifi', item);
	    },
	}
});
