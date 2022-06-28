import './App.css';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Buy Shopping', isComplete: false, priority: 'high' },
    { name: 'Clean Batheroom', isComplete: false, priority: 'low' },
    { name: "Car's MOT", isComplete: false, priority: 'high' },
  ])


  const taskNodes = tasks.map((task, index) => {
    return (<li key={index} className={task.isComplete ? 'complete' : 'not-complete'}>
      <span>{task.name}</span> <span>{task.priority}</span>
      {task.isComplete ? <span className='complete'>Complete!</span> : <button onClick={() => completeTask(index)}>Complete?</button>}
    </li>
    )
  })

  const [newTask, setNewTask] = useState('');

  const handleTaskInput = ((event) => {
    setNewTask(event.target.value)
  })

  const saveNewTask = ((event) => {
    event.preventDefault();
    const copyTasks = [...tasks]
    copyTasks.push({ name: newTask, isComplete: false })
    setTasks(copyTasks)
    setNewTask('')
  })

  const completeTask = (index => {
    const copyTasks = [...tasks];
    copyTasks[index].isComplete = true;
    setTasks(copyTasks)
  })




  return (
    <div>
      <h1>Jobs to Do</h1>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'></label>
        <input type='radio' name='high' value='high' />
        <input type='radio' name='low' value='low' />
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput} />
        <input type='submit' value='Save Task' />
      </form>

      <ul>
        {taskNodes}
      </ul>
    </div>
  );
}
<input></input>

export default App;
