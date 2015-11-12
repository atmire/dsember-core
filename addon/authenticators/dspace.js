import Ember from 'ember';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default BaseAuthenticator.extend({
  store: Ember.inject.service('store'),
  tokenEndpoint: Ember.computed('store', function() {
    let namespace = this.get('store').adapterFor('application').get('namespace');
    return `${namespace}/login`;
  }),

  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate: function(identification, password) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.get('tokenEndpoint'),
        type: 'POST',
        data: JSON.stringify({
          email: identification,
          password: password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'text'
      }).then(function(response) {
        Ember.run(function() {
          resolve({
            token: response
          });
        });
      }, function(xhr/*, status, error*/) {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },

  invalidate: function() {
    return Ember.RSVP.resolve();
  }
});

