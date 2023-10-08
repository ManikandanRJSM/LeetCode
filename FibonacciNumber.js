/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let series = []
    for(let i = 0; i <= n; i++){
        if(i === 0){
            series.push(0)
            continue
        }
        if(i === 1){
            series.push(1)
            continue
        }
        series.push((series[i-2] + series[i-1]))
    }
    return series[n]
};

console.log(fib(4))