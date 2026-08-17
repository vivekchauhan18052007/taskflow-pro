import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

function Sort() {
  let { sortBy, setSortBy } = useContext(TaskContext);
  return (
    <>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 rounded text-white bg-violet-800 ml-3 border "
      >
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="DueDate">Due Date</option>
        <option value="Priority">Priority</option>
      </select>
    </>
  );
}

export default Sort;
