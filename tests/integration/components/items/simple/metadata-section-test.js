import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/simple/metadata-section', 'Integration | Component | items/simple/metadata section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/simple/metadata-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/simple/metadata-section}}
      template block text
    {{/items/simple/metadata-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
