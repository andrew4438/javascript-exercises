const reverseString = (inputString) => {
    let outputString = '';
    for (let i = inputString.length - 1; i > -1; i--) {
        outputString += inputString[i];
    }
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;