
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return keys.map((todoId) => {
    return state.todos[todoId]
  });
};