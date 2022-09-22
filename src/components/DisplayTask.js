import React from "react";


export default function DisplayTask(props){
    return(
        <div className="display-tasks">
            <div>
                <input
                 id={props.id}
                 type="checkbox"
                 defaultChecked={props.completed}
                 onChange={() =>props.toggleTaskCompleted(props.id)}

                />
                <label>{props.name}</label>
            </div>
            <div className="displayButtons"> 
                <button
                  type="button"
                  onClick={() => props.deleteTask(props.id)} 
                
                >Delete</button>
            </div>
            <taskList />

      </div>
    )
}