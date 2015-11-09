import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  resetController(controller, isExiting) {
    if (isExiting) {
      let model = controller.get('model');
      model.get('metadata').forEach(function(metadatum){
        metadatum.rollback();
      });
      model.rollback();
    }
  },
  actions: {
    willTransition(transition) {
      if (this.controller.get('hasUnsavedChanges') &&
        !confirm(this.get('i18n').t('item.edit.confirm-exit'))) {
        transition.abort();
      }
      else {
        return true;
      }
    },
    cancel(model) {
      this.transitionTo('items.item', model);
      return false;
    },
    update(model) {
      model.save().then(() => {
        this.get('flashMessages').success(this.get('i18n').t('item.edit.success'));
      }, (error) => {
        // the REST API returns 200, without any json, but ember expects a json representation
        // of the item, so if it's a syntax error it means it succeeded
        if (error.name === "SyntaxError") {
          let model = this.modelFor('items.item');
          model.rollbackAttributes();
          model.reload().then(() => {
            this.get('flashMessages').success(this.get('i18n').t('item.edit.success'));
          });
        }
        else {
          this.get('flashMessages').danger(this.get('i18n').t('item.edit.error.unknown'));
        }
      });
      return false;
    },
    addMetadatum(item, key, value, lang) {
      this.store.createRecord('metadatum', {
        key: key,
        value: value,
        language: lang,
        dspaceObject: item
      });
      this.get('flashMessages').info(this.get('i18n').t('item.edit.field-added'));
    }
  }
});
