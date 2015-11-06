import Ember from 'ember';
import layout from '../../../templates/components/items/edit/item-metadata-edit-table';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'table',
  classNames: ['table', 'table-striped', 'hover']
});
