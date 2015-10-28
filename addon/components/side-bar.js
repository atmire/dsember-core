import Ember from 'ember';
import layout from '../templates/components/side-bar';
import RouteAwareComponent from '../components/route-aware-component';

function orderSections(sections) {
  sections.forEach(function(section, index) {
    if (Ember.isBlank(section.get('index'))) {
      section.set('index', index + 1);
    }
    if (Ember.isPresent(section.get('children'))) {
      section.set('children', orderSections(section.get('children')));
    }
  });
  return sections.sortBy('index');
}

export default RouteAwareComponent.extend({
  layout: layout,
  tagName: 'aside',
  classNames: ['sidebar-menu'],

  sidebarSections: Ember.computed("controllers.@each.sidebarSections",
    "controllers.@each.sidebarSection", function() {
      let controllers = this.get("controllers");
      let sidebarSections = Ember.A([]);

      controllers.forEach(function(controller) {
        let sections = controller.get("sidebarSections") || Ember.A([]);
        let singleSection = controller.get("sidebarSection");

        if (Ember.isPresent(singleSection)) {
          sidebarSections.addObject(singleSection);
        }

        sections.forEach(function (section) {
          sidebarSections.addObject(section);
        });
      });

      return orderSections(sidebarSections);
  })
});
