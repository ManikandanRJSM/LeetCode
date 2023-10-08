/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
 
class Animal {}; class Dog extends Animal {};
var checkIfInstanceOf = function(obj, classFunction) {
    while(obj!= null){
        /* console.log(obj.constructor)   
        console.log(Object.getPrototypeOf(obj), obj)   */
        if(obj.constructor === classFunction){
            return true
        }   
        obj = Object.getPrototypeOf(obj)
    }
    return false
};

console.log(checkIfInstanceOf(new Dog(), Animal)) // true