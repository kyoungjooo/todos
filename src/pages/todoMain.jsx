import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm.jsx";
import TodoItem from "../components/todoItem";
import * as Style from "../style/todo.style";

const TodoMain = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    const { id, title, content } = newTodo;
    setTodos((prev) => [...prev, { id, title, content }]);
  };

  const editTodo = (updated) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === updated.id ? { ...todo, ...updated } : todo
      )
    );
  };

  const deleteTodo = (deleted) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted));
  };

  return (
    <Style.TodoContainer>
      <Style.H1>TodoList</Style.H1>
      <Style.TodoWrapper>
        <Style.TodoInner>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </Style.TodoInner>
        <AddTodoForm addTodo={addTodo} />
      </Style.TodoWrapper>
    </Style.TodoContainer>
  );
};
export default TodoMain;
