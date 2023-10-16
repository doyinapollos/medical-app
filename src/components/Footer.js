import React from "react";
import nvriLogo from "../assets/images/nvri-logo.png";

function Footer(props) {
  return (
    <footer className="w-full h-[300px] flex flex-col justify-center items-center bg-nvriLagBlue text-nvriLagGray ">
      <div className="w-[90%] h-[250px] text-[14px] flex justify-around items-center ">
        <div className="w-[25%] h-full flex flex-col justify-around items-start  ">
          <img className="w-[50px] " src={nvriLogo} alt="" />
          <p className="text-[13px] ">
            If you 're in need of medicine- <br />
            for your animal <br />
            We 're here by your side. <br />
            Stay safe and buy online!
          </p>{" "}
          <div className="w-[80%] h-[20%] flex justify-between items-start ">
            <img src="" alt="image" />
            <img src="" alt="image" />
            <img src="" alt="image" />
            <img src="" alt="image" />
          </div>{" "}
        </div>{" "}
        <div className="w-[20%] h-full flex flex-col justify-around items-center ">
          <ul className=" ">
            <li className="mb-[25px] font-bold "> Useful Pages </li>{" "}
            <li className="mb-[10px]"> Shop </li>{" "}
            <li className="mb-[10px]"> Gift Cards </li>{" "}
            <li className="mb-[10px]"> All Services </li>{" "}
            <li className="mb-[10px]"> About Us </li>{" "}
            <li className="mb-[]"> Contacts </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="w-[25%] h-full flex flex-col justify-center items-center ">
          <ul className="mt-[-25px] ">
            <li className="mb-[25px] font-bold "> Contacts </li>{" "}
            <li className="mb-[2px]"> 5, Keffi St, Off Awolowo </li>{" "}
            <li className="mb-[5px]"> Ikoyi </li>{" "}
            <li className="mb-[5px]"> +2348038376835 </li>{" "}
            <li className="mb-[2px]"> nvrilagos @gmail.com </li>{" "}
            <li className="mb-[]"> doyinapollos @gmail.com </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="w-[25%] h-full flex flex-col justify-around items-start ">
          <span className="font-bold mt-[12px] "> Newsletter </span>{" "}
          <span className="text-[13px] ">
            Join our newsletter and receive <br />
            10 % of your first purchase{" "}
          </span>{" "}
          <div className="w-[200px] h-[50px] ">
            <input
              className="w-[140px] h-full bg-nvriLagYellow rounded-l-[10px] text-nvriLagRoyalBlue pl-[7px] text-[12px] "
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="w-[60px] h-full ml-[-12px] bg-white font-bold text-black rounded-[10px] ">
              Ok{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-full h-[50px] text-[14px] lg:text-[12px] flex flex-col justify-center items-center text-nvriLagGray bg-nvriLagRoyalBlue ">
        <p>
          copy right @nvrilagos 2023. Trademarks and brands are the property of
          the registered owner{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
