// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let value = 1;
function count() {
    console.log(value);
    value++;
    setTimeout(count, 1000);
}
count();





































































// (Hint: setTimeout)