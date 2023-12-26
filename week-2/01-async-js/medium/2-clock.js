// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function get12hrs() {
    setInterval(() => {
        let date = new Date();
        console.clear();
        let ampm = date.getHours() < 12 ? "AM" : "PM";
        let hours = date.getHours() % 12;
        hours = hours === 0 ? 12 : hours;
        console.log(`${formatDigit(hours)}:${formatDigit(date.getMinutes())}::${formatDigit(date.getSeconds())} ${ampm}`);
    }, 1000);
}

function get24hrs() {
    setInterval(() => {
        let date = new Date();
        console.clear();
        console.log(`${formatDigit(date.getHours())}:${formatDigit(date.getMinutes())}::${formatDigit(date.getSeconds())}`);
    }, 1000);
}

function formatDigit(digit) {
    return digit < 10 ? `0${digit}` : digit;
}
// get12hrs()
// get24hrs();