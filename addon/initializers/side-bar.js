//injected dependencies aren't inherited, that's why every subclass of route-aware-component
//needs its own initializer
export function initialize(container, application) {
  application.inject('component:side-bar', 'router', 'router:main');
  application.inject("component:side-bar", "applicationController", "controller:application");
}

export default {
  name: 'side-bar',
  initialize: initialize
};
