/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let init = 0
    for(let i = 0; i < nums.length; i++){
        init = init ^ nums[i]
    }
    return init
};

console.log(singleNumber([2,2,1]))