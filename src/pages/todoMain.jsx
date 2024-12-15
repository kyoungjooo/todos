import { useState } from "react";
import Input from "../components/input";
import TodoItem from "../components/todo";
import * as style from "../style/todo.style";

const TodoMain = () => {
  const [todos, setTodos] = useState([]);

  const getTextFromInput = (newTodo) => {
    const { id, title, content } = newTodo;
    setTodos((prev) => [...prev, { id, title, content }]);
  };

  const getUpdatedValue = (updated) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === updated.id ? { ...todo, ...updated } : todo
      )
    );
  };

  const getDeleteTarget = (deleted) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted));
  };

  return (
    <style.TodoContainer>
      <style.H1>TodoList</style.H1>
      <style.TodoWrapper>
        <style.TodoInner>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                getUpdatedValue={getUpdatedValue}
                getDeleteTarget={getDeleteTarget}
              />
            );
          })}
        </style.TodoInner>
        <Input getTextFromInput={getTextFromInput} />
      </style.TodoWrapper>
    </style.TodoContainer>
  );
};
export default TodoMain;
