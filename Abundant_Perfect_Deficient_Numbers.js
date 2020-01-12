/*
Abundant, deficient and perfect number classifications

These define three classifications of positive integers based on their proper divisors.

Let  P(n)  be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.

If P(n) < n then n is classed as deficient
If P(n) === n then n is classed as perfect
If P(n) > n then n is classed as abundant

Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.

Implement a function that calculates how many of the integers from 1 to 20,000 (inclusive) are in each of the three classes. 
Output the result as an array in the following format [deficient, perfect, abundant].
*/

function getDPA(input) {
    
    let abundant = 0;
    let perfect = 0;
    let deficient = 1;

    for (let num=1; num<=input; num++) {
        let divisorsSum = getDivisors(num).reduce((sum,num)=>sum+num)
        divisorsSum == num ? perfect += 1 : divisorsSum < num ? deficient += 1 : abundant += 1;
    }

    return [deficient,perfect,abundant]
}

function getDivisors(input) {

    let divisors = [1];
    for (let num=2; num<input; num++) {
        if (input % num === 0) {
            divisors.push(num);
        }
    }
    // console.log(`Divisors for ${input}: ${divisors}`);
    return divisors;
}
  
let answer = getDPA(20000)
console.log(answer)

// let accumulator = sum => (n => sum += n);