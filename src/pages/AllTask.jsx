import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import Tasks from "../components/Tasks";
import { PiDogDuotone } from "react-icons/pi";

function Alltask() {
  let { TaskList } = useContext(TaskContext);
  return (
    <>
      <div className="p-2 rounded text-white bg-violet-800 m-5 text-4xl  ">
        All Tasks
      </div>
      <div>
        {TaskList.length === 0 ? (
          <div className="text-4xl text-center mt-10">
            <center>
              <PiDogDuotone size={100} />
            </center>
            <p> You don't have any tasks yet.</p>
          </div>
        ) : (
          TaskList.map((task) => {
            return <Tasks key={task.id} task={task} />;
          })
        )}
      </div>
    </>
  );
}

export default Alltask;
