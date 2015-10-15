import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bitstreams/thumb-nail', 'Integration | Component | bitstreams/thumb nail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bitstreams/thumb-nail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bitstreams/thumb-nail}}
      template block text
    {{/bitstreams/thumb-nail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
