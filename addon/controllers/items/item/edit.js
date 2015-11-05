import Ember from 'ember';

export default Ember.Controller.extend({
  proxiedMetadata: Ember.computed.map('model.metadata', function (metadatum) {
    return Ember.ObjectProxy.create({
      content: metadatum,
      flaggedForRemoval: false
    });
  }),

  proxiedFieldsFlaggedForRemoval: Ember.computed.filterBy('proxiedMetadata', 'flaggedForRemoval', true),

  actions: {
    update(model) {
      let fieldIDsFlaggedForRemoval = this.get('proxiedFieldsFlaggedForRemoval').mapBy('id');
      let remainingFields = model.get('metadata').filter(function(metadatum) {
        return !fieldIDsFlaggedForRemoval.contains(metadatum.get('id'));
      });
      model.set('metadata', remainingFields);
      return true; //save happens in the route
    }
  }
});
