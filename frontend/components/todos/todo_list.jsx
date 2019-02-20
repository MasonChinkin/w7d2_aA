import React from 'react';
import TodoItem from './todo_item';
import TodoForm from '../todo_list/todo_form'

const TodoList = (props) => {
  let listTodos = props.todoList.map(todo => {
    return <TodoItem todo={todo} key={todo.id}/>;
  });
  return (
    <>
      <ul>
        {listTodos}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </>
  )
}

export default TodoList;