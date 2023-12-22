// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require("fs");

// Using fs.writeFile to replace the content
function replaceContent(contentToReplace) {
    fs.writeFile("toReplace.txt", contentToReplace, "utf-8", (err) => {
        if (err) {
            console.log(`The error while writing file is ${err}`);
        }
        else {
            console.log("Content replaced successfully");
        }
    })
}

// Using fs.appendFile we can add content to the end of the file
function appendContent(contentToAppend) {
    fs.appendFile("toAppend.txt", contentToAppend, "utf-8", (err) => {
        if (err) {
            console.log(`The error while appending is ${err}`);
        }
        else {
            console.log("Content added successfully");
        }
    })
}

let contentToReplace = "This is the content I am inserting first time you can replace it however you want";
let contentToAppend = "This is the first line being added to the append file you can add whatever line you want to add to the end of the file";

replaceContent(contentToReplace);
appendContent(contentToAppend);