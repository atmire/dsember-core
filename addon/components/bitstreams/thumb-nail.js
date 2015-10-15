import Ember from 'ember';
import layout from '../../templates/components/bitstreams/thumb-nail';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'thumbnail' ],
  bitstream: null //passed-in
});
