import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  header: DS.attr('string'),
  display: DS.attr('string'),
  type: DS.attr('string'),
  image: DS.attr('string'),
  url: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  type_location: DS.attr('string'),
  price: DS.attr('number'),
  neuron_count: DS.attr('number'),
  online: DS.attr('boolean'),
  language: DS.attr('string'),

  subscriberCount: DS.attr('number'),
  views: DS.attr('number'),
  axonCount: DS.attr('number'),

  summary: DS.attr('string'),
  created: DS.attr('date'),
  startdate: DS.attr('date'),
  enddate: DS.attr('date'),

  comments: DS.attr(),
  commentsCount: DS.attr('number'),

  axons: DS.hasMany('neuron'),

  imageUrl: DS.attr('string'),
  mainImageUrl: DS.attr('string'),
  text: Ember.computed.alias('description'),
  mainImage: Ember.computed('imageUrl', 'mainImageUrl', function() {
    return this.get('mainImageUrl') || this.get('imageUrl');
  })
});
