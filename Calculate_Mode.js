/*
 Averages/Mode
Write a program to find the mode value of a collection.

The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.

If it is not appropriate or possible to support a general collection, use a vector (array), if possible. 
If it is not appropriate or possible to support an unspecified value type, use integers.
 */

function mode(arr) {

    let seen = {}
  
    for (let num of arr) {
      let key = ""+num
      if (seen[key] != null) {
        seen[key] += 1
      }
      else {
        seen[key] = 1
      }
    }
    console.log(seen)
    let highestCount = Math.max.apply(Math,Object.values(seen))
    let answer = []
    
    for (let key of Object.keys(seen)) {
      if (seen[key] == highestCount) {
        answer.push(Number(key))
      }
    }
    console.log("Answer: ",answer)
    return answer
  }
  
  mode([1,3,6,6,6,6,7,7,12,12,17])