import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    policies: {embedded: 'always'},
    parentObject: {embedded: 'load'}
  }
});
