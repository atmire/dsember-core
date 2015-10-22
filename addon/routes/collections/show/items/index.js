import Ember from 'ember';

export default Ember.Route.extend({
  offset: 0,
  limit: 2,
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params) {
    let page;

    if (Ember.isPresent(params.page)) {
      page = params.page;
      page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
      this.set('offset', (page-1)*this.get('limit'));
    }

    let namespace = this.store.adapterFor('application').get('namespace');
    let collectionId = this.modelFor('collections.show').get('id');
    return Ember.$.getJSON(`${namespace}/collections/${collectionId}/items`, {
      limit: this.get('limit'),
      offset: this.get('offset'),
      expand: 'all'
    }).then((data) => {
      return data.map((itemJSON) => {
        return this.store.push(this.store.normalize(itemJSON.type, itemJSON));
      });
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setProperties({
      offset: this.get('offset'),
      limit: this.get('limit'),
      collection: this.modelFor('collections.show')
    });
  }
});
