// src/components/TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, toggleTaskCompletion } from '../redux/actions';

function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    dispatch(updateTask({ ...task, title: editedTitle, description: editedDescription }));
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        {isEditing ? (
          <input 
            type="text" 
            value={editedTitle} 
            onChange={(e) => setEditedTitle(e.target.value)} 
          />
        ) : (
          <h3 onClick={() => setIsExpanded(!isExpanded)}>
            {task.title}
          </h3>
        )}
        <div className="todo-actions">
          {isEditing ? (
            <button className="todo-button save" onClick={handleSave}>Save</button>
          ) : (
            <button className="todo-button edit" onClick={() => setIsEditing(true)}>Edit</button>
          )}
          <button className="todo-button" onClick={() => dispatch(toggleTaskCompletion(task.id))}>
            {task.completed ? 'Undo' : 'Done'}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="todo-details">
          {isEditing ? (
            <textarea 
              value={editedDescription} 
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          ) : (
            <p>{task.description}</p>
          )}
          <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
