import React, { useState } from 'react';

const TodoApp = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // State to hold the new task input
  const [newTask, setNewTask] = useState('');

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      
      {/* Input for adding a new task */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      
      {/* List of tasks */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
