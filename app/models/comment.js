import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('plain-object'),
  text: DS.attr('string'),
  root: DS.attr('string'),
  parent: DS.attr('string'),
  created: DS.attr('date')
});
