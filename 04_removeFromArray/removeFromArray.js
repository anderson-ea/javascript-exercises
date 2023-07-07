const removeFromArray = function(array, removeThis) {
    let newArray = [];
    array.forEach(element => {
        if (element !== removeThis) {
            newArray.push(element)
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
