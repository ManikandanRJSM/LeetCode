/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result_array = [];
    for(let i = 0; i < arr.length; i++){
        result_array[i] = fn(arr[i], i)
    }
    return result_array
    
};

/*
* arr = [1,2,3], fn = fn = function plusI(n, i) { return n + i; }
* console.log(map(arr, fn))
*/