const convertToCelsius = function(temperature) {
  let newTemp = (temperature - 32) * 5/9
  return Math.round(newTemp * 10) / 10
};

const convertToFahrenheit = function(temperature) {
  let newTemp = (temperature * 9/5) + 32
  return Math.round(newTemp * 10) / 10
};

// Because we are human, we want the result temperature to be rounded to 
// one decimal place: i.e., `convertToCelsius(100)` should return `37.8` 
// and not `37.77777777777778`.

// This exercise asks you to create more than one function so 
// the `module.exports` section of the spec file looks a little different 
// this time.  Nothing to worry about, we're just packaging both functions
// into a single object to be exported.


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
