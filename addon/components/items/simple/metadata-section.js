import Ember from 'ember';
import layout from '../../../templates/components/items/simple/metadata-section';

export default Ember.Component.extend({
  layout: layout,
  head: Ember.computed('i18n.locale', function () {
    return this.get('i18n').t('item.simple.metadata.head');
  }),
  classNames: ['simple-item-view-metadata']
});
