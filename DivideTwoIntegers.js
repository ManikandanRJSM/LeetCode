/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const quotient = dividend/divisor;
    if(quotient > (2147483648-1) ){
        return quotient-1;
    }else{
        return Math.trunc(quotient);
    }
    
};
divide(-2147483648, -1);
