import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import { PiDogDuotone } from "react-icons/pi";
import Tasks from "../components/Tasks.jsx";

function Categories() {
  const { TaskList } = useContext(TaskContext);

  const categories = ["Work", "Personal", "Study", "Shopping"];

  return (
    <div className="min-h-full p-5 text-white">
      {/* Heading */}
      <div className="mb-8 bg-violet-800 p-3 rounded text-white">
        <h1 className="text-3xl font-bold">Categories</h1>
        <p className="text-gray-400 mt-1">Manage your tasks by category</p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
        {categories.map((category) => {
          const categoryTasks = TaskList.filter(
            (task) => task.category === category,
          );

          const totalTasks = categoryTasks.length;

          const completedTasks = categoryTasks.filter(
            (task) => task.status === "Completed",
          ).length;

          const pendingTasks = categoryTasks.filter(
            (task) => task.status === "Pending",
          ).length;

          const progress =
            totalTasks === 0
              ? 0
              : Math.round((completedTasks / totalTasks) * 100);

          return (
            <div
              key={category}
              className="bg-violet-950 border border-violet-800 rounded-xl p-5"
            >
              {/* Category Name */}
              <h2 className="text-xl font-bold mb-4">{category}</h2>

              {/* Total */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Total Tasks</span>

                <span className="font-bold">{totalTasks}</span>
              </div>

              {/* Completed */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Completed</span>

                <span className="text-green-400 font-bold">
                  {completedTasks}
                </span>
              </div>

              {/* Pending */}
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Pending</span>

                <span className="text-orange-400 font-bold">
                  {pendingTasks}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-2 flex justify-between">
                <span className="text-gray-400">Progress</span>

                <span>{progress}%</span>
              </div>

              <div className="w-full h-2 bg-violet-800 rounded-full">
                <div
                  className="h-2 bg-amber-100  rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Tasks */}
      <div className="text-black">
        <h2 className="text-2xl font-bold mb-5">All Category Tasks</h2>

        {TaskList.length === 0 ? (
          <div className="flex flex-col items-center text-center mt-10">
            <PiDogDuotone size={100} />
            No tasks found.
          </div>
        ) : (
          categories.map((category) => {
            const categoryTasks = TaskList.filter(
              (task) => task.category === category,
            );

            if (categoryTasks.length === 0) {
              return null;
            }

            return (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-3">{category}</h3>

                {categoryTasks.map((task) => (
                  <Tasks key={task.id} task={task} />
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Categories;
