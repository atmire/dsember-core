import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bitstreams/detailed/file-metadata', 'Integration | Component | bitstreams/detailed/file metadata', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bitstreams/detailed/file-metadata}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bitstreams/detailed/file-metadata}}
      template block text
    {{/bitstreams/detailed/file-metadata}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
