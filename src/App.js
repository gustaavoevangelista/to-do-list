import './App.css'
import DisplayTask from './components/DisplayTask'
import ToDo from './components/ToDo'
import { useState } from "react";



export default function App () {
  
  
/*   const [update, setUpdate] = useState('')
  const [del, setDelete] = useState('') */

  function addTask(){
    return (
      <div className="display-tasks">

      </div>
      
    )
  }

    function updateTask(){
    alert('clicked')
  }

   function deleteTask(){
    let confirmation = prompt('Are you sure you want to delete this task?')
    if(confirmation === 'Yes'){
      /* task.useState('') */
    }
  } 

  return(
    <div className="app">
      <h1>TO-DO LIST</h1>
      <span>Never forget a task!</span>

      <ToDo />
      <DisplayTask />


    </div>
  )

}