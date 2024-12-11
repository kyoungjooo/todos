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
  console.log(todos);

  return (
    <>
      <TodoItem todos={todos} />
      <Input getTextFromInput={getTextFromInput} />
    </>
  );
};
export default TodoMain;
