import Ember from 'ember';
import layout from '../../../templates/components/items/edit/item-metadatum-edit-row';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tr',
  classNames: [ 'item-metadatum-edit-row' ],
  classNameBindings: [ 'metadatum.flaggedForRemoval' ],
  metadatum: null //passed-in
});
