/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    };
    var calc = 0;
    for(var i = 0; i < s.length; i++){
        console.log(i)
        if(symbols[s[i]] < symbols[s[i+1]]){
            calc += symbols[s[i+1]] - symbols[s[i]]
            i = i+1
           
        }else{            
            calc += symbols[s[i]]
            
        }
    }
    return calc;
    
};

console.log(romanToInt('MCMXCIV'))