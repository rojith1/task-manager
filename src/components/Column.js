// src/components/Column.js

import React, { useState } from 'react';
import Card from './Card';

const Column = ({ title, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({
    task: '',
    description: '',
    startDate: '',
    endDate: '',
    priority: 'low',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (!newTask.task || !newTask.description) return; // Ensure task and description are provided
    onAddTask(newTask);
    setNewTask({ task: '', description: '', startDate: '', endDate: '', priority: 'low' });
    setIsAdding(false);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      {isAdding ? (
        <div className="task-form">
          <input
            type="text"
            name="task"
            placeholder="Task Name"
            value={newTask.task}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newTask.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="startDate"
            value={newTask.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={newTask.endDate}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={newTask.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleAddTask}>Save Task</button>
        </div>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add Task</button>
      )}
      <div className="task-list">
        {tasks.map((task, index) => (
          <Card
            key={index}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Column;
