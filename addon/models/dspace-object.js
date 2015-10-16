import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  handle: DS.attr('string'),
  link: DS.attr('string'),
  metadata: DS.hasMany('metadatum')
});
