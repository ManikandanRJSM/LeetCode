/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    var reverse = '';
    
    for(var i=s.length-1; i >= 0; i--){
        reverse += s[i];
    }
    if(s === reverse){
        return true
    }else{
        return false;
    }
    
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))