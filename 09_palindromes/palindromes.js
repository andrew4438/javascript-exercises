const palindromes = (forwardString) => {
    

    forwardString = forwardString.replaceAll(/[!,.\s]/g, '').toLowerCase();
    let forwardArray = forwardString.split('');
    let reverseArray  = forwardArray.reverse();
    let reverseString = reverseArray.join('');

    if (forwardString === reverseString) {
        return true;
    } else {
        return false;
    }
};

// TEXTBOOK SOLUTION //
// const palindromes = function(string) {
    
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//         processedString.split("").reverse().join("") == processedString
//     );
// };

// Do not edit below this line
module.exports = palindromes;
