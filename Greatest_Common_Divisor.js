/*
Greatest common divisor
Write a function that returns the greatest common divisor of two integers.
*/

const getDenominators = num => {
    let denom = [1]
    for (let i=2; i<=Math.ceil(num/2); i++) {
        if (num % i == 0) {
            denom.push(i)
        }
    }
    denom.push(num)
    return denom
}

function gcd(a, b) {
    
    let denomA = getDenominators(a)
    let denomB = getDenominators(b)

    let commonDenoms = new Set()
    
    for (let denom of denomA) {
        if (denomB.includes(denom)) {
            commonDenoms.add(denom)
        }
    }

    for (let denom of denomB) {
        if (denomA.includes(denom)) {
            commonDenoms.add(denom)
        }
    }
    
    commonDenoms = [...commonDenoms].sort((a,b)=>b-a)
    return commonDenoms[0]
} 

console.log("Answer: " + gcd(30,48))

