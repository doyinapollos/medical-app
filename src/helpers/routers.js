import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { NonAuthRoutes } from "./url";
import MobileView from "../pages/MobileView";
import TabletView from "../pages/TabletView";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
        <Route path={NonAuthRoutes.mobile} element={<MobileView />} />{" "}
        <Route path={NonAuthRoutes.tabletview} element={<TabletView />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
