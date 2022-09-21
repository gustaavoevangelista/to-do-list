import './App.css'
import { useState } from 'react'
import { v4 as uuid} from 'uuid'
import DisplayTask from './components/DisplayTask'
import Form from './components/Form'



export default function App (props) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name){
    const newTask = {id: `todo-${uuid()}`, name, completed: false}
    setTasks([...tasks, newTask])
  }

  const taskList = tasks.map((task) => (
    <DisplayTask
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
    
    ) 
  
  )
  

  return(
    <div className="app">
      <h1>TO-DO LIST</h1>
      <span>Never forget a task!</span>

      <Form addTask = {addTask}/>
      <ul>
        {taskList}
      </ul>



    </div>
  )

}