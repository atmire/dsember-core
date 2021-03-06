import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function() {
    return  this.get('i18n').t('title.home');
  },

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
