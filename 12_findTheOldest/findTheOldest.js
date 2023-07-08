const findTheOldest = function(array) {
    let oldestYear = 10000000
    let oldestPerson = {}
    array.map(person => {
        if (person.yearOfBirth < oldestYear) {
            oldestYear = person.yearOfBirth
            oldestPerson = person
        }
    })
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
