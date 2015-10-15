import Ember from 'ember';

export function filesize([value]) {
  if (typeof value === 'undefined') {
    return null;
  }
  let i,
    filesize,
    units = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
  for (i = 0; i < units.length; i++) {
    if (value < 1024) {
      filesize = Math.floor(value) + units[i];
      break;
    }
    value = value / 1024;
  }
  return filesize;
}

export default Ember.Helper.helper(filesize);
