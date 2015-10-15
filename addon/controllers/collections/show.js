import Ember from 'ember';
import NamespaceMixin from '../../mixins/namespace';
import { combineURLParts } from '../../utils/url-utils';

export default Ember.ObjectController.extend(NamespaceMixin, {
  logoUrl: Ember.computed('restNamespace', 'model.logo.retrieveLink', function() {
    if (Ember.isPresent(this.get('model.logo.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('model.logo.retrieveLink'));
    }
    return undefined;
  })
});
