import Ember from 'ember';
import layout from '../templates/components/bread-crumb-trail';

export default Ember.Component.extend({
  layout: layout,
  router: null,
  applicationController: null,

  handlerInfos: Ember.computed("applicationController.currentPath", function() {
    return this.get("router").router.currentHandlerInfos;
  }),

  controllers: Ember.computed("handlerInfos.[]", function() {
    return this.get("handlerInfos").map(function(handlerInfo) {
      return handlerInfo.handler.controller;
    });
  })
});
