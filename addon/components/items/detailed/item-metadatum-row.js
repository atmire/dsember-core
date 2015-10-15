import Ember from 'ember';
import layout from '../../../templates/components/items/detailed/item-metadatum-row';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tr',
  classNames: [ 'item-metadatum-row' ],
  metadatum: null //passed-in
});
