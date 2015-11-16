import Ember from 'ember';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default Ember.Controller.extend({
  isSidebarCollapsed: true,
  session: Ember.inject.service('session'),

  breadCrumb: Ember.computed('i18n.locale', function () {
    return this.get('i18n').t('trail.home');
  }),

  actions: {
    toggleSidebarCollapse() {
      this.toggleProperty('isSidebarCollapsed');
      return false;
    },
    collapseSidebar() {
      this.set('isSidebarCollapsed', true);
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  },

  sidebarSections: Ember.computed('i18n.locale', 'session.isAuthenticated', function () {
    var isAuthenticated = this.get('session.isAuthenticated');
    return [
      SidebarSection.create({
        id: 'my-account',
        label: this.get('i18n').t('sidebar.my-account.head'),
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.my-account.login'),
            visible: !isAuthenticated,
            link: {
              route: 'login'
            }
          }),
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.my-account.logout'),
            visible: isAuthenticated,
            link: {
              action: 'invalidateSession'
            }
          })
        ]
      }),
      SidebarSection.create({
        id: 'submissions',
        label: this.get('i18n').t('sidebar.submissions.head'),
        visible: isAuthenticated,
        children: [
          SidebarSection.create({
            label: this.get('i18n').t('sidebar.submissions.submit'),
            link: {
              route: 'items.new'
            }
          })
        ]
      })
    ];
  })
});
