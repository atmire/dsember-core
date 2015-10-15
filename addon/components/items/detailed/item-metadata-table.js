import Ember from 'ember';
import layout from '../../../templates/components/items/detailed/item-metadata-table';

export default Ember.Component.extend({
  layout: layout ,
  classNames: [ 'table-responsive' ],
  item: null //passed-in
});
