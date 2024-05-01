
//import css file
import './../style/style.css'

//import interface 
import Item from "../models/item";

//declare local interface
interface propsInput{
    output:Item[]
}

function Task(props:propsInput):JSX.Element{

    return (
        <div className='task-container'>
            <h1>Task</h1>
            <ul>
                {props.output.map((e)=>{
                    return <li key={e.id}>{e.taskName}</li>
                })}
            </ul>
        </div>
    );
}

export default Task;