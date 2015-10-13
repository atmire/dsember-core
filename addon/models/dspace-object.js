import DS from 'ember-data';

export default DS.Model.extend({
  metadata: DS.hasMany('metadatum')
});
