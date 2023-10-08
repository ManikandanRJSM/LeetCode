/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverse = 0;
    var temp = x;
    if(x<0){
        return false;
    }
    while(temp!=0){
        reverse = reverse*10;
        reverse = reverse+(temp%10);
        temp = Math.trunc(temp/10);
    }
    if(reverse == x){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome(10))