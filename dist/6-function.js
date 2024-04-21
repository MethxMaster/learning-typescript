"use strict";
//function
// 1. no input - no return
function voidFunc_noinput() {
    console.log('Void function - no input : Hello TypeScript');
}
voidFunc_noinput();
// 2. input - no return
function voidFunc_input(input) {
    console.log(`Void function - with input : ${input}`);
}
voidFunc_input('MethxMaster');
// 3. no input - return
function pi() {
    return 3.14;
}
function description() {
    return 'Return function - no input :';
}
console.log(description(), pi());
// 4. input - return
function sumFunc(input1, input2) {
    return input1 + input2;
}
console.log('Return function - with input :', sumFunc(10, 5));
//Arrow function
const resultArrow = (fname, no) => fname + ' ' + no;
console.log('Arrow function :', resultArrow('Foey', 56));
//Declare default parameter
function showAddress(fname, ageWork, address = 'N/A') {
    return `name : ${fname}, work time : ${ageWork}, address : ${address}`;
}
console.log('Default parameter : ', showAddress('Max', 2, 'Bangkok'));
console.log('Default parameter : ', showAddress('Sor', 2));
