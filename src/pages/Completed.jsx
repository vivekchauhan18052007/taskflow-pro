import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";
import Tasks from "../components/Tasks";
import { PiDogDuotone } from "react-icons/pi";

function Completed() {
  let { TaskList } = useContext(TaskContext);

  let CompletedTask = TaskList.filter((task) => task.status === "Completed");
  return (
    <>
      <div className="p-2 rounded text-white bg-violet-800 m-5 text-4xl  ">
        Completed Tasks
      </div>
      <div>
        {CompletedTask.length === 0 ? (
          <div className="text-4xl text-center mt-10">
            <center>
              <PiDogDuotone size={100} />
            </center>
            <p> No completed tasks yet. Complete a task to see it here!</p>
          </div>
        ) : (
          CompletedTask.map((task) => {
            return <Tasks key={task.id} task={task} />;
          })
        )}
      </div>
    </>
  );
}

export default Completed;
