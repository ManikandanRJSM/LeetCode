/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
     const pranthesis = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
    
    for(var i = 0; i < s.length; i++){
        if(s[i] === '{' || s[i] === '[' || s[i] === '('){
            stack.push(s[i])
        }else if(pranthesis[stack.pop()] !== s[i]){
            return false
        }
    }
    return stack.length == 0
};

console.log(isValid('{[]}'))