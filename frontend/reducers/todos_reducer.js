import { RECEIVE_TODO, RECEIVE_TODOS} from '../actions/todo_actions';
import Lodash from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos
    case RECEIVE_TODO:
    let todo = {[action.todo.id]: action.todo}
      return Lodash.merge({}, state, todo)
    default:
      return state;
  }
};

export default todosReducer;