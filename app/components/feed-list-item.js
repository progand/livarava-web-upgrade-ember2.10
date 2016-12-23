import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'fieldset',
  classNames: "form-group row",
  actions: {
    remove(item) {
      this.sendAction('deleteRule', item);
    }
  }
});
