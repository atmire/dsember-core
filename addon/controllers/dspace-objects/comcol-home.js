import Ember from 'ember';
import NamespaceMixin from 'dsember-core/mixins/namespace';
import { combineURLParts } from 'dsember-core/utils/url-utils';


export default Ember.Controller.extend(NamespaceMixin, {
  logoUrl: Ember.computed('restNamespace', 'model.logo.retrieveLink', function() {
    if (Ember.isPresent(this.get('model.logo.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('model.logo.retrieveLink'));
    }
    return undefined;
  })
});
