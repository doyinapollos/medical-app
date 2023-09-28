import React from "react";

function OpenHours() {
  return (
    <div className="w-full h-[40px] flex justify-center items-center bg-[#EEEFFF] ">
      <div className="w-full h-full flex justify-between items-center ">
        <div className="w-[60%] h-full flex justify-end items-center ">
          <p>Opening Hours: Monday to Saturday - 8am to 6pm</p>
        </div>

        <div className="w-[30%] h-full flex justify-center items-center ">
          <spn>Contact: +2348038376835</spn>
        </div>
      </div>
    </div>
  );
}

export default OpenHours;
