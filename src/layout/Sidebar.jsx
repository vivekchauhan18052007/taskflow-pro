import { FaHome } from "react-icons/fa";
import { FcParallelTasks } from "react-icons/fc";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="hidden md:flex gap-5 p-5 h-screen w-70 flex-col">
        <Link to="/dashboard">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <FaHome />
            <div className="pl-2">Dashboard</div>
          </div>
        </Link>

        <Link to="/alltask">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <FcParallelTasks />
            <div className="pl-2">All Task</div>
          </div>
        </Link>

        <Link to="/completed">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <IoCloudDoneSharp />
            <div className="pl-2">Completed</div>
          </div>
        </Link>

        <Link to="/pending">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <MdOutlinePendingActions />
            <div className="pl-2">Pending</div>
          </div>
        </Link>

        <Link to="/categories">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <MdCategory />
            <div className="pl-2">Categories</div>
          </div>
        </Link>

        <Link to="/statistics">
          <div className="flex  bg-violet-800 border text-white border-white p-2 items-center active hover">
            <FcStatistics />
            <div className="pl-2">Statistics</div>
          </div>
        </Link>

        <Link to="/setting">
          <div className="flex  bg-violet-800 border text-white  border-white p-2 items-center active hover">
            <MdOutlineSettings />
            <div className="pl-2">Setting</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
