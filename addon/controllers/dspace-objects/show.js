import Ember from 'ember';
import NamespaceMixin from '../../mixins/namespace';
import {
  getShowRouteForDSOType,
  fillParentsArray
} from '../../utils/dso-utils';

export default Ember.ObjectController.extend(NamespaceMixin, {
  parents: [],

  initParents: Ember.on('init', Ember.observer('model', function() {
    let model = this.get('model');
    this.set('parents', []);
    if (Ember.isPresent(model)) {
      fillParentsArray(this.store, model, this.get('parents'));
    }
  })),

  breadCrumbs: Ember.computed('model', 'parents.[]', function() {
    let result = [];
    if (this.get('parents').length > 0) {
      this.get('parents').reverse().forEach(function(parent) {
        result.push({
          label: parent.get('name'),
          path: getShowRouteForDSOType(parent.get('type')),
          model: parent
        });
      });
    }
    let model = this.get('model');
    let name = this.get('name');
    if (Ember.isPresent(model) && Ember.isPresent(name)) {
      result.push({
        label: name,
        model: model,
        linkable: false
      });
    }
    return result;
  })

});
