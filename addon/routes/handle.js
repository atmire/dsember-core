import Ember from 'ember';
import { getShowRouteForDSOType } from 'dsember-core/utils/dso-utils';

export default Ember.Route.extend({
  model(params) {
    let namespace = this.store.adapterFor('application').get('namespace');
    return Ember.$.getJSON(`${namespace}/handle/${params.handle_prefix}/${params.handle_postfix}?expand=all`).then((data) => {
      let model = this.store.push(this.store.normalize(data.type, data));
      let route = getShowRouteForDSOType(data.type);
      this.transitionTo(route, model);
    });
  }
});
