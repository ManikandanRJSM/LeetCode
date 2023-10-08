/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let intial = [0, 1]
    yield intial[0];
    yield intial[1];
    
    while(true){
        let next = intial[0]+intial[1]
        yield next
        intial[0] = intial[1]
        intial[1] = next
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */