import { useContext, useState } from "react";
import { TaskContext } from "../store/TaskContext";

function Settings() {
  const { TaskList, setDarkMode, darkMode } = useContext(TaskContext);

  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-full p-5 text-white">
      {/* Heading */}
      <div className="bg-violet-800 p-5 rounded-xl mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="text-gray-300 mt-1">
          Manage your application preferences
        </p>
      </div>

      {/* Appearance */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 mb-5">
        <h2 className="text-xl font-bold mb-5">Appearance</h2>

        {/* Dark Mode */}
        <div className="flex justify-between items-center border-b border-violet-800 pb-5">
          <div>
            <h3 className="font-semibold">Dark Mode</h3>

            <p className="text-gray-400 text-sm">
              Change the appearance of the application
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-7 rounded-full p-1 transition ${
              darkMode ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition ${
                darkMode ? "translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Task Information */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 mb-5">
        <h2 className="text-xl font-bold mb-5">Task Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-violet-800 p-4 rounded-lg">
            <p className="text-gray-300">Total Tasks</p>

            <p className="text-3xl font-bold mt-2">{TaskList.length}</p>
          </div>

          <div className="bg-violet-800 p-4 rounded-lg">
            <p className="text-gray-300">Completed Tasks</p>

            <p className="text-3xl font-bold mt-2">
              {TaskList.filter((task) => task.status === "Completed").length}
            </p>
          </div>

          <div className="bg-violet-800 p-4 rounded-lg">
            <p className="text-gray-300">Pending Tasks</p>

            <p className="text-3xl font-bold mt-2">
              {TaskList.filter((task) => task.status === "Pending").length}
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-violet-950 border border-violet-800 rounded-xl p-5">
        <h2 className="text-xl font-bold mb-3">About Me</h2>

        <h3 className="text-2xl font-semibold">Vivek Chauhan</h3>

        <p className="text-gray-400 mt-2">
          I am a frontend developer passionate about building modern and
          user-friendly web applications.
        </p>

        <p className="text-gray-400 mt-2">
          Skills: React.js, Htlml, Css, JavaScript, Tailwind CSS
        </p>

        <p className="text-gray-500 text-sm mt-4">
          Task Manager • Version 1.0.0
        </p>
      </div>
    </div>
  );
}

export default Settings;
