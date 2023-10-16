import React from "react";
import nvriLogo from "../assets/images/nvri-logo.png";

function NavBar() {
  return (
    <div className="w-full h-[60px] flex justify-between items-center font-roboto bg-nvriLagBlue text-nvriLagGray ">
      <div className="w-[20%] h-full flex justify-center items-center font-[900] ">
        <img
          className="w-[60px] h-[50px] cursor-pointer "
          src={nvriLogo}
          alt=""
        />
      </div>{" "}
      <ul className="w-[50%] h-full flex justify-around items-center ">
        <li> Home </li> <li> About Us </li> <li> Doctor </li> <li> Pages </li>{" "}
        <li> Services </li> <li> Blog </li> <li> Shop </li>{" "}
      </ul>{" "}
      <div className="w-[25%] h-full flex justify-center items-center ">
        <button className="w-[150px] h-[40px] font-bold rounded-[10px] bg-nvriLagGray text-nvriLagBlue flex justify-center items-center ">
          {" "}
          Get Appointment{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default NavBar;
