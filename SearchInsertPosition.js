/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    var isPresentIndex = nums.indexOf(target);

   

    if(isPresentIndex !== -1){

        // console.log('summm');return false;

        var output = isPresentIndex;

    }else{

        nums.push(target);

        // console.log(array);return false;

        nums.sort(function(a, b){return a - b});

        var output = nums.indexOf(target);

    }

    return output;
    
};

searchInsert([1,3,5,6], 2);