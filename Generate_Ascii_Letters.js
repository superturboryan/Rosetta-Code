/*
Generate lower case ASCII alphabet
Write a function to generate an array of lower case ASCII characters for a given range. 
For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd'].
*/

function lascii(cFrom, cTo) {
   cFrom = cFrom.charCodeAt(0)
   cTo = cTo.charCodeAt(0)
   let answer = []
   for (let ascii = cFrom; ascii <= cTo; ascii++) {
      answer.push(String.fromCharCode(ascii))
   }
   return answer
}
