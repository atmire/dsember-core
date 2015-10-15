import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
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
  }
});
