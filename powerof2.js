/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (Math.log2(n) % 1 === 0) ? true : false
};

console.log(isPowerOfTwo(13))