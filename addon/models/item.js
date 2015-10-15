import Ember from 'ember';
import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  archived: DS.attr('boolean'),
  lastModified: DS.attr('date'),
  withdrawn: DS.attr('boolean'),
  bitstreams: DS.hasMany('bitstream', { async: true }),
  parentCollectionList: DS.hasMany('collection', { async: true }),
  //parentCollection: DS.belongsTo('collection', { async: true }), //TODO this relation as it is can't work in ember, because the REST API doesn't return a relationship on the collection side to match it
  parentCommunityList: DS.hasMany('community', { async: true }),
  metadata: DS.hasMany('metadatum'),

  //fills in for the missing parentCollection
  owningCollection: Ember.computed('parentCollectionList.[]', function() {
    return this.get('parentCollectionList.firstObject');
  }),

  originals: Ember.computed('bitstreams.@each.bundleName', function() {
    return this.get('bitstreams').filterBy('bundleName', 'ORIGINAL');
  }),

  thumbnails: Ember.computed('bitstreams.@each.bundleName', function() {
    return this.get('bitstreams').filterBy('bundleName', 'THUMBNAIL');
  }),

  //TODO should probably be cached to improve performance. Remember that the cache should also observe the bitstreams array, to invalidate itself
  getMatchingThumbnailFor: function (original) {
    return this.get('thumbnails').filter(function (thumbnail) {
      let startsWith = new RegExp(`^${original.get('name')}\.[^\.]+$`);
      return startsWith.test(thumbnail.get('name'));
    }).get('firstObject');
  }
});
