import Ember from 'ember';

export default function getFeedbackSubjects() {
  const subjects = Ember.Object.create({
    '1': `I've found a bug!`,
    '2': `Financial question`,
    '4': `Marketing`,
    '5': `Sales`,
    '6': `Investment`,
    '7': `Browser extension`,
    '8': `Security`,
    '9': `Technical issues`,
    '10': `Job`,
    '3': `Other`
  });
  return subjects;
}
