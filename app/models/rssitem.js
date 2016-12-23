import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),
  feed: DS.belongsTo('rssfeed', {
    async: false
  })
});
