/*
Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.

Method:
Take two numbers to be multiplied and write them down at the top of two columns
In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of 1
In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows 1
Examine the table produced and discard any row where the value in the left column is even
Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together

For example: 17 × 34

Halving the first column:
17   34
8
4
2
1

Doubling the second column:
17   34
8    68
4   136
2   272
1   544

Strike-out rows whose first cell is even:
17   34
8    68
4   136
2   272
1   544

Sum the remaining numbers in the right-hand column:
17   34
8    --
4   ---
2   ---
1   544
   ====
    578

So 17 multiplied by 34, by the Ethiopian method is 578.

The task is to define three named functions/methods/procedures/subroutines:
-one to halve an integer,
-one to double an integer, and
-one to state if an integer is even

Use these functions to create a function that does Ethiopian multiplication.
*/

function getHalves(num) {
    let answer = [];
    let i = num
    while (i > 0) {
        answer.push(i)
        i = Math.floor(i/2)
    }
    return answer
}

function getDoubles(num,length) {
    let answer = []
    let i = 0
    while (i < length) {
        answer.push(num)
        num *= 2
        i += 1
    }
    return answer
}

function eth_mult(a, b) {
  
    let halfves = getHalves(a)
    let doubles = getDoubles(b,halfves.length)
    let combined = []
    halfves.forEach((num,index) => {
        combined.push([num,doubles[index]])
    });

    combined = combined.filter(comb=> comb[0]%2 != 0)
    
    let answer = 0
    combined.forEach(comb=>{
        if (comb[0]%2!=0) {
            answer += comb[1]
        }
    })
    return answer;
}

console.log("Answer: " + eth_mult(17,34))
