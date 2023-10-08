/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let power = 0;
    while(3**power < n){
        power++;
    }
    return (3**power === n) ? true : false;
};
console.log(isPowerOfThree(-1))