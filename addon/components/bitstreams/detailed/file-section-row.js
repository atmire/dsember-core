import Ember from 'ember';
import layout from '../../../templates/components/bitstreams/detailed/file-section-row';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'file-wrapper row' ],
  row: null //passed-in
});
