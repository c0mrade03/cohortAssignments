/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const pr = new Promise(function (resolve, reject) {
        const dt = Date.now();
        while (Date.now() - dt < milliseconds) {
            //block the thread
        }
        resolve();
    })
    return pr;
}

module.exports = sleep;
