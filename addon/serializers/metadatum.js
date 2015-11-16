import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  isNewSerializerAPI: true,
  normalize: function(typeClass, hash) {
    hash.id = this.store.adapterFor('metadatum').generateIdForRecord();
    return this._super.apply(this, arguments);
  },
  serialize: function(snapshot) {
    return {
      key: snapshot.attr('key'),
      value: snapshot.attr('value'),
      language: snapshot.attr('language')
    };
  }
});
