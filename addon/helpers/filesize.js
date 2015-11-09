import Ember from 'ember';

export function filesize([value]) {
  if (typeof value === 'undefined') {
    return null;
  }
  let i,
    size,
    units = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
  for (i = 0; i < units.length; i++) {
    if (value < 1024) {
      size = Math.floor(value) + units[i];
      break;
    }
    value = value / 1024;
  }
  return size;
}

export default Ember.Helper.helper(filesize);
