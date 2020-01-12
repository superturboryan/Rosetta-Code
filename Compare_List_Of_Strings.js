/*
Compare a list of strings
Given a list of arbitrarily many strings, implement a function for each of the following conditions:

test if they are all lexically equal
test if every string is lexically less than the one after it (i.e. whether the list is in strict ascending order)
*/

function allEqual(arr) {
    let first = arr[0]
    for (let i=1; i<arr.length; i++) {
        // If any word is not equal to the first, they cannot be ALL equal
        if (arr[i] != first) {
            return false
        }
    }
    return true
}
  
function azSorted(arr) {
    if (allEqual(arr) && arr.length > 1) {return false}
    let prev = arr[0]
    for (let i=1; i<arr.length; i++) {
        // If word in arr comes after prev or is not equal to prev return false
        if (Number(prev.localeCompare(arr[i])) > 0) {
            return false
        }
        prev = arr[i]
    }
    return true
}

console.log("Answer: ",azSorted(["ab", "ab"]))
  