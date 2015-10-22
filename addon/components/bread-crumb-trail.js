import Ember from 'ember';
import layout from '../templates/components/bread-crumb-trail';

export default Ember.Component.extend({
  layout: layout,
  router: null,
  applicationController: null,

  handlerInfos: Ember.computed("applicationController.currentPath", function() {
    return this.get("router").router.currentHandlerInfos;
  }),

  pathNames: Ember.computed("handlerInfos.[]", function() {
    return this.get("handlerInfos").map(function(handlerInfo) {
      return handlerInfo.name;
    });
  }),

  controllers: Ember.computed("handlerInfos.[]", function() {
    return this.get("handlerInfos").map(function(handlerInfo) {
      return handlerInfo.handler.controller;
    });
  }),

  breadCrumbs: Ember.computed("controllers.@each.breadCrumbs",
    "controllers.@each.breadCrumb",
    "controllers.@each.breadCrumbPath",
    "controllers.@each.breadCrumbModel",
    "pathNames.[]", function() {
      var controllers = this.get("controllers");
      var defaultPaths = this.get("pathNames");
      var breadCrumbs = Ember.A([]);

      controllers.forEach(function(controller, index) {
        var crumbs = controller.get("breadCrumbs") || Ember.A([]);
        var singleCrumb = controller.get("breadCrumb");

        if (!Ember.isBlank(singleCrumb)) {
          crumbs.push({
            label: singleCrumb,
            path: controller.get("breadCrumbPath"),
            model: controller.get("breadCrumbModel"),
          });
        }

        crumbs.forEach(function (crumb) {
          breadCrumbs.addObject(Ember.Object.create({
            label: crumb.label,
            path: crumb.path || defaultPaths[index],
            model: crumb.model,
            linkable: !Ember.isNone(crumb.linkable) ? crumb.linkable : true,
            isCurrent: false
          }));
        });
      });

      var deepestCrumb = Ember.get(breadCrumbs, "lastObject");
      if (deepestCrumb) {
        deepestCrumb.isCurrent = true;
      }

      return breadCrumbs;
    }),

  cuttoffLength: Ember.computed('breadCrumbs.[]', function() {
    return Math.max(90 / this.get('breadCrumbs').length, 30);
  })
});
