import Ember from 'ember';
import { formatDate } from 'dsember-core/utils/date-utils';

export function formattedCurrentDate([format]) {
  return formatDate(Date.now(), format);
}

export default Ember.Helper.helper(formattedCurrentDate);
