import Ember from 'ember';
import DSOShowController from '../dspace-objects/show';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default DSOShowController.extend({
  sidebarSections: Ember.computed('i18n.locale', 'model.id', function() {
    return [
      SidebarSection.create({
        id: 'context-collection',
        label: this.get('i18n').t('sidebar.context-collection.head'),
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.context-collection.home'),
            link: {
              route: 'collections.collection.home',
              id: this.get('model.id')
            }
          }),
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.context-collection.browse'),
            link: {
              route: 'collections.collection.items',
              id: this.get('model.id')
            }
          })
        ]
      })
    ];
  })
});
