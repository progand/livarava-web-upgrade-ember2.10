import Ember from 'ember';
import getFeedbackSubjects from '../utils/get-feedback-subjects';

export default Ember.Component.extend({
  subjects: getFeedbackSubjects(),

  actions: {
    save() {
      this.get('save')(this.get('model'));
    },
    change(model, property, value) {
      model.set(property, value);
    }
  }
});
