/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let table = [1,1,2]
     for(let i = 3; i <= n; i++){
         table[i] = table[i - 1] + table[i - 2];
     }
     return table[n];
 }