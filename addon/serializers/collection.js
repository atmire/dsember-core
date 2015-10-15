import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    parentCommunity: {embedded: 'load'},
    parentCommunityList: {embedded: 'load'},
    subcommunities: {embedded: 'load'},
    collections: {embedded: 'load'},
    items: {embedded: 'load'}
  }
});
