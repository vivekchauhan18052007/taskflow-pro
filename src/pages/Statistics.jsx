import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

function Statistics() {
  const { TaskList } = useContext(TaskContext);

  // Total tasks
  const totalTasks = TaskList.length;

  // Completed tasks
  const completedTasks = TaskList.filter(
    (task) => task.status === "Completed",
  ).length;

  // Pending tasks
  const pendingTasks = TaskList.filter(
    (task) => task.status === "Pending",
  ).length;

  // Completion percentage
  const completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // Priority
  const highPriority = TaskList.filter(
    (task) => task.priority === "High",
  ).length;

  const mediumPriority = TaskList.filter(
    (task) => task.priority === "Medium",
  ).length;

  const lowPriority = TaskList.filter((task) => task.priority === "Low").length;

  // Categories
  const workTasks = TaskList.filter((task) => task.category === "Work").length;

  const personalTasks = TaskList.filter(
    (task) => task.category === "Personal",
  ).length;

  const studyTasks = TaskList.filter(
    (task) => task.category === "Study",
  ).length;

  const shoppingTasks = TaskList.filter(
    (task) => task.category === "Shopping",
  ).length;

  return (
    <div className="min-h-full p-5 text-white">
      {/* Heading */}
      <div className="bg-violet-800 p-5 rounded-xl mb-6">
        <h1 className="text-3xl font-bold">Statistics</h1>

        <p className="text-gray-300 mt-1">Overview of your task progress</p>
      </div>

      {/* Main Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total */}
        <div className="bg-violet-950 border border-violet-800 rounded-xl p-5">
          <p className="text-gray-400">Total Tasks</p>

          <h2 className="text-4xl font-bold mt-2">{totalTasks}</h2>
        </div>

        {/* Completed */}
        <div className="bg-violet-950 border border-green-700 rounded-xl p-5">
          <p className="text-gray-400">Completed</p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            {completedTasks}
          </h2>
        </div>

        {/* Pending */}
        <div className="bg-violet-950 border border-orange-700 rounded-xl p-5">
          <p className="text-gray-400">Pending</p>

          <h2 className="text-4xl font-bold text-orange-400 mt-2">
            {pendingTasks}
          </h2>
        </div>

        {/* Completion Rate */}
        <div className="bg-violet-950 border border-blue-700 rounded-xl p-5">
          <p className="text-gray-400">Completion Rate</p>

          <h2 className="text-4xl font-bold text-blue-400 mt-2">
            {completionRate}%
          </h2>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 mt-6">
        <div className="flex justify-between mb-2">
          <h2 className="text-xl font-bold">Overall Progress</h2>

          <span>{completionRate}%</span>
        </div>

        <div className="w-full h-3 bg-violet-800 rounded-full">
          <div
            className="h-3 bg-green-500 rounded-full"
            style={{
              width: `${completionRate}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Priority Statistics */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 mt-6">
        <h2 className="text-xl font-bold mb-5">Priority Statistics</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>High Priority</span>
            <span className="text-red-400 font-bold">{highPriority}</span>
          </div>

          <div className="flex justify-between">
            <span>Medium Priority</span>
            <span className="text-orange-400 font-bold">{mediumPriority}</span>
          </div>

          <div className="flex justify-between">
            <span>Low Priority</span>
            <span className="text-green-400 font-bold">{lowPriority}</span>
          </div>
        </div>
      </div>

      {/* Category Statistics */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 mt-6">
        <h2 className="text-xl font-bold mb-5">Category Statistics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-violet-800 p-4 rounded-lg flex justify-between">
            <span>Work</span>
            <span className="font-bold">{workTasks}</span>
          </div>

          <div className="bg-violet-800 p-4 rounded-lg flex justify-between">
            <span>Personal</span>
            <span className="font-bold">{personalTasks}</span>
          </div>

          <div className="bg-violet-800 p-4 rounded-lg flex justify-between">
            <span>Study</span>
            <span className="font-bold">{studyTasks}</span>
          </div>

          <div className="bg-violet-800 p-4 rounded-lg flex justify-between">
            <span>Shopping</span>
            <span className="font-bold">{shoppingTasks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
