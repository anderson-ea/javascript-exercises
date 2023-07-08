const getTheTitles = function(booksArray) {
    let newArray = []
    booksArray.forEach(book => {
        newArray.push(book.title)
    });
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
