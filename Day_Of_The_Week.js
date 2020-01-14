/*
Day of the week
A company decides that whenever Xmas falls on a Sunday they will give their workers all extra paid holidays so that, 
together with any public holidays, workers will not have to work the following week (between the 25th of December and the first of January).

Write a function that takes a start year and an end year 
and return an array of all the years where the 25th of December will be a Sunday.
*/

function findXmasSunday(start, end) {
    let answer = []
    for (let year=start; year<=end; year++) {
        if (xmasIsSunday(year)) {
            answer.push(year)
        }
    }
    return answer;
}

// JS Data.getDay() returns the day of the week starting from sunday 0->6, 0->Sunday 6->Saturday
const xmasIsSunday = year => (new Date(year, 11, 25)).getDay() === 0;
  
console.log(findXmasSunday(2000,2100))