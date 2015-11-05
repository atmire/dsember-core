import Ember from 'ember';

export default Ember.Route.extend({
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
    cancel(model) {
      this.transitionTo('items.item', model);
      return false;
    },
    update(model) {
      model.save().then((item) => {
        this.transitionTo('items.item', item);
        this.get('flashMessages').success(this.get('i18n').t('item.edit.success'));
      }, () => {
        this.get('flashMessages').danger(this.get('i18n').t('item.edit.error.unknown'));
      });
      this.transitionTo('items.item');
      return false;
    }
  }
});
