const palindromes = function (string) {
    let newString = string.replace(/[!?,. ]/g, "").toUpperCase();
    let compareString = ""
    for (let i = newString.length - 1; i > -1; i--) {
        compareString += newString[i]
    }
    return compareString === newString
};

// Do not edit below this line
module.exports = palindromes;