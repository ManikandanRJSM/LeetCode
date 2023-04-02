/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    var count = 0;
    for(var i = s.length-1; i >= 0; i--){
        if(s[i] !== ' '){
            
            count += 1;
        }
        if(count > 0 && s[i] === ' '){
            console.log('break');
            break;
        }
    }
    return count;
};

console.log(lengthOfLastWord('luffy is still joyboy'))