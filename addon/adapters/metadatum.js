import DS from 'ember-data';
import { generateUUID } from 'dsember-core/utils/uuid';

export default DS.RESTAdapter.extend({
  generateIdForRecord: function (/*store, type, inputProperties*/) {
    return generateUUID();
  }
});
