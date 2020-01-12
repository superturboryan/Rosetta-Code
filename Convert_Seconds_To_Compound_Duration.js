/*
Convert seconds to compound duration

Implement a function which:
-takes a positive integer representing a duration in seconds as input (e.g., 100), and
-returns a string which shows the same duration decomposed into weeks, days, hours, minutes, and seconds as detailed below (e.g., 1 min, 40 sec).

Demonstrate that it passes the following three test-cases:
Input number	Output number
-7259	2 hr, 59 sec
-728640059	1 d
-6000000	9 wk, 6 d, 10 hr, 40 min

The following five units should be used:
Unit	Suffix used in Output	Conversion
week	wk	1 week = 7 days = 604,800
day	d	1 day = 24 hours = 86400
hour	hr	1 hour = 60 minutes = 3600
minute	min	1 minute = 60 seconds = 60

However, only include quantities with non-zero values in the output (e.g., return 1 d and not 0 wk, 1 d, 0 hr, 0 min, 0 sec).
Give larger units precedence over smaller ones as much as possible (e.g., return 2 min, 10 sec and not 1 min, 70 sec or 130 sec).

Mimic the formatting shown in the test-cases (quantities sorted from largest unit to smallest and separated by comma+space; value and unit of each quantity separated by space).
*/

function convertSeconds(sec) {
    
    let answer = []

    let wk = Math.floor(sec / 604800)
    
    if (wk > 0) {
        answer.push(`${wk} wk`)
        sec -= (wk*604800)
    }

    let d = Math.floor(sec/86400)

    if (d > 0) {
        answer.push(`${d} d`)
        sec -= (d*86400)
    }

    let hr = Math.floor(sec/3600)

    if (hr > 0) {
        answer.push(`${hr} hr`)
        sec -= (hr*3600)
    }

    let min = Math.floor(sec/60)

    if (min > 0) {
        answer.push(`${min} min`)
        sec -= (min*60)
    }
    
    if (sec > 0)
        answer.push(`${sec} sec`)

    console.log(answer.join(", "))
    return answer.join(", ")
}

convertSeconds(6000000)
  