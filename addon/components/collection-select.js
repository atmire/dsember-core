import Ember from 'ember';
import layout from '../templates/components/collection-select';

export default Ember.Component.extend({
  layout: layout,
  classNameBindings: ['hasError',':form-group'],

  selectId: 'collectionSelect',
  hasChanged: false,

  collections: null, //passed-in
  value: null, //passed-in

  hasInvalidCollection: Ember.computed.not('hasValidCollection'),

  hasError: Ember.computed.and('hasInvalidCollection', 'hasChanged'),

  changeObserver: Ember.observer('value', function() {
    this.set('hasChanged', true);
  })
});
