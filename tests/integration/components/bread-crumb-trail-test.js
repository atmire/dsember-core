import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bread-crumb-trail', 'Integration | Component | bread crumb trail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bread-crumb-trail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bread-crumb-trail}}
      template block text
    {{/bread-crumb-trail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
