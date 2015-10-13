import DS from 'ember-data';
import { md5 } from '../utils/md5-helper';

export default DS.JSONSerializer.extend({
  normalize: function(typeClass, hash) {
    hash.id = md5(hash.key + hash.value + hash.language);
    return this._super.apply(this, arguments);
  }
});
