import Ember from 'ember';

export default Ember.Controller.extend({
  title: Ember.computed('model.metadata.[]', function() {
    return this.get('model.metadata')
      .filterBy('key', 'dc.title')
      .get('firstObject') //TODO handle multiple titles, and use UI language
      .get('value');
  })
});
