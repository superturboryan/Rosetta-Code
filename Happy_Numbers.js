/*
Happy numbers
A happy number is defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 

Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.

Implement a function that returns true if the number is happy, or false if not.
*/

let maxCallstack = 100;

function happy(number,maxCallstack) {
    
    if (maxCallstack == 0) { // Check counter to make sure call stack does not get too big 
        return false // some values cause loops
    }
    let str = ""+number
    
    if (str[str.length-1] == 1) {
        return true
    }
    else {
        let squareSum = 0 
        for (let num of str) {
            squareSum += (num * num)
        }
        maxCallstack -= 1
        return happy(squareSum,maxCallstack)
    }
}

let answer = happy(33,maxCallstack)
console.log("Answer: "+ answer)
  