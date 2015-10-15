import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  logo: DS.belongsTo('logo'),
  parentCommunity: DS.belongsTo('community', { async: true }),
  copyrightText: DS.attr('string'),
  introductoryText: DS.attr('string'),
  shortDescription: DS.attr('string'),
  sidebarText: DS.attr('string'),
  countItems: DS.attr('number'),
  subcommunities: DS.hasMany('community', { async: true }),
  collections: DS.hasMany('collection', { async: true })
});
