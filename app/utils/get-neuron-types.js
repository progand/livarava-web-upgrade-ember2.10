import Ember from 'ember';

export default function getNeuronTypes() {
  return Ember.A([
    'text',
    'phone',
    'email',
    'link',
    'video',
    'post',
    'project',
    'product',
    'rssfeed',
    'event',
    'task'
  ]);
}
