const ftoc = (f) => {

  let c = (f - 32) * (5 / 9);
  c = c * 10;
  c = Math.round(c);
  c = c / 10;
  return c;

};

const ctof = (c) => {

  let f = (c * (9 / 5)) + 32;
  f = f * 10;
  f = Math.round(f);
  f = f / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};