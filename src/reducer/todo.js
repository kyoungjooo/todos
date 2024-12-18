const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, action.payload];
    case "edit_todo":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
export default TodoReducer;
