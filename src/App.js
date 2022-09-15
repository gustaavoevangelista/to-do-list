import { useState } from "react";
import './App.css'

export default function App () {

  function addTask(){

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
        />
        <button onClick={addTask}>Add</button>
      
      </div>

      <div className="display-tasks">
        tasks added
        <button>Update</button>  
        <button>Delete</button>  
      </div>

    </div>
  )

}