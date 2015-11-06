import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:dspace',
  namespace: 'rest',
  //coalesceFindRequests: true, -> commented out, because it only works for some endpoints (e.g. items) and not others (e.g. communities)
  ajax(url, type, hash) {
    if (Ember.isEmpty(hash)) {
      hash = {};
    }
    if (Ember.isEmpty(hash.data)) {
      hash.data = {};
    }
    if (type === "GET") {
      hash.data.expand = 'all'; //add ?expand=all to all GET calls
    }
    return this._super(url, type, hash);
  }
});
