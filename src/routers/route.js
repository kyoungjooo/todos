import { createBrowserRouter } from "react-router-dom";
import TodoList from "../pages/todoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
]);
export default router;
