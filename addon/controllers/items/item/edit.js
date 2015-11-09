import Ember from 'ember';

export default Ember.Controller.extend({
  proxiedMetadata: Ember.computed.map('model.metadata', function (metadatum) {
    return Ember.ObjectProxy.create({
      content: metadatum,
      flaggedForRemoval: false
    });
  }),

  proxiedFieldsFlaggedForRemoval: Ember.computed.filterBy('proxiedMetadata', 'flaggedForRemoval', true),

  dirtyMetadata: Ember.computed.filterBy('model.metadata', 'isDirty'),
  hasUnsavedChanges: Ember.computed.notEmpty('dirtyMetadata'),

  actions: {
    update(model) {
      let fieldIDsFlaggedForRemoval = this.get('proxiedFieldsFlaggedForRemoval').mapBy('id');
      let remainingFields = model.get('metadata').filter(function(metadatum) {
        return !fieldIDsFlaggedForRemoval.contains(metadatum.get('id'));
      });
      model.set('metadata', remainingFields);
      return true; //save happens in the route
    },
    add(model, key, value, lang) {
      //need send because component actions don't bubble automatically
      this.send('addMetadatum', model, key, value, lang);
    }
  },

  breadCrumbs: Ember.computed('model', 'i18n.locale', function(){
    return [{
      label: this.get('i18n').t('trail.edit'),
      path: 'items.item.edit',
      model: this.get('model')
    }];
  })
});
