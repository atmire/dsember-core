import Ember from 'ember';
import layout from '../../templates/components/side-bar/simple-section';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'section',
  className: 'sidebar-section'
});
