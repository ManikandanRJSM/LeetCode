/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result;
    if (x<0) {
        var x1 = -1*(x);
        var rev = 0;
        while(x1 != 0){
            rev = rev*10;
            rev = rev+(x1%10);
            x1 = Math.trunc(x1/10);
        }
        result = -1*(rev);

    }else{
        var x1 = x;
        var rev = 0;
        while(x1 != 0){
            rev = rev*10;
            rev = rev+(x1%10);
            x1 = Math.trunc(x1/10);
        }
        result = rev;
    }
    if(Math.abs(result) > 0x7FFFFFFF ){
        return 0;
    }else{
        return result;
    }
};
reverse(1534236469)
