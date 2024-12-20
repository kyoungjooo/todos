import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routers/route";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
