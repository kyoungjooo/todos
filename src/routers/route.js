import { createBrowserRouter } from "react-router-dom";
import TodoMain from "../pages/todoMain";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoMain />,
  },
]);
export default router;
