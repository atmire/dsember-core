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

  sidebarSections: [
    SidebarSection.create({
      id: 'my-account',
      label: 'My Account',
      children: [
        SidebarSection.create({
          label: 'Login',
          link: {
            route: 'items.show',
            id: 1
          }
        }),
        SidebarSection.create({
          label: 'Register',
          link: {
            route: 'items.show',
            id: 2
          }
        }),
        SidebarSection.create({
          id: 'my-account',
          label: 'My Account',
          children: [
            SidebarSection.create({
              label: 'Login',
              link: {
                route: 'items.show',
                id: 1
              }
            }),
            SidebarSection.create({
              label: 'Register',
              link: {
                route: 'items.show',
                id: 2
              }
            })
          ]
        })
      ]

    }),
    SidebarSection.create({
      id: 'my-account',
      label: 'My Account',
      children: [
        SidebarSection.create({
          label: 'Login',
          link: {
            route: 'items.show',
            id: 1
          }
        }),
        SidebarSection.create({
          label: 'Register',
          link: {
            route: 'items.show',
            id: 2
          }
        }),
        SidebarSection.create({
          id: 'my-account',
          label: 'My Account',
          children: [
            SidebarSection.create({
              label: 'Login',
              link: {
                route: 'items.show',
                id: 1
              }
            }),
            SidebarSection.create({
              label: 'Register',
              link: {
                route: 'items.show',
                id: 2
              }
            })
          ]
        })
      ]

    })
  ]

});
