import { useContext } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import AppRoutes from "./route/AppRoutes";
import { TaskContext } from "./store/TaskContext";
import AddTaskForm from "./components/AddTaskForm";
import { Toaster } from "react-hot-toast";

function App() {
  const { showTaskForm, darkMode } = useContext(TaskContext);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-violet-950 text-white" : "bg-violet-100 text-black"
      }`}
    >
      <Toaster position="top-right" />
      <div className=" h-auto flex flex-col">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <div className="flex-1 border-gray-500  border-l-2">
            <AppRoutes />
          </div>
        </div>

        {showTaskForm && <AddTaskForm />}
      </div>
    </div>
  );
}

export default App;
