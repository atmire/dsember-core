import Ember from 'ember';
import layout from '../../../templates/components/items/edit/item-bitstream-edit-row';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'tr',
  classNames: [ 'item-bitstream-edit-row' ],
  classNameBindings: [ 'bitstream.flaggedForRemoval' ],
  bitstream: null //passed-in
});
