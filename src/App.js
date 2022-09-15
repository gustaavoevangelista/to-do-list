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
        New task 
        <input 
        type="text" 
        placeholder="Groceries"
        />
        <button onClick={addTask}>Add</button>
      
      </div>

      <div>
        tasks added
        <button>Update</button>  
        <button>Delete</button>  
      </div>

    </div>
  )

}