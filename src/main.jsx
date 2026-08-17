import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./App.css";
import TaskListProvider from "./store/TaskContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskListProvider>
      <App />
    </TaskListProvider>
  </BrowserRouter>,
);
