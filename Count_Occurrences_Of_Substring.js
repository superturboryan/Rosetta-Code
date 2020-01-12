/*
Count occurrences of a substring
Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

The function should take two arguments:

the first argument being the string to search, and
the second a substring to be searched for.
It should return an integer count.

The matching should yield the highest number of non-overlapping matches.

In general, this essentially means matching from left-to-right or right-to-left.
*/

function countSubstring(str, subStr) {
  
    let length = subStr.length
    let first = subStr[0]
    let index = 0, count = 0

    while (index < str.length) { // Keep checking index while valid
        if (str[index] == first) { // Found beginning of substring
            if (str.substring(index,index+length) == subStr) { // Check slice against target subStr
    
                count += 1 // Incremement count
                index += length // Increment index to after the slice
            }
        }
        else index += 1 // Otherwise just increment index by 1
    }
    return count // Return the count of found subStrings
}

console.log("Answer: " + countSubstring("abcabcabcd","abc"))