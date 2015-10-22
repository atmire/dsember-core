import Ember from 'ember';
import Paginated from 'dsember-core/mixins/paginated';

export default Ember.ArrayController.extend(Paginated, {
  total: Ember.computed('collection.numberItems', function() {
    return this.get('collection.numberItems');
  }),
  breadCrumb: Ember.computed('i18n.locale', function() {
    return this.get('i18n').t('comcol.browse.trail');
  })
});
