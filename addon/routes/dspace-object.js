import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return get(model, 'name');
  }
});
