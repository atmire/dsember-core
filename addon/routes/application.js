import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    error: function (error) {
      Ember.Logger.error(error);
      this.replaceWith('/404');
    }
  }
});
