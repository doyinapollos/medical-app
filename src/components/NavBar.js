import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[60px] flex justify-between items-center bg-red-400 ">
      <div className="w-[20%] h-full flex justify-center items-center text-[900] ">
        @NVRILagos
      </div>{" "}
      <ul className="w-[50%] h-full flex justify-around items-center ">
        <li> Home </li> <li> About Us </li> <li> Doctor </li> <li> Pages </li>{" "}
        <li> Services </li> <li> Blog </li> <li> Shop </li>{" "}
      </ul>{" "}
      <div className="w-[25%] h-full flex justify-center items-center ">
        <button className="w-[150px] h-[40px] text-bold rounded-[10px] bg-[#eeefff] text-[#032FF2] flex justify-center items-center ">
          {" "}
          Get Appointment{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default NavBar;
