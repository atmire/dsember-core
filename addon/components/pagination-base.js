import Ember from 'ember';
import layout from '../templates/components/pagination-base';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'li',
  classNameBindings: ['isDisabled:disabled'],
  attributeBindings: ['isDisabled:disabled'],
  isEnabled: true,
  isDisabled: Ember.computed.not('isEnabled'),
  action: null,
  click: function(){
    if (this.get('isEnabled')) {
      this.sendAction();
    }
  }
});
