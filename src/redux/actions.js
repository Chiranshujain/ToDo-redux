
import { ADD_TASK, UPDATE_TASK, TOGGLE_TASK_COMPLETION, SET_SEARCH_QUERY } from './actionTypes';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const toggleTaskCompletion = (taskId) => ({
  type: TOGGLE_TASK_COMPLETION,
  payload: taskId,
});

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
