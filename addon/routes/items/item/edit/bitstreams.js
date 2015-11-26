import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function() {
    return  this.get('i18n').t('title.edit.bitstreams');
  },
  actions: {
    delete() {
      let promisesArray = [];
      this.controller.get('proxiedBitstreamsFlaggedForRemoval').forEach(function(bitstream) {
        promisesArray.push(bitstream.get('content').destroyRecord());
      });
      Ember.RSVP.allSettled(promisesArray).then((/*array*/) => {

        // the REST API returns 200, without any json, but ember expects a json representation,
        // so it will always claim it failed. So for now, we won't post any notification

        //if (Ember.isEmpty(array.filterBy('state', 'rejected'))) {
        //  this.get('flashMessages').success(this.get('i18n').t('item.edit.bitstreams.remove.success'));
        //}
        //else {
        //  this.get('flashMessages').danger(this.get('i18n').t('item.edit.bitstreams.remove.error'));
        //}

      });
    },
    cancel(model) {
      this.transitionTo('items.item', model);
      return false;
    }
  }
});
