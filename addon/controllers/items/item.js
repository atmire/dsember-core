import Ember from 'ember';
import DSOShowController from 'dsember-core/controllers/dspace-objects/show';
import NamespaceMixin from 'dsember-core/mixins/namespace';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default DSOShowController.extend(NamespaceMixin, {
  session: Ember.inject.service('session'),
  title: Ember.computed('model.metadata.[]', function() {
    return this.get('model.metadata')
      .findBy('key', 'dc.title') //TODO handle multiple titles, and use UI language
      .get('value');
  }),

  fileRows: Ember.computed('model.originals.[]', function() {
    let result = [];
    this.get('model.originals').forEach((original) => {
      let thumbnail = this.get('model').getMatchingThumbnailFor(original);
      let row = Ember.Object.create({
        original: original,
        thumbnail: thumbnail
      });
      result.push(row);
    });
    return result;
  }),

  sidebarSections: Ember.computed('i18n.locale', 'model.id', 'session.isAuthenticated', function() {
    let result = [];
    if (this.get('session.isAuthenticated')) {
      result.push(SidebarSection.create({
        id: 'context-item',
        label: this.get('i18n').t('sidebar.context-item.head'),
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.context-item.edit'),
            link: {
              route: 'items.item.edit',
              id: this.get('model.id')
            }
          })
        ]
      }));
    }
    return result;
  })
});
