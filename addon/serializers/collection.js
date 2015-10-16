import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    parentCommunity: {embedded: 'load'},
    parentCommunityList: {embedded: 'load'},
    items: {embedded: 'load'}
  },
  normalize: function(typeClass, hash) {
    if (Ember.isPresent(hash.parentCommunity) && Ember.isPresent(hash.parentCommunity.id)) {
      hash.parentCommunityId = hash.parentCommunity.id;
      hash.parentCommunity = undefined;
    }
    return this._super.apply(this, arguments);
  }

});
