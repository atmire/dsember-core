import Ember from 'ember';
import layout from '../templates/components/side-bar';
import RouteAwareComponent from '../components/route-aware-component';

function createSectionObject(section) {
  let result = Ember.Object.create({
    id: section.id,
    componentName: section.componentName,
    label: section.label
  });
  if (Ember.isPresent(section.link)) {
    result.set('link', Ember.Object.create({
      route: section.link.route,
      id: section.link.id
    }));
  }
  if (Ember.isPresent(section.children)) {
    let children = [];
    section.children.forEach(function(child) {
      children.push(createSectionObject(child));
    });
    result.set('children', children);
  }
  return result;
}

export default RouteAwareComponent.extend({
  layout: layout,
  tagName: 'aside',
  className: 'sidebar-menu',

  sidebarSections: Ember.computed("controllers.@each.sidebarSections",
    "controllers.@each.sidebarSection", function() {
      let controllers = this.get("controllers");
      let sidebarSections = Ember.A([]);

      controllers.forEach(function(controller) {
        let sections = controller.get("sidebarSections") || Ember.A([]);
        let singleSection = controller.get("sidebarSection");

        if (Ember.isPresent(singleSection)) {
          sidebarSections.addObject(createSectionObject(singleSection));
        }

        sections.forEach(function (section) {
          sidebarSections.addObject(createSectionObject(section));
        });
      });

      return sidebarSections;
  })
});
