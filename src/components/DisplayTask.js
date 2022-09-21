import React from "react";


export default function DisplayTask(props){
    return(
        <div className="display-tasks">
            <div>
                <input type="checkbox" />
                <label>{props.name}</label>
            </div>
            <div className="displayButtons"> 
                <button >Delete</button>
            </div>
            <taskList />

      </div>
    )
}