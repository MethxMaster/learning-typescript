//import hooks
import React, {useState} from 'react';

//import
import Item from './models/item';

//import components
import Form from './components/Form';
import Task from './components/Task';


function App() {
  const [dataInput,setDataInput] = useState<Item[]>([])

  function generateID(){
    return Math.floor(Math.random()*100)
  }

  // //initial data
  // const item = [
  //   {id:1,taskName:'item A'},
  //   {id:2,taskName:'item B'},
  //   {id:3,taskName:'item C'}
  // ]

  function getData(textInput:string){
    setDataInput([...dataInput,{id:generateID(),taskName:textInput}])
  }

  return (
    <div className="App">
      <Form method={getData}/>
      <Task output={dataInput}/>
    </div>
  );
}

export default App;
