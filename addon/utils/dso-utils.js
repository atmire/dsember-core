import Ember from 'ember';

function getShowRouteForDSOType(type) {
  return `${Ember.Inflector.inflector.pluralize(type)}.show`;
}

function fillParentsArray(store, dso, parentsArray) {
  let parentId = dso.get('parentId');
  let parentType = dso.get('parentType');
  if (Ember.isPresent(parentId) && Ember.isPresent(parentType)) {
    store.find(parentType, parentId).then(function(parent) {
      if (Ember.isPresent(parent)) {
        parentsArray.pushObject(parent);
        fillParentsArray(store, parent, parentsArray);
      }
    });
  }
}

export {
  getShowRouteForDSOType,
  fillParentsArray
};
