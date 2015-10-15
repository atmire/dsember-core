import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('items/detailed/collection-link', 'Integration | Component | items/detailed/collection link', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{items/detailed/collection-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#items/detailed/collection-link}}
      template block text
    {{/items/detailed/collection-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
