import Ember from 'ember';
import NamespaceMixin from '../../../mixins/namespace';
import { module, test } from 'qunit';

module('Unit | Mixin | namespace');

// Replace this with your real tests.
test('it works', function(assert) {
  var NamespaceObject = Ember.Object.extend(NamespaceMixin);
  var subject = NamespaceObject.create();
  assert.ok(subject);
});
