import Ember from 'ember';
import FieldValueSectionComponent from 'dsember-core/components/items/simple/field-value-section';

export default FieldValueSectionComponent.extend({
  head: Ember.computed('i18n.locale', function () {
    return this.get('i18n').t('item.simple.date.head');
  }),
  classNames: ['simple-item-view-date'],
  valuesOnSeparateLines: true,
  fields: ['dc.date.issued']
});
