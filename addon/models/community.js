import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  logo: DS.belongsTo('bitstream', { async: true }),
  parentCommunity: DS.belongsTo('community', { async: true }),
  copyrightText: DS.attr('string'),
  introductoryText: DS.attr('string'),
  shortDescription: DS.attr('string'),
  sidebarText: DS.attr('string'),
  countItems: DS.attr('number'),
  subcommunities: DS.hasMany('community', { async: true, inverse: 'parentCommunity' }),
  collections: DS.hasMany('collection', { async: true }),

  parentId: Ember.computed('parentCommunity', function() {
    return this.get('parentCommunity.id')
  }),
  parentType: 'community',

  news: Ember.computed.alias('sidebarText')
});
