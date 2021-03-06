import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/detailed/collection-section', 'Integration | Component | items/detailed/collection section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/detailed/collection-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/detailed/collection-section}}
      template block text
    {{/items/detailed/collection-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
