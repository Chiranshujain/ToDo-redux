// src/components/SearchBar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/actions';

function SearchBar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        onChange={handleSearch} 
        placeholder="Search tasks..." 
      />
    </div>
  );
}

export default SearchBar;
