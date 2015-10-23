import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comcols/list-entry', 'Integration | Component | comcols/list entry', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comcols/list-entry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comcols/list-entry}}
      template block text
    {{/comcols/list-entry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
