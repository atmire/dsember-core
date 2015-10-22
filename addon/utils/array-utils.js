import Ember from 'ember';

function chainableFindBy(array, key, value) {
  let result = array.findBy(key, value);
  if (Ember.isNone(result)) {
    result = Ember.Object.create();
  }
  return result;
}
export {
  chainableFindBy
};
