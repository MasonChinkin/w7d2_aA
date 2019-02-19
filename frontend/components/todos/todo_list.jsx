import React from 'react';
import TodoItem from './todo_item';

const todoList = () => {
  let todos = allTodos(store.getState())
  let listTodos = todos.map(todo => <TodoItem todo={todo} key={todo.id}/>);

  return (
    <ul>
      {listTodos}
    </ul>
  )
}

export default todoList;