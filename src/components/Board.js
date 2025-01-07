// src/components/Board.js

import React, { useState } from 'react';
import Column from './Column';

const Board = () => {
  const [tasks, setTasks] = useState({
    todo: [],
    inProgress: [],
    done: [],
  });

  const addTask = (task, column) => {
    setTasks((prevState) => ({
      ...prevState,
      [column]: [...prevState[column], task],
    }));
  };

  const editTask = (updatedTask, column) => {
    setTasks((prevState) => ({
      ...prevState,
      [column]: prevState[column].map((task) =>
        task.task === updatedTask.task ? updatedTask : task
      ),
    }));
  };

  const deleteTask = (task, column) => {
    setTasks((prevState) => ({
      ...prevState,
      [column]: prevState[column].filter((t) => t.task !== task.task),
    }));
  };

  return (
    <div className="board">
      <div className="columns">
        <Column
          title="To Do"
          tasks={tasks.todo}
          onAddTask={(task) => addTask(task, 'todo')}
          onEditTask={(updatedTask) => editTask(updatedTask, 'todo')}
          onDeleteTask={(task) => deleteTask(task, 'todo')}
        />
        <Column
          title="In Progress"
          tasks={tasks.inProgress}
          onAddTask={(task) => addTask(task, 'inProgress')}
          onEditTask={(updatedTask) => editTask(updatedTask, 'inProgress')}
          onDeleteTask={(task) => deleteTask(task, 'inProgress')}
        />
        <Column
          title="Done"
          tasks={tasks.done}
          onAddTask={(task) => addTask(task, 'done')}
          onEditTask={(updatedTask) => editTask(updatedTask, 'done')}
          onDeleteTask={(task) => deleteTask(task, 'done')}
        />
      </div>
    </div>
  );
};

export default Board;
