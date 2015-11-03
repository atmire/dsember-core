import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

const { isEmpty } = Ember;

export default Base.extend({
  authorize(sessionData, block) {
    const accessToken = sessionData['token'];
    if (!isEmpty(accessToken)) {
      block('rest-dspace-token', accessToken);
    }
  }
});
