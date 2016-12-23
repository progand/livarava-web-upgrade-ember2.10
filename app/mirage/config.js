import _ from 'lodash';

export default function () {

  // These comments are here to help you get started. Feel free to delete them.

  /*
   Config (with defaults).

   Note: these only affect routes defined *after* them!
   */

  this.urlPrefix = 'http://mirage.test';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api/v2';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/neuroner/rssfeeds', function (db) {
    return {
      data: db.rssfeeds.map(attrs => ({type: 'rssfeeds', id: attrs.id, attributes: attrs}))
    };
  });
  this.get('/neuroner/rssfeeds/:id', function (db, request) {
    let attrs = db.rssfeeds.find(request.params.id);
    return {
      data: {type: 'rssfeeds', id: attrs.id, attributes: attrs}
    };
  });
  /* jshint ignore:start */
  this.get('/neuroner/rssitems', function (db, request) {
    let {page=1, per_page: limit=5}  = request.queryParams;

    return {
      meta: {total_pages: db.rssitems.length},
      data: db.rssitems
        .slice((page - 1) * limit, page * limit)
        .map(attrs => ({type: 'rssitems', id: attrs.id, attributes: attrs}))
    };
  });
  /* jshint ignore:end */

  this.get('/neuroner/rssfilters/:id', function (db, request) {
    let id = request.params.id;
    return {
      data: {
        type: 'rssffilters', id: request.params.id, attributes: {
          fulltext: `Feed Filter ${id}`,
          email: true
        }
      }
    }
      ;
  });
  this.post('/sends', function (db, request) {
    return _.defaultsDeep({}, JSON.parse(request.requestBody), {data: {id: Date.now()}});
  });
  this.get('/neurons/:id', function (db, request) {
    let id = request.params.id,
      attrs = db.neurons.find(id) || db.neurons[0],
      result = {
        data: {
          type: 'neurons',
          id: id,
          attributes: attrs,
          relationships: {
            neurons: {
              data: db.neurons.map(neuron => new Object({
                type: 'neurons',
                id: neuron.id
              }))
            }
          }
        },
        included: db.neurons.map(neuron => new Object({
          type: 'neurons',
          id: neuron.id,
          attributes: neuron
        }))
      };
    return result;
  });

  this.get('/neuroner/neuroner.filters', function(db) {
    return {
      data: db.filters.reverse()
        .map(attrs => ({
          type: 'neuroner.filters',
          id: attrs.id,
          attributes: attrs
        }))
    };
  });

  this.post('/neuroner/neuroner.filters', function(db, request) {
    const attrs = JSON.parse(request.requestBody).data.attributes,
      record = db.filters.insert(attrs);

    return {
      data: {
        type: 'neuroner.filters',
        id: record.id,
        attributes: record
      }
    };
  });

  this.patch('/neuroner/neuroner.filters/:id', function(db, request) {
    const id = request.params.id,
      attrs = JSON.parse(request.requestBody).data.attributes,
      record = db.filters.update(id, attrs);

    return {
      data: {
        type: 'neuroner.filters',
        id: record.id,
        attributes: record
      }
    };
  });

  this.del('/neuroner/neuroner.filters/:id', function(db, request) {
    db.filters.remove(request.params.id);
    let id = request.params.id;
    return {
      data: {
          type: 'neuroner.filters',
          id: id,
          attributs: db.filters.find(id)
      }
    };
    //return {};
  });

  this.get('/neuroner/neuroner.filters/:id', function(db, request) {
    let id = request.params.id,
    attrs = db.filters.find(id);
    return {
      data: {
        type: 'neuroner.filters',
        id: id,
        attributes: attrs
      }
    };
  });

  /* FEEDS */

  this.get('/neuroner/neuroner.feeds/:id', function(db, request) {
    let id = request.params.id,
    attrs = db.feeds.find(id);
    return {
      data: {
        type: 'neuroner.feeds',
        id: id,
        attributes: attrs
      }
    };
  });

  this.get('/neuroner/neuroner.feeds', function(db, request) {
    const url = request.queryParams['filter[url]'];
    let data;
    if(url){
      data = db.feeds.filter(item => item.url.includes(url));
    } else {
      data = db.feeds;
    }
    return {
      data: data.reverse().slice(0,10)
        .map(attrs => ({
          type: 'neuroner.feeds',
          id: attrs.id,
          attributes: attrs
        }))
    };
  });

  this.post('/neuroner/neuroner.feeds', function(db, request) {
    const attrs = JSON.parse(request.requestBody).data.attributes,
      record = db.feeds.insert(attrs);
    return {
      data: {
        type: 'neuroner.feeds',
        id: record.id,
        attributes: record
      }
    };
  });

  this.patch('/neuroner/neuroner.feeds/:id', function(db, request) {
    const id = request.params.id,
      attrs = JSON.parse(request.requestBody).data.attributes,
      record = db.feeds.update(id, attrs);
    return {
      data: {
        type: 'neuroner.feeds',
        id: record.id,
        attributes: record
      }
    };
  });

  this.del('/neuroner/neuroner.feeds/:id', function(db, request) {
    db.feeds.remove(request.params.id);
    let id = request.params.id;
    return {
      data: {
          type: 'neuroner.feeds',
          id: id,
          attributs: db.feeds.find(id)
      }
    };
  });

  /* END FEEDS */

  this.passthrough('http://localhost:4200/api/v2/feed');
  this.passthrough('https://dev.livarava.com/api/**');
  this.passthrough('https://www.livarava.com/api/**');
  this.passthrough('/neuroner/rssfeeds');
  this.passthrough('/neuroner/rssfeeds/:id');
  this.passthrough('/neuroner/rssitems');
  this.passthrough('/neuroner/rssfilters');
  this.passthrough('/neuroner/rssfilters/:id');
  this.passthrough('/neurons/:id');
  this.passthrough('/feed');
  this.passthrough('/autocomplete/neurons');

  this.passthrough('http://localhost:4200/ui/feed-demo.html');
  this.passthrough('https://www.livarava.com/ui/feed-demo.html');

  /*
   Route shorthand cheatsheet
   */
  /*
   GET shorthands

   // Collections
   this.get('/contacts');
   this.get('/contacts', 'users');
   this.get('/contacts', ['contacts', 'addresses']);

   // Single objects
   this.get('/contacts/:id');
   this.get('/contacts/:id', 'user');
   this.get('/contacts/:id', ['contact', 'addresses']);
   */

  /*
   POST shorthands

   this.post('/contacts');
   this.post('/contacts', 'user'); // specify the type of resource to be created
   */

  /*
   PUT shorthands

   this.put('/contacts/:id');
   this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
   */

  /*
   DELETE shorthands

   this.del('/contacts/:id');
   this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

   // Single object + related resources. Make sure parent resource is first.
   this.del('/contacts/:id', ['contact', 'addresses']);
   */

  /*
   Function fallback. Manipulate data in the db via

   - db.{collection}
   - db.{collection}.find(id)
   - db.{collection}.where(query)
   - db.{collection}.update(target, attrs)
   - db.{collection}.remove(target)

   // Example: return a single object with related models
   this.get('/contacts/:id', function(db, request) {
   var contactId = +request.params.id;

   return {
   contact: db.contacts.find(contactId),
   addresses: db.addresses.where({contact_id: contactId})
   };
   });

   */
}

/*
 You can optionally export a config that is only loaded during tests
 export function testConfig() {

 }
 */
