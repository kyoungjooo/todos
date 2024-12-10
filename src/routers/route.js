import { createBrowserRouter } from "react-router-dom";
import TodoMain from "../pages/todo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoMain />,
  },
]);
export default router;
