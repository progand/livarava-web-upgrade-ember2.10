import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr('string'),
  created: DS.attr('date'),
  text: DS.attr('string')
});
