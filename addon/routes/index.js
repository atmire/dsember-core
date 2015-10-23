import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let namespace = this.store.adapterFor('application').get('namespace');
    return Ember.$.getJSON(`${namespace}/communities/top-communities`, {
      expand: 'all'
    }).then((data) => {
      return data.map((itemJSON) => {
        return this.store.push(this.store.normalize(itemJSON.type, itemJSON));
      });
    });
  }
});
