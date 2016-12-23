import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';
import parseVideoURL from '../utils/parse-video-url';

export default Ember.Component.extend(NeuronDeterminator, {
  showingDescription: true,
  actions: {
    showDescription(flag){
      this.set('showingDescription', flag);
    }
  },
  showLink: Ember.computed('model.type', function () {
    return ['video', 'image', 'email', 'phone', 'event', 'link']
        .includes(this.get('model.type'));
  }),
  videoURL: Ember.computed('model.type', 'model.url', function () {
    return this.get('model.type') === 'video' ? parseVideoURL(this.get('model.url')) : '';
  }),
  gotoURL: Ember.computed('model.title', function () {
    let url = '';
    if (this.get('model.type') === 'link') {
      url = this.get('model.title');
    } else {
      url = this.get('model.url');
    }
    return `/goto/?url=${encodeURIComponent(url)}`;
  })
});
