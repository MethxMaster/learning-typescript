"use strict";
//Spread operator
const section = ['Account', 'Money'];
const departments = ['Program', 'Marketing', 'Graphic'];
departments.push(...section);
console.log(departments);
