import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  logo: DS.belongsTo('bitstream', { async: true }),
  parentCommunityId: DS.attr('number'),
  parentCommunityList: DS.hasMany('community', { async: true }),
  license: DS.attr('string'),
  copyrightText: DS.attr('string'),
  introductoryText: DS.attr('string'),
  shortDescription: DS.attr('string'),
  sidebarText: DS.attr('string'),
  numberItems: DS.attr('number'),
  items: DS.hasMany('item', { async: true }),

  parentCommunity: Ember.computed('parentCommunityId', 'parentCommunityList.@each.id', function() {
    return this.get('parentCommunityList').findBy('id', this.get('parentCommunityId'));
  }),

  news: Ember.computed.alias('sidebarText')
});
