/*
Combinations

Given non-negative integers m and n, generate all size m combinations of the integers from 0 (zero) to n-1 
in sorted order (each combination is sorted and the entire table is sorted).

Example: 3 comb 5 is
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
*/

function combinations(length,num) {
    let arr = []
    for (let i=0; i<num; i++) {
      arr.push(i)
    }
    return comb(arr,length)
  }
  
  function comb(arr, k){
      var i,
      subI,
      ret = [],
      sub,
      next;

    console.log("Current subarray ", arr)
  
      for(i = 0; i < arr.length; i++){
          
          if (k === 1){
              ret.push( [ arr[i] ] );
          }
          
          else {
  
              sub = comb(arr.slice(i+1, arr.length), k-1);
              
              for (subI = 0; subI < sub.length; subI++ ){
                  next = sub[subI];
                  next.unshift(arr[i]);
                  ret.push( next );
                  console.log("Answer: ", ret)
              }
          }
      }
      return ret;
  }
  
  console.log(combinations(3,5))