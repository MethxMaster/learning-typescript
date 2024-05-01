
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
    readData().forEach(e=>{
        createList(e)
    })
}
function readData():tasks[]{
    const myData = localStorage.getItem('taskList')
    if(myData == null) return []
    return JSON.parse(myData)
}


function createList(input:tasks){
    const itemList = document.createElement('li')
    const checkList = document.createElement('input')
    checkList.type = 'checkbox'

    itemList.append(input.taskName)
    checkList.checked = input.completed
    listOutput.append(itemList)

}