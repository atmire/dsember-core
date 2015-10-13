import { moduleForModel, test } from 'ember-qunit';

moduleForModel('dspace-object', 'Unit | Model | dspace object', {
  // Specify the other units that are required for this test.
  needs: ['model:metadatum']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
