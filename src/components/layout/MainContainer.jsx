import { React } from "react";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import useFirestore from "../../hooks/useFirestore";

function MainContainer() {
  const data = useFirestore("data");
  return (
    <main className="flex xl:px-32 container">
      <Outlet context={data.docs} />
      <Aside cards={data.docs.asideCards} />
    </main>
  );
}

export default MainContainer;
