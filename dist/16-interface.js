"use strict";
let person;
person = {
    name: 'MethxMaster',
    age: 25,
    gender: 'male'
};
console.log(person.gender);
let example2 = {
    data1: 'data1',
    data3: true
};
console.log(example2);
example2.data2 = 25;
console.log(example2);
let example3 = {
    data1: 'data1',
    data2: 30,
    method1() {
        console.log(`current time : ${new Date().toLocaleString()}`);
    }
};
example3.method1();
let Example4 = {
    data1: 'data from extend 1',
    data2: 0,
    data3: 'data from extend 2',
    data4: 10,
    data5: 'data from main interface',
    data6: 20,
    method1() {
        console.log(`hello from method : ${this.data1}`);
    }
};
Example4.method1();
let Example5 = {
    data1: 'data from extend 1',
    data2: 0,
    data3: 'data from extend 2',
    data4: 10,
    data5: 'data from main interface',
    data6: 20,
    method1() {
        return 'Hi from method (return)';
    }
};
let ex5_output = Example5.method1();
console.log(ex5_output);
let example6 = {
    data1: 'data 1',
    data2: 'data 2',
    data3: 100
};
console.log(example6);
