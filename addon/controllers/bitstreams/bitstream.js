import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumbs: Ember.computed('model.name', function(){
    return [{
      label: this.get('model.name'),
      linkable: false
    }];
  })
});
