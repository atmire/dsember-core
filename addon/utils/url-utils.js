//combines a variable number of url parts with slashes
//ensures double slashes don't occur
function combineURLParts(...parts) {
  let url = parts.join('/');
  return url.replace(/[/]{2,}/, '/');
}


export {
  combineURLParts
};
