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

  //수정된 투두로 변경하기위해 가져오기
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
    <style.TodoWrapper>
      <ul>
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
      </ul>
      <Input getTextFromInput={getTextFromInput} />
    </style.TodoWrapper>
  );
};
export default TodoMain;
