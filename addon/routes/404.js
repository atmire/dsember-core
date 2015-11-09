import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
    let url = this.router.location.formatURL('/404');
    if (window.location.pathname !== url) {
      this.replaceWith('/404');
    }
  }
});
