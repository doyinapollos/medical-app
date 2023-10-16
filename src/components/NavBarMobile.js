import React from "react";
import nvriLogo from "../assets/images/nvri-logo.png";

function NavBarMobile() {
  return (
    <section className="w-full h-[60px] flex justify-center items-center font-roboto bg-nvriLagBlue text-nvriLagGray ">
      <div className="w-[90%] h-full flex justify-between items-center bg-nvriLagBlue ">
        <img
          className="w-[60px] h-[50px] cursor-pointer "
          src={nvriLogo}
          alt=""
        />
        <button className="w-[150px] h-[30px] font-bold rounded-[5px] bg-nvriLagGray text-nvriLagBlue flex justify-center items-center ">
          {" "}
          Get Appointment{" "}
        </button>{" "}
        <p> menu </p>{" "}
      </div>{" "}
    </section>
  );
}

export default NavBarMobile;
