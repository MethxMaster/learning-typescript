"use strict";
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return (parseInt(a) + parseInt(b)).toString();
    }
}
console.log(typeof sum(10, 20), ' : ', sum(10, 20));
console.log(typeof sum('10', '20'), ' : ', sum('10', '20'));
