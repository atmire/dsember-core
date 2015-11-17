import Ember from 'ember';

export default Ember.Controller.extend({
  /* The REST API doesn't return what the primary bitstream is,
   * so here we first look for one with a thumbnail, if none is
   * found, return the first in the ORIGINAL bundle
   */
  primaryBitstream: Ember.computed('model', 'model.originals.[]', function() {
    let original;
    let originalWithThumbnail = this.get('model.originals').find((original) => {
      let thumbnail = this.get('model').getMatchingThumbnailFor(original);
      return Ember.isPresent(thumbnail);
    });
    if (Ember.isPresent(originalWithThumbnail)) {
      original = originalWithThumbnail;
    }
    else {
      original = this.get('model.originals.firstObject');
    }
    return original;
  }),
  primaryThumbnail: Ember.computed('model', 'primaryBitstream', function() {
    return this.get('model').getMatchingThumbnailFor(this.get('primaryBitstream'));
  })
});
