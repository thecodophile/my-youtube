import React from "react";
import { Outlet } from "react-router-dom";
import LeftNav from "./LeftNav";
// import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col relative">
      <Sidebar />
      <LeftNav />
      {/* <MainContainer /> */}
      <Outlet />
    </div>
  );
};

export default Body;
