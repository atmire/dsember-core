import Ember from 'ember';
import layout from '../../templates/components/side-bar/simple-section-element';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['sidebar-simple-section-element'],
  hasLink: Ember.computed.notEmpty('model.link'),
  hasRoute: Ember.computed.notEmpty('model.link.route'),
  hasId: Ember.computed.notEmpty('model.link.id'),
  hasAction: Ember.computed.notEmpty('model.link.action'),
  hasRouteOrAction: Ember.computed.or('hasRoute', 'hasAction'),
  hasValidLink: Ember.computed.and('hasLink', 'hasRouteOrAction'),
  click: function() {
    if (this.get('hasAction')) {
      // I don't like this explicit lookup of the application controller,
      // but haven't found a good way of ensuring variable actions bubble
      // up through nested components
      this.container.lookup('controller:application').send(this.get('model.link.action'));
    }
    if (this.get('hasRouteOrAction')) {
      this.container.lookup('controller:application').send('collapseSidebar');
    }
    return false;
  }
});
