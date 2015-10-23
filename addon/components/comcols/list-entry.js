import Ember from 'ember';
import layout from '../../templates/components/comcols/list-entry';
import { getShowRouteForDSOType } from 'dsember-core/utils/dso-utils';

export default Ember.Component.extend({
  layout: layout,
  model: null, //passed-in
  classNames: ['list-entry'],
  route: Ember.computed('model.type', function() {
    if (Ember.isPresent(this.get('model.type'))) {
      return getShowRouteForDSOType(this.get('model.type'));
    }
    else {
      return undefined;
    }
  })
});
