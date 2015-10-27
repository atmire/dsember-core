import Ember from 'ember';
import layout from '../../templates/components/side-bar/simple-section-element';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  className: 'sidebar-simple-section-element'
});
