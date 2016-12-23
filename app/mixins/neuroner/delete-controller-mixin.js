import Ember from 'ember';

export default Ember.Mixin.create({
  deleting: false,

  actions: {
    toggleDeleting(){
      this.toggleProperty('deleting');
    },
    delete(){
      this.get('deleteControllerMixinModel').destroyRecord()
        .then(() => this.transitionToRoute(this.get('deleteControllerMixinAfterRouteName')));
    }
  }
});
