import Ember from 'ember';
import { formatDate } from '../utils/date-utils';

export function formattedDate([date, format]) {
  return formatDate(date, format);
}

export default Ember.Helper.helper(formattedDate);
