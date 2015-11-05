import Ember from 'ember';
import NamespaceMixin from 'dsember-core/mixins/namespace';

export default Ember.Controller.extend(NamespaceMixin, {
  //TODO rewrite using Ember.ObjectProxy -> https://poeticsystems.com/blog/ember-checkboxes-and-you
  fileRows: Ember.computed('model.originals.[]', function() {
    let result = [];
    this.get('model.originals').forEach((original) => {
      let thumbnail = this.get('model').getMatchingThumbnailFor(original);
      let row = Ember.Object.create({
        original: original,
        thumbnail: thumbnail
      });
      result.push(row);
    });
    return result;
  })

});
