/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let formula = (n *(n+1))/2
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum = sum+nums[i]
    }
    return formula-sum
    
    /*for(let i = 0; i<= nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }*/
};

console.log(missingNumber([3,0,1]))