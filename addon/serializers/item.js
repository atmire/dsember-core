import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    bitstreams: {embedded: 'load'},
    metadata: {embedded: 'always'},
    parentCollectionList: {embedded: 'load'},
    parentCommunityList: {embedded: 'load'}
  },
  normalize: function(typeClass, hash) {
    if (Ember.isPresent(hash.parentCollection) && Ember.isPresent(hash.parentCollection.id)) {
      hash.parentCollectionId = hash.parentCollection.id;
      hash.parentCollection = undefined;
    }
    return this._super.apply(this, arguments);
  },
  serialize: function(snapshot, options) {
    let json = snapshot.hasMany('metadata').map(function(metadatum) {
      return {
        key: metadatum.attr('key'),
        value: metadatum.attr('value'),
        language: metadatum.attr('language')
      }
    });

    return json;
  }
});
