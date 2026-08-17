import { useContext, useEffect, useRef, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { TaskContext } from "../store/TaskContext";
import toast from "react-hot-toast";

function AddTaskForm() {
  const {
    setShowTaskForm,
    AddTask,
    EditTask,
    setEditTask,
    editTask,
    progress,
    setProgress,
  } = useContext(TaskContext);

  const titleElement = useRef();
  const descriptionElement = useRef();
  const categoryElement = useRef();
  const priorityElement = useRef();
  const pendingElement = useRef();
  const completedElement = useRef();
  const dateElement = useRef();
  const progressElement = useRef();

  useEffect(() => {
    if (editTask) {
      titleElement.current.value = editTask.title;
      descriptionElement.current.value = editTask.description;
      categoryElement.current.value = editTask.category;
      priorityElement.current.value = editTask.priority;
      dateElement.current.value = editTask.date;
      progressElement.current.value = editTask.progress;
      setProgress(editTask.progress);

      if (editTask.status === "Pending") {
        pendingElement.current.checked = true;
      } else {
        completedElement.current.checked = true;
      }
    } else {
      titleElement.current.value = "";
      descriptionElement.current.value = "";
      categoryElement.current.value = "Work";
      priorityElement.current.value = "Low";
      dateElement.current.value = "";
      progressElement.current.value = 0;
      pendingElement.current.checked = true;
      completedElement.current.checked = false;
      setProgress(0);
    }
  }, [editTask]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: editTask ? editTask.id : Date.now(),
      title: titleElement.current.value,
      description: descriptionElement.current.value,
      category: categoryElement.current.value,
      priority: priorityElement.current.value,
      status: pendingElement.current.checked ? "Pending" : "Completed",
      date: dateElement.current.value,
      progress: progress,
    };

    if (editTask) {
      EditTask(task);
    } else {
      AddTask(task);
      toast.success("Task Added Successfully!");
    }

    setShowTaskForm(false);

    setEditTask(null);
    setProgress(0);
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-170 h-180 mt-50 bg-violet-900 rounded-xl p-5 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-violet-700 pb-3">
          <h2 className="text-2xl font-semibold text-white">
            {editTask ? "Edit Task" : "Add New Task"}
          </h2>

          <button
            onClick={() => setShowTaskForm(false)}
            className="text-white hover:text-red-400"
          >
            <FaRegWindowClose size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          {/* Task Title */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">Task Title</label>

            <input
              type="text"
              placeholder="Enter task title..."
              ref={titleElement}
              className="bg-violet-800 border border-violet-700 rounded-md  px-3 py-2 text-white outline-none"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">Description</label>

            <textarea
              rows="2"
              placeholder="Enter task description..."
              ref={descriptionElement}
              className="bg-violet-800 border border-violet-700 rounded-md px-3 py-2 text-white resize-none outline-none"
            ></textarea>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">Category</label>

            <select
              ref={categoryElement}
              className="bg-violet-800 border border-violet-700 rounded-md px-3 py-2 text-white"
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Study</option>
              <option>Shopping</option>
            </select>
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">Priority</label>

            <select
              ref={priorityElement}
              className="bg-violet-800 border border-violet-700 rounded-md px-3 py-2 text-white"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <label className="text-white font-medium">Status</label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="status" ref={pendingElement} />
                Pending
              </label>

              <label className="flex items-center gap-2 text-white">
                <input type="radio" name="status" ref={completedElement} />
                Completed
              </label>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">Due Date</label>

            <input
              type="date"
              ref={dateElement}
              className="bg-violet-800 border border-violet-700 rounded-md px-3 py-2 text-white"
            />
          </div>

          {/* Progress */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium">
              Progress = {progress}%
            </label>

            <input
              type="range"
              min={0}
              max={100}
              ref={progressElement}
              onChange={(event) => {
                setProgress(event.target.value);
              }}
              className="cursor-pointer"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => {
                setShowTaskForm(false);
                setEditTask(null);
                setProgress(0);
              }}
              className="px-5 py-2 rounded-md bg-gray-600 hover:bg-gray-500 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-violet-600 hover:bg-violet-500 text-white"
            >
              {editTask ? "EditTask" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
