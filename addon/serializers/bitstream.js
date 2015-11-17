import DS from 'ember-data';
import { combineURLParts } from 'dsember-core/utils/url-utils';

function addNamespaceToRetrieveLink(applicationAdapter, hash) {
  if (Ember.isPresent(hash.retrieveLink)) {
    let namespace = applicationAdapter.get('namespace');
    hash.retrieveLink = combineURLParts(namespace, hash.retrieveLink);
  }
  return hash
}

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    policies: {embedded: 'always'},
    parentObject: {embedded: 'load'}
  },
  normalize: function (typeClass, hash) {
    hash = addNamespaceToRetrieveLink(this.store.adapterFor('application'), hash);
    return this._super(typeClass, hash);
  }
});
