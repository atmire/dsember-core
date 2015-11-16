import Ember from 'ember';
import { chainableFindBy } from 'dsember-core/utils/array-utils';

export default Ember.Controller.extend({
  collections: null, //filled by route during setupController

  proxiedMetadata: Ember.computed.map('model.metadata', function (metadatum) {
    return Ember.ObjectProxy.create({
      content: metadatum,
      flaggedForRemoval: false
    });
  }),

  proxiedFieldsFlaggedForRemoval: Ember.computed.filterBy('proxiedMetadata', 'flaggedForRemoval', true),

  dirtyMetadata: Ember.computed.filterBy('model.metadata', 'isDirty'),

  hasUnsavedChanges: Ember.computed.notEmpty('dirtyMetadata'),

  hasCollection: Ember.computed('model.parentCollectionId', 'collections', function () {
    let collection = this.get('collections').findBy('id', this.get('model.parentCollectionId'));
    return Ember.isPresent(collection);
  }),

  hasTitle: Ember.computed('model.metadata.[]', function() {
    let title = chainableFindBy(this.get('model.metadata'), 'key', 'dc.title').get('value');
    return Ember.isPresent(title);
  }),

  hasAuthor: Ember.computed('model.metadata.[]', function() {
    let author = chainableFindBy(this.get('model.metadata'), 'key', 'dc.contributor.author').get('value');
    return Ember.isPresent(author);
  }),

  isValid: Ember.computed.and('hasCollection', 'hasTitle', 'hasAuthor'),

  actions: {
    add(model, key, value, lang) {
      //need send because component actions don't bubble automatically
      this.send('addMetadatum', model, key, value, lang);
    },
    remove(model) {
      let fieldIDsFlaggedForRemoval = this.get('proxiedFieldsFlaggedForRemoval').mapBy('id');
      let remainingFields = model.get('metadata').filter(function (metadatum) {
        return !fieldIDsFlaggedForRemoval.contains(metadatum.get('id'));
      });
      model.set('metadata', remainingFields);
      return false; //no need to bubble, the model isn't saved yet.
    },
    submit(model) {
      if (!this.get('hasCollection')) {
        this.get('flashMessages').danger(this.get('i18n').t('item.new.select.collection.error'));
      }
      if (!this.get('hasTitle')) {
        this.get('flashMessages').danger(this.get('i18n').t('item.new.error.title'));
      }
      if (!this.get('hasAuthor')) {
        this.get('flashMessages').danger(this.get('i18n').t('item.new.error.author'));
      }
      this.set('highlightErrors', true);

      return this.get('isValid');
    }
  },

  breadCrumbs: Ember.computed('model', 'i18n.locale', function () {
    return [{
      label: this.get('i18n').t('trail.items.new'),
      path: 'items.new'
    }];
  })
});
