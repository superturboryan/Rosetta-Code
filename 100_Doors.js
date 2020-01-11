/*
100 Doors

There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. 
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). 
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. 
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. 
Return the final result in an array, with only the door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors) {

    let doors = []

    for (let i=0; i<numDoors; i++) {
        doors.push(true) // true = open / false = closed
    }

    let check = 2

    while (check <= numDoors) {

        for (let i = check; i<=numDoors; i+=check) {
            doors[i] = !doors[i]
        }

        check += 1
    }

    let answer = []

    for (index in doors) {
        if (doors[index] === true) {
            answer.push(index)
        }
    }

    return answer;
}

let answer = getFinalOpenedDoors(100)

console.log(answer)