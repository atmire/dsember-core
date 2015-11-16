import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),

  replaceFileEndpointURL: function (adapter, bitstreamId) {
    return adapter.buildURL('bitstream', bitstreamId) + '/data';
  },

  actions: {
    willTransition(transition) {
      if (this.controller.get('hasUnsavedChanges') && !confirm(this.get('i18n').t('bitstream.edit.confirm-exit'))) {
        transition.abort();
      }
      else {
        return true;
      }
    },
    save(bitstream) {
      bitstream.save().then(() => {
        this.get('flashMessages').success(this.get('i18n').t('bitstream.edit.metadata.success'));
      }, (error) => {
        // the REST API returns 200, without any json, but ember expects a json representation
        // of the bitstream, so if it's a syntax error it means it succeeded
        if (error.name === "SyntaxError") {
          let model = this.modelFor('bitstreams.bitstream');
          model.reload().then(() => {
            this.get('flashMessages').success(this.get('i18n').t('bitstream.edit.metadata.success'));
          });
        }
        else {
          this.get('flashMessages').danger(this.get('i18n').t('bitstream.edit.error.unknown'));
        }
      });
    },
    uploadReplacementFile(bitstream, newFile) {
      const adapter = this.store.adapterFor('bitstream');
      const url = this.replaceFileEndpointURL(adapter, bitstream.get('id'));

      return this.get('session').authorize('authorizer:dspace', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        return Ember.$.ajax({
          url: url,
          method: 'PUT',
          headers: headers,
          data: newFile.data,
          processData: false,
          success: () => {
            this.get('flashMessages').success(this.get('i18n').t('bitstream.edit.replace.success'));
            this.controller.reloadFileInput();
          },
          error: (error) => {
            if (error.name === "SyntaxError") {
              let model = this.modelFor('bitstreams.bitstream');
              model.reload().then(() => {
                this.get('flashMessages').success(this.get('i18n').t('bitstream.edit.metadata.success'));
                this.controller.reloadFileInput();
              });
            }
            else {
              this.get('flashMessages').danger(this.get('i18n').t('bitstream.edit.error.unknown'));
            }
          }
        });
      });
    },
    cancel(parentRoute, model) {
      this.transitionTo(`${parentRoute}.edit.bitstreams`, model);
      return false;
    }
  }
});
