// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        timestamp: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="new-task-container">
        <input
          type="text"
          className="new-task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task title"
        />
        <button type="submit" className="add-task-button">Add Task</button>
      </div>
      <textarea
        className="new-task-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />
    </form>
  );
}

export default TodoForm;
