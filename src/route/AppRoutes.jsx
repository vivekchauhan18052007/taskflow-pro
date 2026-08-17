import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard.jsx";
import Alltask from "../pages/AllTask.jsx";
import Completed from "../pages/Completed.jsx";
import NotFound from "../pages/NotFound.jsx";
import Pending from "../pages/Pending.jsx";
import Settings from "../pages/Settings.jsx";
import Statistics from "../pages/Statistics.jsx";
import Categories from "../pages/Categories.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/alltask" element={<Alltask />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
        <Route path="/pending" element={<Pending />}></Route>
        <Route path="/setting" element={<Settings />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
