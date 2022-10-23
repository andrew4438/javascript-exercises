const repeatString = (inputString, num) => {
    if (num < 0) return 'ERROR';
    let outputString = '';
    for (let i=0; i<num; i++) {
        outputString += inputString;
    }
    return outputString;
};

// ORIGINAL METHOD
// const repeatString = function(string, num) {
//     outputString = '';
//     if (num >= 0) {
//         for (let i=0; i<num; i++) {
//             outputString = outputString + string;
//         }
//     } else {
//         outputString = 'ERROR';
//     }
//     return outputString;
// };

// Do not edit below this line
module.exports = repeatString;