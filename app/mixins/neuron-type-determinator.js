import Ember from 'ember';


export default Ember.Mixin.create({
  isPhone: Ember.computed('model.type', function () {
    return this.get('model.type') === 'phone';
  }),
  isLink: Ember.computed('model.type', function () {
    return this.get('model.type') === 'link';
  }),
  isEmail: Ember.computed('model.type', function () {
    return this.get('model.type') === 'email';
  }),
  isRSS: Ember.computed('model.type', function () {
    return this.get('model.type') === 'rss';
  }),
  isImage: Ember.computed('model.type', function () {
    return this.get('model.type') === 'image';
  }),
  isVideo: Ember.computed('model.type', function () {
    return this.get('model.type') === 'video';
  }),
  isPost: Ember.computed('model.type', function () {
    return this.get('model.type') === 'post';
  }),
  isJob: Ember.computed('model.type', function () {
    return this.get('model.type') === 'job';
  }),
  isProject: Ember.computed('model.type', function () {
    return this.get('model.type') === 'project';
  }),
  isProduct: Ember.computed('model.type', function () {
    return this.get('model.type') === 'product';
  }),
  isEvent: Ember.computed('model.type', function () {
    return this.get('model.type') === 'event';
  }),
  isAudio: Ember.computed('neuron.type', function () {
    return this.get('neuron.type') === 'audio';
  }),
  isPerson: Ember.computed('model.type', function () {
    return this.get('model.type') === 'person';
  }),
  hasExternalURL: Ember.computed('model.type', function () {
    return this.get('model.url') || ['image', 'rss', 'video', 'link']
        .includes(this.get('model.type'));
  }),
  hasSpecificInfo: Ember.computed('model.type', function () {
    return ['rss', 'post', 'project', 'product', 'event', 'job', 'person']
      .includes(this.get('model.type'));
  })
});
