import Ember from 'ember';
import {
  getShowRouteForDSOType,
  fillParentsArray
} from '../../utils/dso-utils';

export default Ember.Controller.extend({
  parents: [],

  initParents: Ember.on('init', Ember.observer('model', function() {
    let model = this.get('model');
    this.set('parents', []);
    if (Ember.isPresent(model)) {
      fillParentsArray(this.store, model, this.get('parents'));
    }
  })),

  breadCrumbs: Ember.computed('model.name', 'parents.[]', function() {
    let result = [];
    if (this.get('parents').length > 0) {
      // the slice is here to make a copy of the array before it gets reversed,
      // reverse() will modify the original
      this.get('parents').slice().reverse().forEach(function(parent) {
        result.push({
          label: parent.get('name'),
          path: getShowRouteForDSOType(parent.get('type')),
          model: parent
        });
      });
    }
    let model = this.get('model');
    let name = model.get('name');
    if (Ember.isPresent(model) && Ember.isPresent(name)) {
      result.push({
        label: name,
        model: model
      });
    }
    return result;
  })

});
