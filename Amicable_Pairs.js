/* 
Amicable pairs

Two integers  N  and  M  are said to be amicable pairs if 
N≠M and the sum of the proper divisors of  N  
(sum(propDivs(N))) = M  as well as  sum(propDivs(M))= N.

Example:

1184 and 1210 are an amicable pair, with proper divisors:

1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.

Calculate and show here the Amicable pairs below 20,000 (there are eight). 
[220,284],[1184,1210],[2620,2924],[5020,5564],[6232,6368],[10744,10856],[12285,14595],[17296,18416]
 */

function amicablePairsUpTo(maxNum) {
    let answers = []
    for (let i=0; i<maxNum; i++) {
        for (let j=i+1; j<maxNum+1; j++) {
            if (getDivisorSum(i) == j && getDivisorSum(j) == i) {
                answers.push([i,j])
            }
        }
    }
    return answers
}

function getDivisorSum(input) {
    let divisors = [1];
    for (let num=2; num<input; num++) {
        if (input % num === 0) {
            divisors.push(num);
        }
    }
    // console.log(`Divisors for ${input}: ${divisors}`);
    return divisors.reduce((sum,num)=>sum+num)
}

console.log(amicablePairsUpTo(2000))

// const amicablePairsUpTo = n => {
    
//     const sigma = compose(sum, properDivisors);
    
//     return enumFromTo(1)(n).flatMap(x => {
//         const y = sigma(x);
//         return x < y && x === sigma(y) ? ([
//             [x, y]
//         ]) : [];
//     });
// };

// // properDivisors :: Int -> [Int]
// const properDivisors = n => {
//     const
//         rRoot = Math.sqrt(n),
//         intRoot = Math.floor(rRoot),
//         lows = enumFromTo(1)(intRoot).filter(x => 0 === (n % x));
    
//     return lows.concat(lows.map(x => n / x).reverse().slice((rRoot === intRoot) | 0, -1));
// };

// const compose = (...fs) =>
//         x => fs.reduceRight((a, f) => f(a), x);
 
 
// // enumFromTo :: Int -> Int -> [Int]
// const enumFromTo = m => n =>
//     Array.from( {length: 1 + n - m }, (_, i) => m + i);

// // sum :: [Num] -> Num
// const sum = xs => xs.reduce((a, x) => a + x, 0);

// console.log(amicablePairsUpTo(20000))