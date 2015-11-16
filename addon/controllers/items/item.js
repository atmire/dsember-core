import Ember from 'ember';
import DSOShowController from 'dsember-core/controllers/dspace-objects/show';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default DSOShowController.extend({
  session: Ember.inject.service('session'),
  title: Ember.computed('model.metadata.@each.value', function() {
    return this.get('model.metadata')
      .findBy('key', 'dc.title') //TODO handle multiple titles, and use UI language
      .get('value');
  }),

  sidebarSections: Ember.computed('i18n.locale', 'model.id', 'session.isAuthenticated', function() {
    return [
      SidebarSection.create({
        id: 'context-item',
        label: this.get('i18n').t('sidebar.context-item.head'),
        visible: this.get('session.isAuthenticated'),
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.context-item.view'),
            link: {
              route: 'items.item',
              id: this.get('model.id')
            }
          }),
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.context-item.edit'),
            link: {
              route: 'items.item.edit',
              id: this.get('model.id')
            }
          })
        ]
      })
    ];
  })
});
