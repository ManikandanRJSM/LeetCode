/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    
    let triangle = []
    for(let row = 1; row <= numRows; row++){
        let column = []
        for(let col = 0; col < row; col++){
            if(col === 0 || col === row-1){
                column.push(1)
            }else{
                column.push((triangle[row-2][col-1] + triangle[row-2][col]))
            }
        }
        triangle.push(column)
    }
    return triangle
};

console.log(generate(4))