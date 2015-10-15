import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/detailed/item-metadata-table', 'Integration | Component | items/detailed/item metadata table', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/detailed/item-metadata-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/detailed/item-metadata-table}}
      template block text
    {{/items/detailed/item-metadata-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
