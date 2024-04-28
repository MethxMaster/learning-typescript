"use strict";
//Generic -----------------------
//original way
/*
function getElementNumber(arr:number[],count:number){
    return arr.slice(arr.length-count)
}
function getElementString(arr:string[],count:number){
    return arr.slice(arr.length-count)
}
function getElementBoolean(arr:boolean[],count:number){
    return arr.slice(arr.length-count)
}
*/
const myNum = [10, 20, 30, 40, 50];
const myString = ['A', 'B', 'C', 'D', 'E'];
const myBool = [true, false, true, false, false];
// console.log(getElementNumber(myNum,2))
// console.log(getElementString(myString,2))
// console.log(getElementBoolean(myBool,2))
//Gereric function
function getElement(arr, count) {
    return arr.slice(arr.length - count);
}
console.log(getElement(myNum, 3));
console.log(getElement(myString, 3));
console.log(getElement(myBool, 3));
//Multi type
function merge(param1, param2) {
    console.log(`${typeof param1} - ${typeof param1}`);
}
merge('Hi', false);
merge(true, true);
function mergeData(data1, data2) {
    return Object.assign(Object.assign({}, data1), data2);
}
console.log(mergeData([1, 2, 3, 4], { name: 'name', age: 25 }));
console.log(mergeData({ name: 'name', age: 25 }, [1, 2, 3, 4]));
console.log(mergeData('Soratorn', [1, 2, 3, 4]));
console.log(mergeData(123, [1, 2, 3, 4]));
console.log(mergeData('324', 'Meth'));
//Generic constaints
function mergeData2(data1, data2) {
    return Object.assign(Object.assign({}, data1), data2);
}
const testData1 = { name: 'name1', surename: 'surename1' };
const testData2 = [1, 2, 3, 4];
console.log(mergeData2(testData1, testData2));
//Generic class
class Stack {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack = new Stack();
stack.pushElement('Sor');
stack.pushElement('Max');
console.log(stack);
//default generic
class Stack2 {
    constructor() {
        this.items = [];
    }
    pushElement(element) {
        this.items.push(element);
    }
}
const stack2 = new Stack2();
stack2.pushElement(100);
stack2.pushElement(200);
console.log(stack2);
