import { useSelector } from "react-redux";
import * as Style from "../style/todo.style";
import TodoItemCard from "../components/todoItemCard";
import AddTodoForm from "../components/addTodoForm";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <Style.TodoContainer>
      <Style.H1>TodoList</Style.H1>
      <Style.TodoWrapper>
        <Style.TodoInner>
          {todos.map((todo) => {
            return <TodoItemCard key={todo.id} todo={todo} />;
          })}
        </Style.TodoInner>
        <AddTodoForm />
      </Style.TodoWrapper>
    </Style.TodoContainer>
  );
};
export default TodoList;
