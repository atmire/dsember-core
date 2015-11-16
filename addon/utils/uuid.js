const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

function isUUID(uuid) {
  return uuidRegex.test(uuid);
}

function random() {
  return Math.random();
}

function generateUUID() {
  let ret = '', value;
  for (let i = 0; i < 32; i++) {
    value = random() * 16 | 0;
    // Insert the hypens
    if (i > 4 && i < 21 && (i % 4) === 0) {
      ret += '-';
    }
    // Add the next random character
    ret += (
      (i === 12) ? 4 : (
        (i === 16) ? (value & 3 | 8) : value
      )
    ).toString(16);
  }
  return ret;
}

export {
  generateUUID,
  isUUID
};
