import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export function formattedCurrentDate([format]) {
  return formatDate(Date.now(), format);
}

export default Ember.Helper.helper(formattedCurrentDate);
