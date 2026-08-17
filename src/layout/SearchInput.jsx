import { useContext } from "react";

import { TaskContext } from "../store/TaskContext";

function SearchInput() {
  let { searchInput, setSearchInput } = useContext(TaskContext);
  return (
    <>
      <input
        type="text"
        placeholder="Search Task, Categories.."
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        className="border rounded-2xl p-2 w-full md:w-2xl"
      />
    </>
  );
}
export default SearchInput;
