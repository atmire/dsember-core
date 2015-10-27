import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('side-bar/simple-section-element', 'Integration | Component | side bar/simple section element', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{side-bar/simple-section-element}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#side-bar/simple-section-element}}
      template block text
    {{/side-bar/simple-section-element}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
