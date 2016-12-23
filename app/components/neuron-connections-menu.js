import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  activeForm: ENV.environment === 'development' ? '' : '',
  actions: {
    setActiveForm(activeForm = null){
      this.set('activeForm', activeForm);
    },
    addSimpleNeuron(){
      this.addNeuron('simple');
    },
    addImageNeuron(){
      this.addNeuron('image');
    },
    addAudioNeuron(){
      this.addNeuron('audio');
    },
    addPostNeuron() {
      this.addNeuron('post');
      this.set('postTitle', '');
      this.set('postImage', '');
      this.set('postText', '');
    },
    onImageNeuronRawDataLoad(file){
      this.set('imageNeuronRawData', file.data);
    },
    onAudioNeuronRawDataLoad(file){
      this.set('audioNeuronRawData', file.data);
    }
  },
  addNeuron(type='simple'){
    const newNeuronKey = `new${type.capitalize()}Neuron`,
      rawDataKey = `${type}NeuronRawData`;
      if (!this.get(newNeuronKey)) {
        return;
      }
      this.set('model.connections', [this.get(newNeuronKey)].concat(this.get('model.connections')));
      this.set(rawDataKey, '');
      this.actions.setActiveForm.apply(this);
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  }),
  isImageFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'image';
  }),
  isAudioFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'audio';
  }),
  isPostFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'post';
  }),
  newNeuron(type='simple'){
    return parse(this.get(`${type}NeuronRawData`), {title: this.get('model.title')});
  },
  newSimpleNeuron: Ember.computed('simpleNeuronRawData', function () {
    return this.newNeuron('simple');
  }),
  newImageNeuron: Ember.computed('imageNeuronRawData', function () {
    return this.newNeuron('image');
  }),
  newAudioNeuron: Ember.computed('audioNeuronRawData', function () {
    return this.newNeuron('audio');
  }),
  newPostNeuron: Ember.computed('postTitle', 'postImage', 'postText', function () {
    let postData = {
      title: this.get('postTitle'),
      image: this.get('postImage'),
      text: this.get('postText')
    };
    if (postData.title !== undefined && postData.image !== undefined && postData.text !== undefined) {
      return parse(postData, {title: this.get('model.title')});
    }
  })
});
