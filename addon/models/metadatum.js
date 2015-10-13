import DS from 'ember-data';

export default DS.Model.extend({
  key: DS.attr('string'),
  value: DS.attr('string'),
  language: DS.attr('string'),
  dspaceObject: DS.belongsTo('dspace-object')
});
