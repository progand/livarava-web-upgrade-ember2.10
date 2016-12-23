import Ember from 'ember';

export const RULE_TYPES = {
  'contains': {
    title: 'Contains'
  },
  'doesnt_contain': {
    title: 'Doesn’t contain'
  },
  'is': {
    title: 'Is'
  },
  'is_not': {
    title: 'Is not'
  },
  'begins_with': {
    title: 'Begins with'
  },
  'ends_with': {
    title: 'Ends with'
  }
};

export default Ember.Component.extend({
  tagName: 'fieldset',
  classNames: "form-group row",
	text: '',
	types: RULE_TYPES,
  typeLabel: Ember.computed('rule.kind', function(){
		const TYPE = RULE_TYPES[this.get('rule.kind')];
		return TYPE ? TYPE.title : 'Select...';
	}),
  actions: {
    remove(item) {
      this.sendAction('deleteRule', item);
    },
		change(property, value){
			this.get('rule').set(property, value);
		}
  }
});
