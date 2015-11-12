import Ember from 'ember';

export default Ember.Controller.extend({
  bundleNames: Ember.computed('model.bitstreams.@each.bundleName', function () {
    return this.get('model.bitstreams').getEach('bundleName').uniq();
  }),

  //TODO refactor with proxiedMetadata in the metadata tab
  proxiedBitstreams: Ember.computed.map('model.bitstreams', function(bitstream) {
    return Ember.ObjectProxy.create({
      content: bitstream,
      flaggedForRemoval: false
    });
  }),

  proxiedBitstreamsFlaggedForRemoval: Ember.computed.filterBy('proxiedBitstreams', 'flaggedForRemoval', true),

  bitstreamsGroupedByBundle: Ember.computed('bundleNames', 'proxiedBitstreams.@each.bundleName', function () {
    let result = [];
    this.get('bundleNames').forEach((bundleName) => {
      let group = Ember.Object.create({
        name: bundleName,
        bitstreams: this.get('proxiedBitstreams').filterBy('bundleName', bundleName)
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
