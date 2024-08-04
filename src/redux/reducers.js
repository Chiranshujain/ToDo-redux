
import { ADD_TASK, UPDATE_TASK, TOGGLE_TASK_COMPLETION, SET_SEARCH_QUERY } from './actionTypes';

const initialState = {
  tasks: [],
  searchQuery: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TOGGLE_TASK_COMPLETION:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
