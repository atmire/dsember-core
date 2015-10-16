import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,
  attrs: {
    policies: {embedded: 'always'},
    parentObject: {embedded: 'load'}
  }
});
