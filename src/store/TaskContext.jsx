import { createContext, useReducer, useState } from "react";

const TaskListObj = {
  TaskList: [],
  AddTask: () => {},
  DeleteTask: () => {},
  EditTask: () => {},
  UpdateProgress: () => {},
  TaskCompleted: () => {},

  showTaskForm: false,
  setShowTaskForm: () => {},

  editTask: null,
  setEditTask: () => {},

  progress: 0,
  setProgress: () => {},

  menu: null,
  setMenu: () => {},

  searchInput: "",
  setSearchInput: () => {},

  category: "",
  setCategory: () => {},

  priority: "",
  setPriority: () => {},

  sortBy: "",
  setSortBy: () => {},

  darkMode: false,
  setDarkMode: () => {},
};

export let TaskContext = createContext(TaskListObj);

const TaskListReducer = (currTaskList, action) => {
  let newTaskList = currTaskList;

  if (action.type === "ADD_TASK") {
    newTaskList = [action.payLoad.task, ...currTaskList];
  }

  if (action.type === "DELETE_TASK") {
    newTaskList = currTaskList.filter((task) => task.id !== action.payLoad.id);
  }

  if (action.type === "UPDATE_PROGRESS") {
    newTaskList = currTaskList.map((task) => {
      if (task.id === action.payLoad.id) {
        return {
          ...task,
          progress: action.payLoad.value,
        };
      }

      return task;
    });
  }

  if (action.type === "EDIT_TASK") {
    newTaskList = currTaskList.map((task) => {
      if (task.id === action.payLoad.task.id) {
        return action.payLoad.task;
      }

      return task;
    });
  }

  if (action.type === "TASK_COMPLETED") {
    newTaskList = currTaskList.map((task) => {
      if (task.id === action.payLoad.id) {
        return {
          ...task,
          status: "Completed",
        };
      }

      return task;
    });
  }

  return newTaskList;
};

function TaskListProvider({ children }) {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [progress, setProgress] = useState(0);
  const [editTask, setEditTask] = useState(null);

  const [menu, setMenu] = useState(null);

  const [searchInput, setSearchInput] = useState();

  const [category, setCategory] = useState("All");

  const [priority, setPriority] = useState("All");

  const [sortBy, setSortBy] = useState("none");

  const [darkMode, setDarkMode] = useState(false);

  const [TaskList, dispatch] = useReducer(TaskListReducer, []);

  const AddTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payLoad: {
        task,
      },
    });
  };

  const DeleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payLoad: {
        id,
      },
    });
  };

  const UpdateProgress = (id, value) => {
    dispatch({
      type: "UPDATE_PROGRESS",
      payLoad: {
        id,
        value,
      },
    });
  };

  const EditTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payLoad: {
        task,
      },
    });
  };

  const TaskCompleted = (id) => {
    dispatch({
      type: "TASK_COMPLETED",
      payLoad: {
        id,
      },
    });
  };

  return (
    <TaskContext.Provider
      value={{
        TaskList,

        AddTask,
        DeleteTask,
        EditTask,
        UpdateProgress,
        TaskCompleted,

        editTask,
        setEditTask,

        showTaskForm,
        setShowTaskForm,

        progress,
        setProgress,

        menu,
        setMenu,

        searchInput,
        setSearchInput,

        category,
        setCategory,

        priority,
        setPriority,

        sortBy,
        setSortBy,

        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskListProvider;
