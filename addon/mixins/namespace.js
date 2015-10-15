import Ember from 'ember';

export default Ember.Mixin.create({
  restNamespace: Ember.computed('store', function() {
    return this.store.adapterFor('application').get('namespace');
  })
});
