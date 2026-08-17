import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

function Priority() {
  let { priority, setPriority } = useContext(TaskContext);
  return (
    <>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-2 rounded text-white bg-violet-800 ml-3 border "
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </>
  );
}

export default Priority;
