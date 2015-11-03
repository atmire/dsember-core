import Ember from 'ember';
import SidebarSection from 'dsember-core/utils/sidebar-section';

export default Ember.Controller.extend({
  isSidebarCollapsed: true,
  session: Ember.inject.service('session'),
  //session: Ember.Object.create({
  //  isAuthenticated: true,
  //  invalidate: function() {
  //    this.set('isAuthenticated', false)
  //  }
  //}),

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
    let children = [];
    if (this.get('session.isAuthenticated')) {
      children.push(SidebarSection.create({
        label: this.get('i18n').t('sidebar.my-account.logout'),
        link: {
          action: 'invalidateSession'
        }
      }));
    }
    else {
      children.push(SidebarSection.create({
        label: this.get('i18n').t('sidebar.my-account.login'),
        link: {
          route: 'login'
        }
      }));
      //children.push(SidebarSection.create({
      //  label: this.get('i18n').t('sidebar.my-account.register'),
      //  link: {
      //    route: 'items.show',
      //    id: 2
      //  }
      //}));
    }
    return [
      SidebarSection.create({
        id: 'my-account',
        label: this.get('i18n').t('sidebar.my-account.head'),
        children: children
      })
    ];
  })
});
