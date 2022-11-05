const fibonacci = function(n) {
    
    if (n<0) return 'OOPS';

    let fibonacciArray = [1,1];

    for (let i=2; i<n+1; i++) {
        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
    };
    return fibonacciArray[n-1];
};

// TEXTBOOK SOLUTION //
// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0 ) return 0;

//     let a = 0;
//     let b = 1;

//     for (let i=1; i<count; i++) {
//         const temp = b;
//         b = a + b;
//         a = temp;
//     }
//     return b;
// };

// Do not edit below this line
module.exports = fibonacci;