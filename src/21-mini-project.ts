
const submitBtn = document.getElementById('input-btn') as HTMLButtonElement
const inputTextbox = document.getElementById('input-text') as HTMLInputElement
const listOutput = document.getElementById('task-report-list')!

interface tasks{
    taskName:string,
    completed:boolean
}

const data:tasks[]=[]


submitBtn.addEventListener('click',saveData)

function saveData(){    //e:submitEvent
    // e.preventDefault()
    const newTask:tasks = {
        taskName:inputTextbox.value,
        completed:false
    }
    data.push(newTask)
    console.log(data)

    //save to local storage
    localStorage.setItem('taskList',JSON.stringify(data))

    //update task
    createList(newTask)
}
function readData():tasks[]{
    const myData = localStorage.getItem('taskList')
    if(myData == null) return []
    return JSON.parse(myData)
}
function createList(input:tasks){
    //declare element
    const itemList = document.createElement('li')
    const checkList = document.createElement('input')
    checkList.type = 'checkbox'             //set attribute
    checkList.checked = input.completed     //set initial

    checkList.addEventListener('change',(()=>{
        input.completed = checkList.checked
        updateData()
    }))
    console.log('render-create list')

    itemList.append(input.taskName)         //add task name
    itemList.append(checkList)              //let initial value to the element "input"
    listOutput.append(itemList)             //add task name and complete value to the list

}
function updateData(){
    localStorage.setItem('taskList',JSON.stringify(data))
    console.log('render-update data')
}
console.log('render')