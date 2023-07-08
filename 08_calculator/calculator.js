const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let totalSum = 0
	array.forEach(i => {
    totalSum += i
  });
  return totalSum
};

const multiply = function(...args) {
  let total = 1
  for (let i = 0; i < args.length; i++) {
    total *= args[i]
  }
  return total
};

const power = function(num1, num2) {
	return num1**num2
};

const factorial = function(num) {
  let result = 1 
  if (num === 0) {
    return result
  }   
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
