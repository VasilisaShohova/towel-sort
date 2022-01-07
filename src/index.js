
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) {
    return [];
  }
 if (matrix.length === 0) {
   return [];
 }
  for (var i = 1; i < matrix.length; i++) {
    let elArray = matrix[i];
    if(i%2!==0){
   elArray.reverse().join();
    }
  }
  let matrixWithCorrectOrder = matrix.join().split(",").map(x=>+x)
  return matrixWithCorrectOrder;
}
