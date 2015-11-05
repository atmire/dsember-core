import Ember from 'ember';
import DS from 'ember-data';
import DSpaceObject from './dspace-object';

export default DSpaceObject.extend({
  archived: DS.attr('boolean'),
  lastModified: DS.attr('date'),
  withdrawn: DS.attr('boolean'),
  bitstreams: DS.hasMany('bitstream', { async: true }),
  parentCollectionId: DS.attr('number'),
  parentCollectionList: DS.hasMany('collection', { async: true }),
  parentCommunityList: DS.hasMany('community', { async: true }),
  metadata: DS.hasMany('metadatum', {inverse: 'dspaceObject'}),

  parentId: Ember.computed.alias('parentCollectionId'),
  parentType: 'collection',

  originals: Ember.computed('bitstreams.@each.bundleName', function() {
    return this.get('bitstreams').filterBy('bundleName', 'ORIGINAL');
  }),

  thumbnails: Ember.computed('bitstreams.@each.bundleName', function() {
    return this.get('bitstreams').filterBy('bundleName', 'THUMBNAIL');
  }),

  //TODO should probably be cached to improve performance. Remember that the cache should also observe the bitstreams array, to invalidate itself
  getMatchingThumbnailFor: function (original) {
    return this.get('thumbnails').find(function (thumbnail) {
      let startsWith = new RegExp(`^${original.get('name')}\.[^\.]+$`);
      return startsWith.test(thumbnail.get('name'));
    });
  }
});
