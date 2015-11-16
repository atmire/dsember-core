import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  titleToken: function () {
    return this.get('i18n').t('title.items.new');
  },

  model() {
    return this.store.createRecord('item');
  },

  setupController: function (controller, model) {
    this._super(controller, model);
    controller.setProperties({
      model: model,
      collections: this.store.findAll('collection'),
      highlightErrors: false
    });
  },

  actions: {
    addMetadatum(item, key, value, lang) {
      this.store.createRecord('metadatum', {
        key: key,
        value: value,
        language: lang,
        dspaceObject: item
      });
      this.get('flashMessages').info(this.get('i18n').t('item.edit.metadata.field-added'));
    },
    submit(model) {
      let metadataBeforeSave = model.get('metadata').toArray();
      model.save().then((item) => {
        /* Reload is necessary because DSpace returns an incomplete
         * item object as a response to /new
         *
         * Deleting metadata client-side is necessary, because metadata
         * objects in the REST API don't get an ID, so they'll be
         * duplicated when they're reloaded from the server.
         */
        for (let metadatum of metadataBeforeSave) {
          metadatum.deleteRecord();
        }
        item.reload().then((item) => {
          this.transitionTo('items.item', item);
        });
      }, (/*error*/) => {
        this.get('flashMessages').danger(this.get('i18n').t('item.new.error.save'));
      });
    }
  }
});
