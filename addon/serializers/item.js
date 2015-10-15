import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    bitstreams: {embedded: 'load'},
    metadata: {embedded: 'always'},
    parentCollectionList: {embedded: 'load'},
    parentCommunityList: {embedded: 'load'}
  }
});
