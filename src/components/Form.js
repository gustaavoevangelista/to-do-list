import { TrackChangesSharp } from "@material-ui/icons";
import React from "react";
import { useState } from "react";


export default function Form(props){
    const [name, setName] = useState('')

	function handleSubmit(e){
		e.preventDefault()
		if(name.length === 0){
			alert('Please add a task')
		}
		else{
			props.addTask(name)
			setName("")
		}
	}

    return (
        <div className="input-area">
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Groceries - Monday morning"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        
      </div>
    )
}