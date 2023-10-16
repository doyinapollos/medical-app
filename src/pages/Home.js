import React from "react";
import LaptopView from "./LaptopView";
import MobileView from "./MobileView";
import TabletView from "./TabletView";

function Home() {
  return (
    <div>
      <div className="hidden md:hidden lg:block ">
        <LaptopView />
      </div>{" "}
      <div className="hidden md:block lg:hidden ">
        <TabletView />
      </div>{" "}
      <div className="md:hidden lg:hidden ">
        <MobileView />
      </div>{" "}
    </div>
  );
}

export default Home;
