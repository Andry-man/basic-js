module.exports = function countCats(m) {
  let matrix = m;
  let answer = 0; 
  for (let i = 0; i < matrix.length; i++) {
  for (let index = 0; index < matrix[i].length; index++) {
   if (matrix[i][index] == '^^' ) {
   answer+=1
   }
    
  }
  }
 return answer;
};
