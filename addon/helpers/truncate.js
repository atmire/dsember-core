import Ember from 'ember';

export function truncate([inputString, cutoffLength]) {
  if (Ember.isPresent(inputString) && inputString.length > cutoffLength) {
    let result = inputString.substr(0, cutoffLength);
    result = inputString.substr(0, result.lastIndexOf(" "));
    result = (result.length > 0) ? result : inputString.substr(0, cutoffLength);

    return `${result}...`;
  }
  return inputString;
}

export default Ember.Helper.helper(truncate);
