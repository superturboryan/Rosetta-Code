/*
Balanced brackets
Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

Examples:
Input	Output
[]	true
][	false
[][]	true
][]	false
[]][[]	false
[[[[]]]]	true
*/

function isBalanced(str) {
    
    let score = 0

    for (let bracket of str.split("")) {

        bracket == "[" ? score += 1 : score -= 1

        if (score < 0) {
            return false
        }
    }

    return score === 0
}

console.log(isBalanced("[[]]"))