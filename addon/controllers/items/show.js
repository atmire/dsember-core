import Ember from 'ember';

export default Ember.ObjectController.extend({
  title: Ember.computed('model.metadata.[]', function() {
    return this.get('model.metadata')
      .filterBy('key', 'dc.title')
      .get('firstObject') //TODO handle multiple titles, and use UI language
      .get('value');
  }),

  restNamespace: Ember.computed('store', function() {
    return this.store.adapterFor('application').get('namespace');
  }),

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
