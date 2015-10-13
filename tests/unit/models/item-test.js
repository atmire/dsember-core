import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Model | item', {
  // Specify the other units that are required for this test.
  needs: ['model:bitstream', 'model:parent-collection', 'model:metadatum']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
