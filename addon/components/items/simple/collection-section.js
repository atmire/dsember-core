import Ember from 'ember';
import layout from '../../../templates/components/items/simple/collection-section';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['simple-item-view-collections'],
  head: Ember.computed('i18n.locale', function () {
    return this.get('i18n').t('item.simple.collections.head');
  })
});
