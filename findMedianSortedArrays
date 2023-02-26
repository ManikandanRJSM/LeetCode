/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n1len = nums1.length;
    const n2len = nums2.length;
    const resultArray = nums1.concat(nums2).sort(function(a,b){return a - b});
    
    const n3len = resultArray.length;
    var chunck = Math.round(n3len / 2);
    
    if(n3len % 2 == 0){
        var set1 = [];
        var set2 = [];
        for (var i = 0; i < chunck; i++) {
        	set1.push(resultArray[i]);
        }
        for (var j = chunck; j < n3len; j++) {
        	set2.push(resultArray[j]);
        }
        const m = set1[set1.length - 1];
        const n = set2[0];
        // return (m+n) / 2;
        return ((m+n) / 2);
    }else{
    	var set1 = [];
    	var set2 = [];

    	for (var i = 0; i < chunck; i++) {
        	set1.push(resultArray[i]);
        }
        for (var j = chunck; j < n3len; j++) {
        	set2.push(resultArray[j]);
        }
        return set1[set1.length - 1];
        // console.log(set2);
    }
};

findMedianSortedArrays([1,3], [2])
