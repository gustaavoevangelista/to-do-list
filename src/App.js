import './App.css'
import DisplayTask from './components/DisplayTask'
import Form from './components/Form'



export default function App (props) {

  const taskList = props.tasks?.map((task) => (
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

      <Form />
      <ul>
        {taskList}
      </ul>



    </div>
  )

}