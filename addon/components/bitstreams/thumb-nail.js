import Ember from 'ember';
import layout from '../../templates/components/bitstreams/thumb-nail';
import Holder from 'dsember-core/utils/holder';

export default Ember.Component.extend({
  layout: layout,
  classNames: [ 'thumbnail' ],
  runHolderJS: function() {
    if (Ember.isNone(this.get('thumbnailLink'))) {
      Ember.run.next(() => {
        Holder.run({
          images: this.$('img').get(0)
        });
      });
    }
  }.on('didInsertElement')
});
