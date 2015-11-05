import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/edit/item-metadatum-edit-row', 'Integration | Component | items/edit/item metadatum edit row', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/edit/item-metadatum-edit-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/edit/item-metadatum-edit-row}}
      template block text
    {{/items/edit/item-metadatum-edit-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
