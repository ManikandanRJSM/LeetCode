/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let output = init;
    // let operations = {
    //     increment : function () {
    //         console.log(23)
    //     }
    // };
    return { // Returning function as a object
        increment : () => {
            output++;
            return output
        },
        decrement : () => {
            output--;
            return output
        },
        reset : () => {
            output = init;
            return output
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */