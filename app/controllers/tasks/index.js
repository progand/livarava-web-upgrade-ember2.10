import Ember from 'ember';

export default Ember.Controller.extend({
  isFiltersExpanded: false,
  icons: {
    types: {
      research: '<i class="fa fa-area-chart text-warning"></i>',
      development: '<i class="fa fa-wrench text-primary"></i>'
    },
    statuses: {
      opened: '<i class="fa fa-square-o text-primary"></i>',
      in_progress: '<i class="fa fa-clock-o text-warning"></i>',
      closed: '<i class="fa fa-check-square-o text-success">'
    },
    currencies: {
      USD: '<i class="fa fa-dollar"></i>',
      EUR: '<i class="fa fa-eur"></i>',
      UAH: '&#8372;',
      RUB: '<i class="fa fa-rub"></i>'
    }
  },
  queryParams: [
    'page', {
      'filter[status]': 'status'
    }, {
      'filter[task_type]': 'type'
    }, {
      'filter[author]': 'author'
    }, {
      'filter[executant]': 'executant'
    }, {
      'filter[currency]': 'currency'
    }
  ],
  page: 1,
  'filter[status]': null,
  'filter[task_type]': null,
  'filter[author]': null,
  'filter[executant]': null,
  'filter[currency]': null,

  actions: {
    setFilter(name, value) {
      this.transitionToRoute('tasks', {
        queryParams: {
          page: this.get('page'),
          [`filter[${name}]`]: value
        }
      });
    }
  }
});
