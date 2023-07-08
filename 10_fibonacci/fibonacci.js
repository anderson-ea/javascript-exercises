const fibonacci = function(place) {
    let newPlace = parseInt(place)
    if (newPlace < 0) {
        return "OOPS"
    }
    let a = 1
    let b = 1
    while (newPlace > 2) {
        let c = a + b
        b = a
        a = c
        newPlace -= 1
    }
    return a
};

fibonacci(6) // 6th number in sequence
// expect 8 to be answer - ex: 1,1,2,3,5,8

// Do not edit below this line
module.exports = fibonacci;
