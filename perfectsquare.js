/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return (Math.sqrt(num) % 1 === 0) ? true : false
};

console.log(isPerfectSquare(14))