import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({
  todoList: allTodos(state),
});

const mapDispatchToProps = (dispatch, todo) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);