import DS from 'ember-data';
import { md5 } from 'dsember-core/utils/md5';

export default DS.JSONSerializer.extend({
  isNewSerializerAPI: true,
  normalize: function(typeClass, hash) {
    hash.id = md5(hash.key + hash.value + hash.language);
    return this._super.apply(this, arguments);
  }
});
