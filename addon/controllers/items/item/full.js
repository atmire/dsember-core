import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumbs: Ember.computed('model', 'i18n.locale', function () {
    return [{
      label: this.get('i18n').t('trail.items.item.full'),
      path: 'items.item.full',
      model: this.get('model')
    }];
  }),
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
