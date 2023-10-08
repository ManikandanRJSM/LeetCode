/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let once = 0;
    for(let i = 0; i < n.toString(2).length; i++){
        if(n.toString(2)[i] === '1'){
            once = once+1;
        }
    }
    return once;
};

console.log(hammingWeight(00000000000000000000000010000000))