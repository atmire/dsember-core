import Ember from 'ember';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default Ember.Controller.extend({
  breadCrumb: Ember.computed('i18n.locale', function() {
    return this.get('i18n').t('trail.home');
  }),
  isSidebarCollapsed: true,
  actions: {
    toggleSidebarCollapse() {
      this.toggleProperty('isSidebarCollapsed');
      return false;
    },
    collapseSidebar() {
      this.set('isSidebarCollapsed', true);
    }
  },

  sidebarSections: Ember.computed('i18n.locale', function() {
    return [
      SidebarSection.create({
        id: 'my-account',
        label: this.get('i18n').t('sidebar.my-account.head'),
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.my-account.login'),
            link: {
              route: 'items.show',
              id: 1
            }
          }),
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.my-account.register'),
            link: {
              route: 'items.show',
              id: 2
            }
          })
        ]
      })
    ]
  })
});
