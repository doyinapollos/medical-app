import React from "react";
import OpenHours from "../components/OpenHours";
import NavBar from "../components/NavBar";

function LaptopView() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center ">
      <OpenHours />
      <NavBar />
    </div>
  );
}

export default LaptopView;
