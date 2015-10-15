import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bitstreams/detailed/file-link', 'Integration | Component | bitstreams/detailed/file link', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bitstreams/detailed/file-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bitstreams/detailed/file-link}}
      template block text
    {{/bitstreams/detailed/file-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
