import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import the icons

const Card = ({ task, onEditTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    onEditTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor:
          task.priority === 'high'
            ? '#ffcccc'
            : task.priority === 'medium'
            ? '#fff0b3'
            : '#e6f7ff',
      }}
    >
      {isEditing ? (
        <div className="task-edit-form">
          <input
            type="text"
            name="task"
            value={updatedTask.task}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="startDate"
            value={updatedTask.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={updatedTask.endDate}
            onChange={handleChange}
          />
          <select
            name="priority"
            value={updatedTask.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div className="card-content">
          <h3>{task.task}</h3>
          <p>{task.description}</p>
          <p>Start: {task.startDate}</p>
          <p>End: {task.endDate}</p>
          <p>Priority: {task.priority}</p>
          <div className="card-buttons">
            <button onClick={() => setIsEditing(true)}>
              <FaEdit /> {/* Edit Icon */}
            </button>
            <button onClick={() => onDeleteTask(task)}>
              <FaTrashAlt /> {/* Delete Icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
