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
    readData().forEach(e => {
        createList(e);
    });
}
function readData() {
    const myData = localStorage.getItem('taskList');
    if (myData == null)
        return [];
    return JSON.parse(myData);
}
function createList(input) {
    const itemList = document.createElement('li');
    const checkList = document.createElement('input');
    checkList.type = 'checkbox';
    itemList.append(input.taskName);
    checkList.checked = input.completed;
    listOutput.append(itemList);
}
