import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  bundleName: DS.attr('string'),
  description: DS.attr('string'),
  format: DS.attr('string'),
  mimeType: DS.attr('string'),
  sizeBytes: DS.attr('number'),
  retrieveLink: DS.attr('string'),
  sequenceId: DS.attr('number'),
  parentObject: DS.belongsTo('dspace-object', { async: true }),
  policies: DS.hasMany('policy'),
  //checksum: leaving out for now
  parent: Ember.computed.alias('parentObject')
});
