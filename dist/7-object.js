"use strict";
//Object ---------------------------------------------------------
let customerData = {
    fname: 'Max',
    age: 29
};
let dataSet = {
    data1: 10,
    data2: 5
};
console.log(`Object declaration - name : ${customerData.fname}, age : ${customerData.age}`);
//Use function --------------------------------------------------
//Declaration function
function objectInFunc1(data) {
    console.log(`Object in function - name : ${data.fname} , age : ${data.age} `);
}
objectInFunc1(customerData);
//Arrow function
const objectInFunc2 = (data) => {
    return data.data1 + data.data2;
};
console.log(`Object in arrow function : ${objectInFunc2(dataSet)}`);
//Return object as an output
function randomPosition() {
    return {
        lat: Math.random(),
        long: Math.random()
    };
}
console.log(`Return obj as output -> type : ${typeof randomPosition()}, lat : ${randomPosition().lat.toFixed(4)}, long : ${randomPosition().long.toFixed(4)}`);
//Excess properties check
const payloadCheck = {
    data1: 1,
    data2: 2,
    data3: 3
};
function excessPropsCheck(data) {
    console.log('test excess properties check : ok');
}
excessPropsCheck(payloadCheck); //This case it will be not warning
//to check the type need to use like code below
excessPropsCheck({
    data1: 1,
    data2: 2 /*,
    data3 : 3   error one*/
});
// ----------------------------------------------------------------
