/*
Count the coins
There are four types of common coins in US currency:

quarters (25 cents)
dimes (10 cents)
nickels (5 cents), and
pennies (1 cent)
There are six ways to make change for 15 cents:

A dime and a nickel
A dime and 5 pennies
3 nickels
2 nickels and 5 pennies
A nickel and 10 pennies
15 pennies
Implement a function to determine how many ways there are to make change for a dollar using these common coins (1 dollar = 100 cents)


*/

function countcoins(t, o) { // target sum, denominations

    var targetsLength = t + 1;
    var operandsLength = o.length;
    t = [1];
 
    for (var a = 0; a < operandsLength; a++) {
        
        for (var b = 1; b < targetsLength; b++) {
 
            // initialise undefined target
            t[b] = t[b] ? t[b] : 
                          0;
 
            // accumulate target + operand ways
            t[b] += (b < o[a]) ? 
                                0 : 
                                 t[b - o[a]];
        }
    }
    return t[targetsLength - 1];
}

  console.log(countcoins(100,[1,5,10,25]))