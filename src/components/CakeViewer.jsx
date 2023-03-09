import { React, useState, useContext } from "react";
import NavButton from "./buttons/NavButton";
import Loader from "./Loader";
import CakeSmallCard from "./cards/CakeSmallCard";
import { Context } from "../data/context";

function CakeViewer() {
  const { cakes } = useContext(Context);
  const [selectedCake, setSelectedCake] = useState(Object.entries(cakes)[0]);

  return (
    <article className="cake-viewer flex flex-col justify-end xl:justify-start xl:flex-row relative h-[600px] xl:h-fit sm:w-[640px] xl:w-[900px]">
      <div className="flex flex-col w-screen xl:w-fit sm:border-b sm:border-t sm:border xl:border border-yellow sm:w-[640px]">
        <div className="drop-shadow-xl w-screen sm:w-[640px] xl:w-[640px] flex justify-center bg-white">
          <img
            className=" w-60 xl:w-96 mb-6"
            alt="cake-selected"
            src={selectedCake[1].img}
          />
        </div>
        <div className="flex flex-col items-center gap-4 py-6 pb-8 bg-dark-red sm:bg-red xl:bg-red w-full ">
          <h2>{selectedCake[0]}</h2>
          <NavButton url={"/tartar" + selectedCake[1].navLink} text="Beställ" />
        </div>
      </div>
      <div className="flex flex-row xl:flex-col w-screen sm:w-full xl:w-fit xl:h-full top-0 gap-6 pb-6 xl:pb-0 overflow-y-hidden xl:overflow-y-scroll xl:overflow-x-hidden absolute xl:right-0 xl:pr-4">
        {cakes ? (
          Object.keys(cakes).map((cake, i) => {
            return (
              <CakeSmallCard
                key={i}
                selectCake={() => setSelectedCake(Object.entries(cakes)[i])}
                image={cakes[cake].img}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </article>
  );
}
export default CakeViewer;
