"use strict";
const submitBtn = document.getElementById('input-btn');
const inputTextbox = document.getElementById('input-text');
const listOutput = document.getElementById('task-report-list');
const data = [];
submitBtn.addEventListener('click', saveData);
function saveData() {
    // e.preventDefault()
    const newTask = {
        taskName: inputTextbox.value,
        completed: false
    };
    data.push(newTask);
    console.log(data);
    //save to local storage
    localStorage.setItem('taskList', JSON.stringify(data));
    //update task
    createList(newTask);
}
function readData() {
    const myData = localStorage.getItem('taskList');
    if (myData == null)
        return [];
    return JSON.parse(myData);
}
function createList(input) {
    //declare element
    const itemList = document.createElement('li');
    const checkList = document.createElement('input');
    checkList.type = 'checkbox'; //set attribute
    checkList.checked = input.completed; //set initial
    checkList.addEventListener('change', (() => {
        input.completed = checkList.checked;
        updateData();
    }));
    console.log('render-create list');
    itemList.append(input.taskName); //add task name
    itemList.append(checkList); //let initial value to the element "input"
    listOutput.append(itemList); //add task name and complete value to the list
}
function updateData() {
    localStorage.setItem('taskList', JSON.stringify(data));
    console.log('render-update data');
}
console.log('render');
