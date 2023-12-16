/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n, fn) {
    fn(n);
}
function calculateTimeUsingDate(n) {
    const start = new Date();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const end = new Date();
    console.log("Using Date:",(end - start) / 1000);
}
function calculateTimeUsingPerformance(n) {
    const start = performance.now();
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    const end = performance.now();
    console.log("Using Performance:",(end - start) / 1000);
}
calculateTime(100, calculateTimeUsingDate);
calculateTime(100, calculateTimeUsingPerformance);