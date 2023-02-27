/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const resultArray = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums.length == 2) {
            resultArray.push(i);
            resultArray.push(i+1);
            break;
        }else{
            for (var j = 0; j < nums.length; j++) {
                if (i != j) {
                    if (nums[i]+nums[j] == target) {
                        resultArray.push(i);
                    }
                }else{
                    continue;
                }
            }
        }
        
        
        
    }
    result resultArray;
};

twoSum([3,2,3], 6)
