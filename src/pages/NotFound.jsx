import { PiDogDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center ">
      <div className="text-4xl text-center ">
        <center>
          <PiDogDuotone size={100} />
        </center>
        <p> Oops! This page doesn't exist. Let's get you back on track!</p>
      </div>

      <Link to="/dashboard" className="bg-violet-600 px-5 py-2 rounded mt-5">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
