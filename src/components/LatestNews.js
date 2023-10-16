import React from "react";
import image1 from "../assets/images/image-1.jpg";

function LatestNews() {
  return (
    <section className="w-[100%] h-auto md:h-[550px] flex flex-col justify-center items-center bg-white ">
      <div className="w-[90%] h-full flex flex-col justify-center items-center ">
        {" "}
        <div className="w-full h-[80px] lg:h-[100px] flex flex-col justify-center items-center bg-nvriLagBlue ">
          <p className="font-bold text-[18px] lg:text-[24px] "> LATEST NEWS </p>{" "}
          <div className="w-[120px] lg:w-[150px] h-[6px] flex justify-start items-center ">
            <hr className="w-[80px] lg:w-[90px] border border-nvriLagGray " />
          </div>{" "}
          <div className="w-[120px] lg:w-[150px] h-[6px] flex justify-end items-center ">
            <hr className="w-[80px] lg:w-[90px] border border-nvriLagGray " />
          </div>{" "}
        </div>{" "}
        <div className="w-full h-auto flex flex-col justify-around items-center md:h-[450px] md:flex md:flex-row md:justify-around md:items-start bg-white ">
          <div className="w-[250px] h-[300px] md:h-[400px] flex justify-center items-start  ">
            <div className="w-[90%] h-[97%] md:h-[80%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[45%] mt-[-10px] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <p className="text-[13px] ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <div className="flex justify-center items-center ">
                <p className="text-[12px] "> Read more </p>{" "}
                <img src="" alt="arrow" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[250px] h-[300px] md:h-[400px] flex justify-center items-end ">
            <div className="w-[90%] h-[97%] md:h-[80%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[45%] mt-[-10px] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <p className="text-[13px] ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <div className="flex justify-center items-center ">
                <p className="text-[12px] "> Read more </p>{" "}
                <img src="" alt="arrow" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="hidden md:w-[250px] h-[400px] md:flex justify-center items-start ">
            <div className="w-[90%] h-[80%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[45%] mt-[-10px] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <p className="text-[13px] ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <div className="flex justify-center items-center ">
                <p className="text-[12px] "> Read more </p>{" "}
                <img src="" alt="arrow" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="hidden md:hidden lg:w-[250px] h-[400px] lg:flex justify-center items-end ">
            <div className="w-[90%] h-[80%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[45%] mt-[-10px] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <p className="text-[13px] ">
                flotation technique for counting <br /> flotation technique for
                counting{" "}
              </p>{" "}
              <div className="flex justify-center items-center ">
                <p className="text-[12px] "> Read more </p>{" "}
                <img src="" alt="arrow" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default LatestNews;
