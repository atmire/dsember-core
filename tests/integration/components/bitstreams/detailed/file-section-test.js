import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bitstreams/detailed/file-section', 'Integration | Component | bitstreams/detailed/file section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bitstreams/detailed/file-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bitstreams/detailed/file-section}}
      template block text
    {{/bitstreams/detailed/file-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
