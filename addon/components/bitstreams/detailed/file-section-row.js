import Ember from 'ember';
import layout from '../../../templates/components/bitstreams/detailed/file-section-row';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'file-wrapper row' ],
  row: null, //passed-in
  restNamespace: null, //passed-in

  addContextPath(url) {
    url = `${this.get('restNamespace')}/${url}`;
    return url.replace(/[/]{2,}/, '/');
  },

  thumbnailLink: Ember.computed('row.thumbnail.retrieveLink', function() {
    if (Ember.isPresent(this.get('row.thumbnail.retrieveLink'))) {
      return this.addContextPath(this.get('row.thumbnail.retrieveLink'));
    }
    return undefined;
  }),

  originalLink: Ember.computed('row.original.retrieveLink', function() {
    if (Ember.isPresent(this.get('row.original.retrieveLink'))) {
      return this.addContextPath(this.get('row.original.retrieveLink'));
    }
    return undefined;
  })
});
