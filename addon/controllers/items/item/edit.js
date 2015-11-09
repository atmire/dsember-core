import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumbs: Ember.computed('model', 'i18n.locale', function(){
    return [{
      label: this.get('i18n').t('trail.edit'),
      path: 'items.item.edit',
      model: this.get('model')
    }];
  })
});
