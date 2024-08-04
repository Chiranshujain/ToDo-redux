
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const tasks = useSelector(state => state.tasks);
  const searchQuery = useSelector(state => state.searchQuery);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="todo-list">
      {filteredTasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TodoList;
