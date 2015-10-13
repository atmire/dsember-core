import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  name: DS.attr('string'),
  handle: DS.attr('string'),
  type: DS.attr('string'),
  archived: DS.attr('boolean'),
  lastModified: DS.attr('date'),
  withdrawn: DS.attr('boolean'),
  //bitstreams: DS.hasMany('bitstream'),
  //parentCollections: DS.hasMany('collection'),
  metadata: DS.hasMany('metadatum')
});
