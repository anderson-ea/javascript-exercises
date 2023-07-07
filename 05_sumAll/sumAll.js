const sumAll = function(num1, num2) {
    let finalSum = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1]
    }
    for (let i = num1; i <= num2; i++) {
        finalSum += i
    }
    return finalSum
};

// if num1 is bigger than num2, switch them
// for loop, starting at lower number ending at bigger number
// inside loop add iteration
// Do not edit below this line
module.exports = sumAll;
