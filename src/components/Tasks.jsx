import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import { MdMoreVert } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import toast from "react-hot-toast";

function Tasks({ task }) {
  let {
    DeleteTask,
    setEditTask,
    setProgress,
    UpdateProgress,
    setShowTaskForm,
    TaskCompleted,
    menu,
    setMenu,
  } = useContext(TaskContext);

  let navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row  gap-5  bg-violet-800  m-3 md:m-10 p-4 text-white rounded-2xl">
        <div>
          <input type="checkbox" />
        </div>

        <div className="flex flex-col flex-1 min-w-80">
          <div className="font-bold">{task.title}</div>
          <div className="truncate">{task.description}</div>
        </div>

        <div className="bg-violet-500 p-2 rounded">{task.category}</div>

        <div
          className={`${task.priority === "Low" && `bg-green-500 p-2 rounded`} 
                    ${task.priority === "Medium" && `bg-orange-500 p-2 rounded`}
                    ${task.priority === "High" && `bg-red-500 p-2 rounded`}`}
        >
          {task.priority}
        </div>

        <div className="min-w-21 flex flex-col align-middle justify-center">
          <div>Due:</div>
          <div>{task.date}</div>
        </div>

        <div className="flex items-center">
          <div
            className={` rounded-full mr-2 h-5 w-5 ${
              task.status === "Completed"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          ></div>
          <div>{task.status}</div>
        </div>

        <div>
          {task.progress}%
          <input
            type="range"
            min={0}
            max={100}
            value={task.progress}
            onChange={(event) => {
              UpdateProgress(task.id, Number(event.target.value));
            }}
          />
        </div>

        <div>
          <CiEdit
            size={25}
            className="hover:bg-violet-500 hover:border active:opacity-50 "
            onClick={() => {
              setEditTask(task);
              setShowTaskForm(true);
              setProgress(task.progress);
            }}
          />
        </div>

        <div>
          <AiTwotoneDelete
            size={25}
            className="hover:bg-violet-500 hover:border text-red-700 active:opacity-50 "
            onClick={() => {
              DeleteTask(task.id);
              toast.success("Task deleted!");
            }}
          />
        </div>

        <div className="relative">
          <MdMoreVert
            size={25}
            className={`hover:bg-violet-500  hover:border text-white active:opacity-50 `}
            onClick={() => {
              setMenu(menu === task.id ? null : task.id);
            }}
          />

          {menu === task.id && (
            <div
              className="absolute right-0 top-8 bg-violet-700 rounded-md shadow-xl p-2 z-50 whitespace-nowrap cursor-pointer hover:bg-violet-600"
              onClick={() => {
                setMenu(null);
                navigate("/completed");
                TaskCompleted(task.id);
                toast.success("Task Completed!");
              }}
            >
              Completed
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default memo(Tasks);
