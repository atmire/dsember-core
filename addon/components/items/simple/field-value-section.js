import Ember from 'ember';
import layout from '../../../templates/components/items/simple/field-value-section';

export default Ember.Component.extend({
  layout: layout,
  separator: ';',
  valuesOnSeparateLines: false,
  headClassNames: [],
  bodyClassNames: [],
  head: null, //passed-in
  metadata: null, //passed-in
  field: null, //passed-in
  fields: null, //passed-in

  values: Ember.computed('field', 'fields', 'metadata.[]', function () {
    let field = this.get('field');
    let fields = this.get('fields');

    if (Ember.isBlank(fields)) {
      fields = [];
    }

    if (Ember.isPresent(field)) {
      fields.push(field);
    }

    let combinedElements = [];
    fields.forEach((field) => {
      let fieldElements = this.get('metadata').filterBy('key', field).mapBy('value');
      combinedElements = combinedElements.concat(fieldElements);
    });

    return combinedElements.uniq();
  }),

  valuesAsString: Ember.computed('values', 'separator', function() {
    return this.get('values').join(`${this.get('separator')} `);
  })
});
