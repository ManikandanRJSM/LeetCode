/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result_array = [];
    for(let i = 0; i < arr.length; i++){
        let is_valid = fn(arr[i], i);
        if(is_valid){
            result_array.push(arr[i]);
        }
        
    }
    return result_array;
    
};

/*
* arr = [1,2,3], fn = function greaterThan10(n) { return n > 10; }
* console.log(filter(arr, fn))
*/