import Ember from 'ember';
import getFeedbackSubjects from '../../utils/get-feedback-subjects';

export default Ember.Controller.extend({
  subjects: getFeedbackSubjects(),

  queryParams: 'page',
  page: 1
});
