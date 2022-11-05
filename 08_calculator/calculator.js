const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = function(array) {
	let total=0;
  for (let i=0; i < array.length; i++) {
    total += array[i];
  };
  return total;
};

const multiply = (array) => {
  let total = 1;
  for (let i=0; i < array.length; i++) {
    total = total * array[i];
  };
  return total;
};

const power = (a, b) => {
  let total = a;
  for (let i=1; i<b; i++) {
    total = total * a;
  };
  return total;
};

const factorial = function(a) {
  let total = 1;
  for (let i=1; i<a+1; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
