import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function() {
    return  this.get('i18n').t('title.edit.bitstreams');
  }
});
