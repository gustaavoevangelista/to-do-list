import { useState } from "react";
import './App.css'

export default function App () {

  const [task, setTask] = useState('')
/*   const [update, setUpdate] = useState('')
  const [del, setDelete] = useState('') */

  function addTask(){
    return (
      <div className="display-tasks">
{/*       {task}
      <button onClick={updateTask}>Update</button>  
      <button onClick={deleteTask}>Delete</button>  not working*/}
      </div>
      
    )
  }

  function updateTask(){
    alert('clicked')
  }

  function deleteTask(){
    let confirmation = prompt('Are you sure you want to delete this task?')
    if(confirmation === 'Yes'){
      task.useState('')
    }
  }

  return(
    <div className="app">
      <h1>TO-DO LIST</h1>
      <span>Never forget a task!</span>

      <div className="input-area">
        <label for="input">New Task</label> 
        <input 
        type="text" 
        placeholder="Groceries - Monday morning"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        id="task-input"
        />
        <button onClick={addTask}>Add</button>

      </div>


    </div>
  )

}