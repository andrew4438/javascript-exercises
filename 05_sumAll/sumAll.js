const sumAll = (integer1, integer2) => {

    let lowerNumber = integer1;
    let upperNumber = integer2;

    if (integer1 == integer2) {
        return 'ERROR';
    } else if (integer1 < 0 || integer2 < 0) {
        return 'ERROR';
    } else if (typeof integer1 !== 'number' || typeof integer2 !== 'number') {
        return 'ERROR';
    } else if (integer1 > integer2) {
        lowerNumber = integer2;
        upperNumber = integer1;
    };


    let sum = 0;
    for (let i = lowerNumber; i < upperNumber + 1; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
