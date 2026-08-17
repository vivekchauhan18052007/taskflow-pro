import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

function Mode() {
  let { darkMode, setDarkMode } = useContext(TaskContext);
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <BsSun size={25} /> : <BsMoon size={25} />}
    </div>
  );
}
export default Mode;
