import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'rest',
  coalesceFindRequests: true,
  ajax(url, type, hash) {
    if (Ember.isEmpty(hash)) {
      hash = {};
    }
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }
    hash.data.expand = 'all'; //add ?expand=all to all rest calls
    return this._super(url, type, hash);
  }
});
