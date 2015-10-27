import Ember from 'ember';

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
    {
      id: 'my-account',
      componentName: 'side-bar/simple-section',
      label: 'My Account',
      children: [
        {
          componentName: 'side-bar/simple-section-element',
          label: 'Login',
          link: {
            route: 'items.show',
            id: 1
          }
        },
        {
          componentName: 'side-bar/simple-section-element',
          label: 'Register',
          link: {
            route: 'items.show',
            id: 2
          }
        },
        {
          id: 'my-account',
          componentName: 'side-bar/simple-section',
          label: 'My Account',
          children: [
            {
              componentName: 'side-bar/simple-section-element',
              label: 'Login',
              link: {
                route: 'items.show',
                id: 1
              }
            },
            {
              componentName: 'side-bar/simple-section-element',
              label: 'Register',
              link: {
                route: 'items.show',
                id: 2
              }
            }

          ]

        }
      ]

    }
  ]

});
