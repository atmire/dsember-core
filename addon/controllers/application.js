import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: Ember.computed('i18n.locale', function() {
    return this.get('i18n').t('trail.home');
  })
});
