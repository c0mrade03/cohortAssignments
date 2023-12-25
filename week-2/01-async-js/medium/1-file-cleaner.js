// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require("fs");

let extractedString;

try {
    extractedString = fs.readFileSync("toRead.txt", "utf-8");
}
catch (err) {
    console.log(`The error is ${err}`);
}

extractedString = extractedString.trim();
const stringArr = extractedString.split(/\s+/);
let finalAnswer = stringArr.join(' ');

try {
    fs.writeFileSync("toRead.txt", finalAnswer);
}
catch (err) {
    console.log(`The error is ${err}`);
}