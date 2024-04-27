"use strict";
//union type -----------------------------------
let param1;
param1 = 10;
console.log(param1);
param1 = 'Meth';
console.log(param1);
let coordinate;
coordinate = { x: 5, y: 10 };
console.log(coordinate);
coordinate = { lat: 20, long: 30 };
console.log(coordinate);
let showMessage1 = ['Hi', 'OK'];
console.log(showMessage1);
showMessage1 = 'bye';
console.log(showMessage1);
// union type in function
function sayHi(person) {
    if (typeof person === 'string') {
        console.log('Hi :', person);
    }
    else {
        person.forEach((e) => {
            console.log(`Hi : ${e}`);
        });
    }
}
sayHi('Sor');
sayHi(['sor', 'max']);
let example1 = "female";
//cannot assigned another value
function confirmDialog(answer) {
    console.log(`result : ${answer}`);
}
confirmDialog('yes');
function showExample10(input) {
    console.log(input);
}
showExample10('top-center');
