import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import {allTodos} from './reducers/selectors'

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {}
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;


  ReactDOM.render(<Root store={store}/>, root)
})