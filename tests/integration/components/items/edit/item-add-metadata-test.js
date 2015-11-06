import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/edit/item-add-metadata', 'Integration | Component | items/edit/item add metadata', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/edit/item-add-metadata}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/edit/item-add-metadata}}
      template block text
    {{/items/edit/item-add-metadata}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
