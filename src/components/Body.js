import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="grid grid-flow-col ">
      <SideBar />
      <MainContainer/>
    </div>
  );
}

export default Body;
