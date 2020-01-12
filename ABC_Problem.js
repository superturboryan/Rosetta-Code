/*
ABC problem
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). 
There are 20 blocks with two letters on each block. 
A complete alphabet is guaranteed amongst all sides of the blocks. 

The sample collection of blocks:
(B O) (X K)
(D Q) (C P)
(N A) (G T)
(R E) (T G)
(Q D) (F S)
(J W) (H U)
(V I) (A N)
(O B) (E R)
(F S) (L Y)
(P C) (Z M)

Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:
Once a letter on a block is used, that block cannot be used again.
The function should be case-insensitive.
*/

function canMakeWord(word) {
  
    let seen = []
    let answer = true

    word.toLowerCase().split("").forEach((elem,index) => {
        
        if (seen.indexOf(elem) != -1 && Math.abs(seen.indexOf(elem)-index) < 3) {
            answer = false
        }
        else {
            seen.push(elem)
        }

    });
  
    return answer
  
  }

  console.log(canMakeWord("treat"))