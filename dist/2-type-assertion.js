"use strict";
//Type Assertion ------------------------------------------------
let input;
input = 150;
console.log('input (default) : ', input);
console.log('input (type) : ', typeof input);
// 1. use 'as'
input.toFixed(2);
console.log('input = ', input);
// 2 use '<>'
input = 'developer01';
input.toUpperCase();
console.log('input = ', input);
//More example
function comeOnAnyInput(anyInput) {
    let output = anyInput === 'number' ? anyInput : parseInt(anyInput);
    console.log('come on any input : ' + output);
}
let test2 = 50;
comeOnAnyInput(test2);
