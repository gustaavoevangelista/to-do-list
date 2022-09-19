import React from "react";
import { useState } from "react";


export default function ToDo(){
    const [task, setTask] = useState('')


    return (
        <div className="input-area">
        <form>
          <input 
          type="text" 
          placeholder="Groceries - Monday morning"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="task-input"
          />
          <button>Add</button>
        </form>
        
      </div>
    )
}