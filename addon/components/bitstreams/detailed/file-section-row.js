import Ember from 'ember';
import layout from '../../../templates/components/bitstreams/detailed/file-section-row';
import { combineURLParts } from 'dsember-core/utils/url-utils';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'file-wrapper row' ],
  row: null, //passed-in
  restNamespace: null, //passed-in

  thumbnailLink: Ember.computed('row.thumbnail.retrieveLink', function() {
    if (Ember.isPresent(this.get('row.thumbnail.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('row.thumbnail.retrieveLink'));
    }
    return undefined;
  }),

  originalLink: Ember.computed('row.original.retrieveLink', function() {
    if (Ember.isPresent(this.get('row.original.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('row.original.retrieveLink'));
    }
    return undefined;
  })
});
