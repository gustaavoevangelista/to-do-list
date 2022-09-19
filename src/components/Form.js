import React from "react";
import { useState } from "react";


export default function Form(props){
    const [task, setTask] = useState('')


    return (
        <div className="input-area">
        <form>
          <input 
          type="text" 
          placeholder="Groceries - Monday morning"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          />
          <button>Add</button>
        </form>
        
      </div>
    )
}