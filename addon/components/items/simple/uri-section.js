import Ember from 'ember';
import layout from '../../../templates/components/items/simple/uri-section';
import FieldValueSectionComponent from 'dsember-core/components/items/simple/field-value-section';

export default FieldValueSectionComponent.extend({
  layout: layout,
  head: Ember.computed('i18n.locale', function () {
    return this.get('i18n').t('item.simple.uri.head');
  }),
  classNames: ['simple-item-view-uri'],
  fields: ['dc.identifier.uri']
});
