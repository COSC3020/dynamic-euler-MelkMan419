const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function test(n) {
    if(n === 0) return 1;
    else return n * test(n - 1);
}
function euler(n) {
    if(n === 0) return 1;
    else return 1.0 / test(n) + factorial(n - 1);
}

for (let i = 0; i < 1000; i++) {
    assert(factorial(i) === euler(i));
}
