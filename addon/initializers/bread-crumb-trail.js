//injected dependencies aren't inherited, that's why every subclass of route-aware-component
//needs its own initializer
export function initialize(container, application) {
  application.inject('component:bread-crumb-trail', 'router', 'router:main');
  application.inject("component:bread-crumb-trail", "applicationController", "controller:application");
}

export default {
  name: 'bread-crumb-trail',
  initialize: initialize
};
