import React from "react";
import LatestNews from "../components/LatestNews";
import image1 from "../assets/images/image-1.jpg";
import nvriLagosImage1 from "../assets/images/nvri-lagos-image-1.JPG";
import nvriLagosImage2 from "../assets/images/nvri-lagos-image-2.JPG";
import OpeningHoursMobile from "../components/OpeningHoursMobile";
import NavBarMobile from "../components/NavBarMobile";
import FooterMobile from "../components/FooterMobile";

function MobileView() {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center bg-white ">
      <OpeningHoursMobile />
      <NavBarMobile />
      <section className="w-full h-[350px] flex justify-center items-center bg-nvriLagGray ">
        <div className="w-[90%] h-[90%] flex flex-col justify-around items-center ">
          <p className="text-[40px] font-[700] ">
            Get Better
            <br /> Care For-
            <br /> Your Animals.
          </p>
          <p>
            Here's a step-by-step guide on how to perform a flotation technique
            for counting parasites or eggs
          </p>
          <button className="w-[200px] h-[40px] bg-nvriLagBlue rounded-[7px] text-nvriLagGray ">
            Learn more
          </button>
        </div>
        <div className="hidden w-[55%] h-[90%] md:hidden justify-center rounded-r-[50%]  items-center ">
          <img
            className="w-[80%] rounded-r-[50%] "
            src={nvriLagosImage1}
            alt=""
          />
        </div>
      </section>
      <section className="w-[100%] h-[250px] flex justify-center items-center bg-white ">
        <div className="w-[90%] h-[250px] flex flex-col justify-around items-center ">
          <div className="w-[100%] h-[45%] flex flex-col justify-center items-center bg-gray-200 rounded-[5px] shadow-md p-2 ">
            <div className="w-[90%] h-[95%] flex flex-col justify-around items-center ">
              <div>
                <p>flotation technique for counting parasites</p>
              </div>
              <button className="w-[230px] h-[40px] bg-nvriLagBlue rounded-[7px] text-nvriLagGray ">
                MAKE AN APPOINTMENT
              </button>
            </div>
          </div>
          <div className="w-[100%] h-[45%] flex flex-col justify-center items-center shadow-md bg-gray-200 rounded-[5px] ">
            <div className="w-[90%] h-[95%] flex flex-col justify-center items-center ">
              <p className="text-[16px] ">Emergency call</p>
              <p className="text-[24px] font-bold ">+2348038376835</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[250px] flex justify-center items-center bg-white ">
        <div className="w-[90%] h-full flex justify-around items-center ">
          <div className="w-[45%] h-[90%] flex flex-col justify-around items-center rounded-[5px] shadow-lg p-4 bg-white ">
            <div className="text-[14px] font-bold ">
              <p>Online</p>
              <p>Emergency</p>
            </div>
            <p className="text-[13px] ">
              flotation technique for counting flotation technique for counting
              flotation technique
            </p>
            <img src="" alt="image" />
          </div>
          <div className="w-[45%] h-[90%] flex flex-col justify-around items-center rounded-[5px] shadow-lg p-4 bg-white ">
            <div className="text-[14px] font-bold ">
              <p>Medication</p>
              <p>Service</p>
            </div>
            <p className="text-[12px] ">
              flotation technique for counting flotation technique for counting
              flotation technique
            </p>
            <img src="" alt="image" />
          </div>
        </div>
      </section>
      <section className="w-[100%] h-[500px] flex justify-center items-center bg-white  ">
        <div className="w-[90%] h-full flex flex-col justify-around items-center ">
          <div className="w-[100%] h-[40%] flex justify-center items-center ">
            <img className="w-full h-full " src={nvriLagosImage2} alt="" />
          </div>
          <div className="w-[100%] h-[60%] flex flex-col justify-around items-center ">
            <p className="text-[18px] font-bold ">About our Hospital</p>
            <p className="text-[13px]">
              flotation technique for counting practices flotation technique for
              <br />
              flotation technique for counting flotation technique for counting
              <br />
              flotation technique for counting flotation technique for counting
              <br />
              flotation technique
            </p>
            <div className="w-full h-[100px] flex flex-col justify-around items-center ">
              <div className="w-[60%] flex justify-between items-start ">
                <img src="" alt="image" />
                <p>Browse our site</p>
              </div>
              <div className="w-[60%] flex justify-between items-start ">
                <img src="" alt="image" />
                <p>Choose service</p>
              </div>
              <div className="w-[60%] flex justify-between items-start ">
                <img src="" alt="image" />
                <p>Send message</p>
              </div>
            </div>
            <button className="w-[150px] h-[30px] bg-nvriLagBlue rounded-[7px] text-nvriLagGray ">
              Know more
            </button>
          </div>
        </div>
      </section>
      <LatestNews />
      <section className="w-[90%] h-[500px] flex flex-col justify-center items-center bg-white ">
        <div className="w-[100%] h-[65%] flex flex-col justify-center items-center ">
          <div className="w-[100%] h-[100%] flex flex-col justify-around items-center ">
            <div className="w-[100%] h-[18%] flex flex-col justify-around items-start ">
              <p className="font-[700] text-[16px] ">MEDICAL DEPARTMENTS</p>
              <div className="w-[100%] h-[20px] flex justify-center items-center font-bold ">
                <hr className="w-[100px] border border-blue-500 mr-[10px] " />
                <p> The backbone of our clinic</p>
              </div>
            </div>
            <div className="w-[100%] h-[40%] flex flex-col justify-around items-start ">
              <div className="w-[80%] h-[20px] flex justify-start items-center font-bold ">
                <p className="text-[16px] ">MODERN EQUIPMENT</p>
                <hr className="w-[100px] border border-blue-500 ml-[10px] " />
              </div>
              <p className="text-[14px] ">
                flotation technique for counting flotation technique for
                counting flotation technique for counting flotation technique
                for counting flotation technique for counting flotation
              </p>
            </div>
            <div className="w-[100%] h-[15%] flex justify-around items-center ">
              <button className="w-[150px] h-[40px] bg-nvriLagBlue rounded-[7px] text-nvriLagGray ">
                SURGERY
              </button>
              <button className="w-[150px] h-[40px] bg-nvriLagBlue rounded-[7px] text-nvriLagGray ">
                MICROBIOLOGY
              </button>
            </div>
            <div className="w-[100%] h-[15%] flex justify-center items-center ">
              <button className="w-[250px] h-[40px] bg-nvriLagGray rounded-[7px] font-semibold text-nvriLagBlue ">
                CHECKOUT ALL DEPARTMENTS
              </button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[35%] flex flex-col justify-center items-center ">
          <img className="w-[60%] " src={nvriLagosImage2} alt="" />
        </div>
      </section>
      <section className="w-[90%] h-auto flex flex-col justify-center items-center bg-white ">
        <div className="w-full h-[80px] flex flex-col justify-center items-center bg-nvriLagBlue ">
          <p className="font-bold text-[24px] "> Veterinary Specialists </p>{" "}
          <div className="w-[150px] h-[6px] flex justify-start items-center ">
            <hr className="w-[90px] border border-nvriLagGray " />
          </div>{" "}
          <div className="w-[150px] h-[6px] flex justify-end items-center ">
            <hr className="w-[90px] border border-nvriLagGray " />
          </div>{" "}
        </div>
        <div className="w-[100%] h-auto flex flex-col justify-around items-center ">
          <div className="w-[250px] h-[300px] flex justify-center items-start ">
            <div className="w-[100%] h-[95%] flex flex-col justify-around items-center bg-white shadow-2xl ">
              <div className="w-[100%] h-[80%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Dr Apollos Ebi-erefa
              </p>{" "}
              <p className="text-[13px] h-[10%] ">NVRI Lagos outstation</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[250px] h-[300px] flex justify-center items-start ">
            <div className="w-[100%] h-[95%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[80%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Dr Apollos Ebi-erefa
              </p>{" "}
              <p className="text-[13px] h-[10%] ">NVRI Lagos outstation</p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[250px] h-[300px] flex justify-center items-start ">
            <div className="w-[100%] h-[95%] flex flex-col justify-around items-center bg-white shadow-xl ">
              <div className="w-[100%] h-[80%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={image1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Dr Apollos Ebi-erefa
              </p>{" "}
              <p className="text-[13px] h-[10%] ">NVRI Lagos outstation</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <section className="w-[90%] h-auto flex flex-col justify-center items-center bg-white ">
        <div className="w-full h-[80px] flex flex-col justify-center items-center ">
          <p className="font-bold text-[24px] "> Reliable Services </p>{" "}
          <div className="w-[150px] h-[6px] flex justify-start items-center ">
            <hr className="w-[90px] border border-blue-500 " />
          </div>{" "}
          <div className="w-[150px] h-[6px] flex justify-end items-center ">
            <hr className="w-[90px] border border-blue-500 " />
          </div>{" "}
        </div>
        <div className="w-[80%] h-auto flex flex-col justify-around items-center bg- ">
          <div className="w-[270px] h-[270px] flex justify-center items-start shadow-2xl p-4 ">
            <div className="w-[100%] h-[95%] text-[14px] flex flex-col justify-around items-center bg-white ">
              <div className="w-[100%] h-[60%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={nvriLagosImage1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Animal vaccination
              </p>{" "}
              <p className="text-[13px] h-[30%] ">
                flotation technique for counting flotation technique for
                counting flotation
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[270px] h-[270px] flex justify-center items-start shadow-2xl p-4 ">
            <div className="w-[100%] h-[95%] flex flex-col justify-around items-center bg-white ">
              <div className="w-[100%] h-[60%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={nvriLagosImage2} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Animal disease treatment
              </p>{" "}
              <p className="text-[13px] h-[30%] ">
                flotation technique for counting flotation technique for
                counting flotation
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="w-[270px] h-[270px] flex justify-center items-start p-4 ">
            <div className="w-[100%] h-[95%] flex flex-col justify-around items-center bg-white ">
              <div className="w-[100%] h-[60%] flex flex-col justify-center items-center ">
                <img className="w-full h-full " src={nvriLagosImage1} alt="" />
              </div>{" "}
              <p className="text-[13px] font-bold h-[10%] mt-[10px] ">
                Laboratory services
              </p>{" "}
              <p className="text-[13px] h-[30%] ">
                flotation technique for counting flotation technique for
                counting flotation
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      <FooterMobile />
    </section>
  );
}

export default MobileView;
