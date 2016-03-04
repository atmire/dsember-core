export function initialize(/* container, application */) {
  //removes any content that's there for seo purposes.
  $('body > .ember-view').remove();
  $('body').removeClass("ember-application");
}

export default {
  name: 'seo',
  initialize: initialize
};
