import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    if (Ember.isEmpty(tokens)) {
      return  this.get('i18n').t('title.prefix');
    }
    else {
      return  `${this.get('i18n').t('title.prefix')} - ${tokens.join(' - ')}`;
    }
  },

  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      this.transitionTo('404');
    }
  }
});
