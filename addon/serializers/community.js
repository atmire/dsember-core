import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    parentCommunity: {embedded: 'load'},
    subcommunities: {embedded: 'load'},
    collections: {embedded: 'load'}
  }
});
