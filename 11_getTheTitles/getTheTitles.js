const getTheTitles = function(books) {

    const titles = books.map(book => book.title);
    return titles;

};

// TEXTBOOK ANSWER //
// const getTheTitles = function(array) {
//     return array.map(book => book.title);
// };

// Do not edit below this line
module.exports = getTheTitles;
