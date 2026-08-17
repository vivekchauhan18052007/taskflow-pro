import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

function Category() {
  let { category, setCategory } = useContext(TaskContext);
  return (
    <>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded text-white bg-violet-800 ml-3 border "
      >
        <option value="All">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Shopping">Shopping</option>
      </select>
    </>
  );
}

export default Category;
