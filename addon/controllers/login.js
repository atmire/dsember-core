import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  breadCrumb: Ember.computed('i18n.locale', function() {
    return this.get('i18n').t('trail.login');
  }),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:dspace', identification, password).then(() => {
        this.get('flashMessages').success(this.get('i18n').t('login.success'));
      }).catch((reason) => {
        if (reason.match(/HTTP Status 403 - Forbidden/)) {
          this.get('flashMessages').danger(this.get('i18n').t('login.error.403'));
        }
        else {
          this.get('flashMessages').danger(this.get('i18n').t('login.error.unknown'));
        }
      });
    }
  }
});
