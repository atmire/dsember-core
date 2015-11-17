import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/simple/simple-item-view-section', 'Integration | Component | items/simple/simple item view section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/simple/simple-item-view-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/simple/simple-item-view-section}}
      template block text
    {{/items/simple/simple-item-view-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
