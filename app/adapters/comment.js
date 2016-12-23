import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'comment':
        if (query.root) {
          return `${this.get('host')}/${this.get('namespace')}/neurons/${query.root}/comments`;
        }
        break;
      default:
        return this._super(...arguments);
    }
  },
  urlForCreateRecord(modelName, snapshot) {
    if (snapshot && snapshot.record && snapshot.record.get('root')) {
      return `${this.get('host')}/${this.get('namespace')}/neurons/${snapshot.record.get('root')}/comments`;
    } else {
      return this._super(...arguments);
    }
  }
});
