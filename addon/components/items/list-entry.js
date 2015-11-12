import Ember from 'ember';
import layout from '../../templates/components/items/list-entry';
import { chainableFindBy } from 'dsember-core/utils/array-utils';

export default Ember.Component.extend({
  layout: layout,
  item: null, //passed-in,
  classNames: ['list-entry'],

  // I can simply observe the elements in the array,
  // because if metadata changes, the whole array is
  // thrown away and recreated, because that's how
  // it works in DSpace
  title: Ember.computed('item.metadata.[]', 'i18n.locale', function() {
    let title = chainableFindBy(this.get('item.metadata'), 'key', 'dc.title').get('value');
    if (Ember.isEmpty(title)) {
      title = this.get('i18n').t('item.list.no-title');
    }
    return title;
  }),
  author: Ember.computed('item.metadata.[]', function() {
    let authors = this.get('item.metadata').filterBy('key', 'dc.contributor.author').mapBy('value');
    let creators = this.get('item.metadata').filterBy('key', 'dc.creator').mapBy('value');
    return authors.concat(creators).uniq().join('; ');
  }),
  date: Ember.computed('item.metadata.[]', function() {
    return chainableFindBy(this.get('item.metadata'), 'key', 'dc.date.issued').get('value');
  }),
  abstract: Ember.computed('item.metadata.[]', function() {
    return chainableFindBy(this.get('item.metadata'), 'key', 'dc.description.abstract').get('value');
  })
});
