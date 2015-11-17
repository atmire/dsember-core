import Ember from 'ember';
import layout from '../../../templates/components/items/simple/simple-item-view-section';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['simple-item-view-section'],
  headClassNames: [],
  bodyClassNames: [],
  head: null, //passed-in,

  headClassString: Ember.computed('headClassNames', function () {
    return this.get('headClassNames').join(' ');
  }),
  bodyClassString: Ember.computed('bodyClassNames', function () {
    return this.get('bodyClassNames').join(' ');
  })
});
