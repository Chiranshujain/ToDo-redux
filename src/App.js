
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import data from './data.json';
import './index.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    data.forEach(task => {
      dispatch(addTask(task));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <SearchBar />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
