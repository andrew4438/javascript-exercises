const removeFromArray = (inputArray, ...searchItems) => {

    // console.log(`inputArray = ${inputArray}`);
    // console.log(`searchItems = ${searchItems}`);

    const outputArray = [];

    for (let i=0; i<inputArray.length; i++) {
        // console.log(`i=${i}, searchItem=${inputArray[i]}`);

        if (!searchItems.includes(inputArray[i])) {
            outputArray.push(inputArray[i]);
            // console.log(outputArray);
        }
    }
    // console.log('\n');
    return outputArray;
}

module.exports = removeFromArray;

// removeFromArray([1, 2, 3, 4], 3);
// removeFromArray([1, 2, 3, 4], 3, 2)
// removeFromArray([1, 2, 3, 4], 7, "tacos")
// removeFromArray([1, 2, 3, 4], 7, 2)
// removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
// removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
// removeFromArray([1, 2, 3], "1", 3)