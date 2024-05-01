//import hook
import { useRef } from 'react';

//import css files
import './../style/style.css'

//declare local interface
interface methodForm {
    method: (dataInput:string)=>void
}

function Form({method}:methodForm):JSX.Element{

    //useRef
    const textInput = useRef<HTMLInputElement>(null);

    function saveData(event:React.FormEvent){
        event.preventDefault()
        const task = textInput.current!.value
        method(task)
        textInput.current!.value = ''
    }

    return(
        <div className='form-component'>
            <h1>From component</h1>
            <form onSubmit={saveData}>
                <input type='text' placeholder='Your task' ref={textInput}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );

}

export default Form;