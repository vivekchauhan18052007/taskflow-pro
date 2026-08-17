import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import Tasks from "../components/Tasks";
import { PiDogDuotone } from "react-icons/pi";

function Pending() {
  let { TaskList } = useContext(TaskContext);

  let PendingTask = TaskList.filter((task) => task.status === "Pending");
  return (
    <>
      <div className="p-2 rounded text-white bg-violet-800 m-5 text-4xl  ">
        Pending Tasks
      </div>
      <div>
        {PendingTask.length === 0 ? (
          <div className="text-4xl text-center mt-10">
            <center>
              <PiDogDuotone size={100} />
            </center>
            <p> No Pending Tasks!</p>
          </div>
        ) : (
          PendingTask.map((task) => {
            return <Tasks key={task.id} task={task} />;
          })
        )}
      </div>
    </>
  );
}

export default Pending;
