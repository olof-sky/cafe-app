import { React } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

function MainContainer() {
  return (
    <main className="flex xl:px-32 container">
      <Outlet />
      <Aside />
    </main>
  );
}

export default MainContainer;
