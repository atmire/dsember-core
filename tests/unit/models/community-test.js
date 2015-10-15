import { moduleForModel, test } from 'ember-qunit';

moduleForModel('community', 'Unit | Model | community', {
  // Specify the other units that are required for this test.
  needs: ['model:logo', 'model:parent-community', 'model:subcommunity', 'model:collection']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
