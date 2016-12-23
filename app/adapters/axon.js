import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQuery (query, modelName) {
    switch(modelName) {
      case 'axon':
        return `${this.get('host')}/${this.get('namespace')}/neurons/${query.id}/axons`;
      default:
        return this._super(...arguments);
    }
  }
});
