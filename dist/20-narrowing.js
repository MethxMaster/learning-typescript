"use strict";
//Narrowing ------------------------------------------------------
//1. type of guard
function truncate(value, length) {
    if (typeof value === 'number') {
        return value.toString().slice(0, length);
    }
    else {
        return value.slice(0, length);
    }
}
console.log(truncate(12345, 2));
console.log(truncate('string', 2));
//2. Equality narrowing
function compareValue(x, y) {
    if (x === y) {
        return console.log('equal');
    }
    else {
        console.log('Not equal');
    }
}
compareValue(3, '3');
compareValue(4, 4);
//3. Instand of narrowing
class User2 {
    constructor(username) {
        this.username = username;
    }
}
class Employee2 {
    constructor(name) {
        this.name = name;
    }
}
function printObj(obj) {
    if (obj instanceof User2) {
        console.log('The input is in the "User2"');
    }
    else {
        console.log('The input is in the "Employee2"');
    }
}
printObj(new User2('metheiei'));
printObj(new Employee2('jirameth'));
function calculateArea(data) {
    switch (data.type) {
        case 'rectangle':
            return data.width * data.height;
        case 'triangle':
            return 0.5 * data.base * data.height;
        default:
            return new Error('Your input is not correct');
    }
}
console.log(calculateArea({ width: 2, height: 4, type: 'rectangle' }));
