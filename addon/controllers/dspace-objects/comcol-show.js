import Ember from 'ember';
import { combineURLParts } from '../../utils/url-utils';
import DSOShowController from '../dspace-objects/show';


export default DSOShowController.extend({
  logoUrl: Ember.computed('restNamespace', 'model.logo.retrieveLink', function() {
    if (Ember.isPresent(this.get('model.logo.retrieveLink'))) {
      return combineURLParts(this.get('restNamespace'), this.get('model.logo.retrieveLink'));
    }
    return undefined;
  })
});
