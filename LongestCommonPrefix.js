/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
            return '';
        }
        var initial = strs[0];
        for(let i = 0; i < initial.length; i++){
            for(let j of strs){
                if(j[i] != initial[i]){
                    return j.slice(0, i);
                }
            }
        }
        return initial;
};
console.log(longestCommonPrefix(["flower","flow","flight"]));