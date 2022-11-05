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

// TEXTBOOK SOLUTION //
// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// };

const multiply = (array) => {
  let total = 1;
  for (let i=0; i < array.length; i++) {
    total = total * array[i];
  };
  return total;
};

// TEXTBOOK SOLUTION //
// const multiply = function(array) {
//   return array.length 
//     ? array.reduce((accumulator, nextItem) -> accumulator, nextItem) 
//     : 0;
// }

const power = (a, b) => {
  let total = a;
  for (let i=1; i<b; i++) {
    total = total * a;
  };
  return total;
};

// TEXTBOOK SOLUTION //
// const power = function(a, b) {
//   return Math.pow(a, b);
// };

const factorial = function(a) {
  let total = 1;
  for (let i=1; i<a+1; i++) {
    total = total * i;
  }
  return total;
};

// TEXTBOOK SOLUTION //
// const factorial = function(n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i=n; i>0; i--) {
//     product *= i;
//   }
//   return product;
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
