import NavButton from "../components/buttons/NavButton";
import CakeSmallCard from "../components/cards/CakeSmallCard";
import { cakeList } from "../data/data";
import { React, useEffect, useState } from "react";

function CakeViewer() {
  const [cakes, setCakes] = useState([]);
  const [selectedCake, setSelectedCake] = useState({});
  const list = cakeList;

  useEffect(() => {
    setCakes(list);
    setSelectedCake(list[0]);
  }, []);

  return (
    <article className="cake-viewer flex flex-col justify-end lg:justify-start lg:flex-row relative h-[600px] lg:h-fit sm:w-[640px] lg:w-[900px]">
      <div className="flex flex-col w-screen lg:w-fit sm:border-b sm:border-t sm:border lg:border border-yellow sm:w-[640px]">
        <div className="drop-shadow-xl w-screen sm:w-[640px] lg:w-[640px] flex justify-center bg-white">
          <img
            className=" w-60 lg:w-96 mb-6"
            alt="cake-selected"
            src={selectedCake.img}
          />
        </div>
        <div className="flex flex-col items-center gap-4 py-6 pb-8 bg-dark-red sm:bg-red lg:bg-red w-full ">
          <h2>{selectedCake.name}</h2>
          <NavButton url={"/tartar" + selectedCake.link} text="Beställ" />
        </div>
      </div>
      <div className="flex flex-row lg:flex-col w-screen sm:w-full lg:w-fit lg:h-full top-0 gap-6 pb-6 lg:pb-0 overflow-y-hidden lg:overflow-y-scroll lg:overflow-x-hidden absolute lg:right-0 lg:pr-4">
        {cakes.map((cake, i) => {
          return (
            <CakeSmallCard
              key={i}
              selectCake={() => setSelectedCake(cake)}
              image={cake.img}
            />
          );
        })}
      </div>
    </article>
  );
}
export default CakeViewer;
