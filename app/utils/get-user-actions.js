import Ember from 'ember';

export default function getUserActions(userModel = Ember.Object.create()) {
  const actions = Ember.A([{
    title: 'Tasks > To do (I am an executant)',
    route: `/tasks?executant=${userModel.id}`
  }, {
    title: 'Tasks > Started (I am an author)',
    route: `/tasks?author=${userModel.id}`
  }, {
    title: 'Tasks > All',
    route: 'tasks.index'
  }]);

  if(userModel.id){
    actions.pushObjects([{
      title: 'Feedbacks > Create',
      route: 'feedbacks.new'
    },{
      title: 'Feedbacks > All my feedbacks',
      route: 'feedbacks.index'
    }]);
  }

  if (true || userModel.get('rights.neuroner')) {
    actions.pushObjects([{
      title: 'Neuroner > Feeds > All',
      route: 'neuroner.feeds'
    }, {
      title: 'Neuroner > Feeds > Create',
      route: 'neuroner.feed-form'
    }, {
      title: 'Neuroner > Filter > All',
      route: 'neuroner.filters'
    }, {
      title: 'Neuroner > Filter > Create',
      route: 'neuroner.filter-form'
    }]);
  }

  if (userModel.get('rights.invoices')) {
    actions.pushObjects([{
      title: 'Invoices > All',
      route: 'invoice.index'
    }, {
      title: 'Invoices > Create',
      route: 'invoice.new'
    }]);
  }


  return actions.sortBy('title');
}
