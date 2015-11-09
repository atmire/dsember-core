import Ember from 'ember';

export default Ember.Controller.extend({
  bundleNames: Ember.computed('model.bitstreams.@each.bundleName', function () {
    return this.get('model.bitstreams').getEach('bundleName').uniq();
  }),

  bitstreamsGroupedByBundle: Ember.computed('bundleNames', 'model.bitstreams.@each.bundleName', function () {
    let result = [];
    this.get('bundleNames').forEach((bundleName) => {
      let group = Ember.Object.create({
        name: bundleName,
        bitstreams: this.get('model.bitstreams').filterBy('bundleName', bundleName)
      });
      result.push(group);
    });
    return result;
  }),

  breadCrumbs: Ember.computed('model', 'i18n.locale', function () {
    return [{
      label: this.get('i18n').t('trail.edit.bitstreams'),
      path: 'items.item.edit.bitstreams',
      model: this.get('model')
    }];
  })
});
