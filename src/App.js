import './App.css'
import { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import DisplayTask from './components/DisplayTask'
import Form from './components/Form'

const LOCAL_STORAGE_KEY = "react-todo-list-todos"


export default function App () {

  const [tasks, setTasks] = useState('');

  //when refresh the page, the tasks wont be lost
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if(storageTodos) {
      setTasks(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))

  }, [tasks])


  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  
  
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }
  
  
  const taskList = tasks ? tasks.map((task) => (
    <DisplayTask
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    />
    ) 
  ) : ''
    
  function addTask(name){
    const newTask = {id: `todo-${nanoid()}`, name, completed: false}
    setTasks([...tasks, newTask])
  }

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