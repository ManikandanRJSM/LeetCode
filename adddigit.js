/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var sum = 0;
    for(var i=0; i<String(num).length; i++){
        sum = sum+Number(String(num)[i]);
    }
    if(String(sum).length > 1){
        return addDigits(sum)
    }else{
        return sum    
    }
    
};

console.log(addDigits(39))