import Tasks from "../components/Tasks.jsx";
import Header from "../Header/Header.jsx";
import { useContext, useMemo } from "react";
import { TaskContext } from "../store/TaskContext";
import { PiDogDuotone } from "react-icons/pi";
import { FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";
import { MdPriorityHigh } from "react-icons/md";

function Dashboard() {
  const { TaskList, searchInput, category, priority, sortBy } =
    useContext(TaskContext);

  const totalTasks = TaskList.length;

  const completedTasks = TaskList.filter(
    (task) => task.status === "Completed",
  ).length;

  const pendingTasks = TaskList.filter(
    (task) => task.status === "Pending",
  ).length;

  const highPriorityTasks = TaskList.filter(
    (task) => task.priority === "High",
  ).length;

  const filteredTasks = useMemo(() => {
    const search = (searchInput || "").toLowerCase();

    let result = [...TaskList];

    // Search
    result = result.filter((task) => {
      const title = (task.title || "").toLowerCase();
      const description = (task.description || "").toLowerCase();
      const taskCategory = (task.category || "").toLowerCase();

      return (
        title.includes(search) ||
        description.includes(search) ||
        taskCategory.includes(search)
      );
    });

    // Category
    if (category !== "All") {
      result = result.filter((task) => task.category === category);
    }

    // Priority
    if (priority !== "All") {
      result = result.filter((task) => task.priority === priority);
    }

    // Sort
    if (sortBy === "Newest") {
      result.sort((a, b) => b.id - a.id);
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    if (sortBy === "DueDate") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (sortBy === "Priority") {
      const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      result.sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
      );
    }

    return result;
  }, [TaskList, searchInput, category, priority, sortBy]);

  return (
    <div className="min-h-full p-5">
      {/* Header */}
      <Header />

      {/* Dashboard Title */}
      <div className="mt-6 mb-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-400 mt-1">
          Manage your tasks and track your progress
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total */}
        <div className="bg-violet-800 rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-300">Total Tasks</p>
              <h2 className="text-3xl font-bold mt-2">{totalTasks}</h2>
            </div>

            <FaTasks size={35} />
          </div>
        </div>

        {/* Completed */}
        <div className="bg-green-700 rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-200">Completed</p>
              <h2 className="text-3xl font-bold mt-2">{completedTasks}</h2>
            </div>

            <FaCheckCircle size={35} />
          </div>
        </div>

        {/* Pending */}
        <div className="bg-orange-600 rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-200">Pending</p>
              <h2 className="text-3xl font-bold mt-2">{pendingTasks}</h2>
            </div>

            <FaClock size={35} />
          </div>
        </div>

        {/* High Priority */}
        <div className="bg-red-700 rounded-xl p-5 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-200">High Priority</p>
              <h2 className="text-3xl font-bold mt-2">{highPriorityTasks}</h2>
            </div>

            <MdPriorityHigh size={40} />
          </div>
        </div>
      </div>

      {/* Tasks Heading */}
      <div className="mt-8 mb-3">
        <h2 className="text-2xl font-bold">Your Tasks</h2>
      </div>

      {/* Tasks */}
      {filteredTasks.length === 0 ? (
        <div className="flex flex-col items-center text-center mt-10">
          <PiDogDuotone size={100} />

          <p className="text-2xl mt-3">No tasks found</p>

          <p className="text-gray-400 mt-2">
            Create your first task to get started!
          </p>
        </div>
      ) : (
        filteredTasks.map((task) => <Tasks key={task.id} task={task} />)
      )}
    </div>
  );
}

export default Dashboard;
