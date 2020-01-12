/*
9 billion names of God the integer
This task is a variation of the short story by Arthur C. Clarke.

(Solvers should be aware of the consequences of completing this task.)

In detail, to specify what is meant by a "name":

The integer 1 has 1 name "1".
The integer 2 has 2 names "1+1" and "2".
The integer 3 has 3 names "1+1+1", "2+1", and "3".
The integer 4 has 5 names "1+1+1+1", "2+1+1", "2+2", "3+1", "4".
The integer 5 has 7 names "1+1+1+1+1", "2+1+1+1", "2+2+1", "3+1+1", "3+2", "4+1", "5".

This can be visualized in the following form:

          1
        1   1
      1   1   1
    1   2   1   1
  1   2   2   1   1
1   3   3   2   1   1

row 1   2   3   4   5   6   7   8   9  ...  12
sum 1   2   3   5   7   11  15  22  30 ...  77


Where row  n  corresponds to integer  n , and each column  C  in row  m  from left to right corresponds to the number of names beginning with  C .

Optionally note that the sum of the  n -th row  P(n)  is the integer partition function.

Implement a function that returns the sum of the  n -th row.
*/

function numberOfNames(num) { 
    
    let count = 0 

    function partition(n, max, prefix) {

        if (n==0) {
            count++
            console.log(prefix)
            return 
        }
    
        for (let i = Math.min(max,n); i >= 1; i--) {
            partition(n - i, i, prefix + " " + + i)
        }
    
    }
    
    partition(num,num,"")

    return count
  }



let answer = numberOfNames(123)

console.log("Answer: " + answer)
