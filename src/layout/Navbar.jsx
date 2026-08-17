import { IoAddSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import SearchInput from "./SearchInput";
import Mode from "./Mode";

function Navbar() {
  let { showTaskForm, setShowTaskForm } = useContext(TaskContext);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-3 pl-5 pr-5 border-b-4 border-gray-500   pt-2 pb-4">
        <Link to="/deshboard">
          <div>
            <h1 className="text-2xl ">Task Flow</h1>
          </div>
        </Link>

        <div>
          <SearchInput></SearchInput>
        </div>

        <div
          className="flex border p-2 items-center rounded-2xl bg-violet-800 text-white hover active "
          onClick={() => {
            setShowTaskForm(true);
          }}
        >
          <IoAddSharp size={25} />
          Add Task
        </div>

        <div className="flex border p-2 items-center rounded-2xl bg-violet-800 text-white hover active ">
          <IoNotificationsSharp size={25} />
        </div>

        <div className="flex border p-2 items-center rounded-2xl bg-violet-800 text-white hover active ">
          <Mode></Mode>
        </div>

        <div className="flex border rounded-2xl p-2 items-center bg-violet-800 text-white hover active ">
          <FaUser size={25} />
          Vivek Chauhan
        </div>
      </div>
    </>
  );
}

export default Navbar;
