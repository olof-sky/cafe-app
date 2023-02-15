import NavButton from "../components/buttons/NavButton";
import CakeSmallCard from "../components/cards/CakeSmallCard";
import cakeList from "../data/data";
import { React, useEffect, useState } from "react";

function CakeViewer() {
  const [cakes, setCakes] = useState([]);
  const [selectedCake, setSelectedCake] = useState({});

  useEffect(() => {
    setCakes(cakeList);
    setSelectedCake(cakeList[0]);
  }, []);

  return (
    <article className="cake-viewer flex flex-col justify-end md:justify-start md:flex-row gap-6 relative h-[600px] md:h-fit md:w-[900px]">
      <div className="flex flex-col w-screen md:w-fit md:border border-yellow ">
        <div className="drop-shadow-xl w-screen md:w-[660px] flex justify-center bg-white">
          <img
            className=" w-60 md:w-96 mb-6"
            alt="cake-selected"
            src={selectedCake.img}
          />
        </div>
        <div className="flex flex-col items-center gap-4 py-6 pb-8 bg-dark-red md:bg-red w-full ">
          <h2>{selectedCake.name}</h2>
          <NavButton url={"/tartar" + selectedCake.link} text="Beställ" />
        </div>
      </div>
      <div className="flex flex-row md:flex-col w-screen md:w-fit md:h-full top-0 gap-6 pb-6 md:pb-0 overflow-y-hidden md:overflow-y-scroll md:overflow-x-hidden absolute md:right-0 md:pr-4">
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
