import { React, useState } from "react";
import SmallButton from "../buttons/SmallButton";

function CampaignCard(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <article
      className={`container transition linear flex flex-col w-fill sm:w-[640px] h-fit lg:w-[500px] border-dashed border-b-2 border-yellow gap-4 bg-red`}
    >
      <img
        onClick={() => setToggled(!toggled)}
        className="h-60 sm:h-60 w-fill object-cover hover:cursor-pointer"
        alt="/"
        src={props.img}
      />
      <h3 className="mx-8">{props.title}</h3>
      <SmallButton
        onToggle={() => setToggled(!toggled)}
        toggled={toggled}
        toggledText="Mindre info"
        untoggledText="Mer info"
      />
      <div
        className={`${
          toggled
            ? "transform origin-top scale-y-1 h-fit"
            : "transform origin-top scale-y-0 h-0 bg-grey"
        } transition linear`}
      >
        <div className={"flex flex-col bg-grey pl-6 pr-6 pt-6 gap-6 pb-6"}>
          <p>{props.description}</p>
          {props.ingredients ? (
            <div>
              <p>Ingredienser:</p>
              <ul>
                {props.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index} className="list-disc ml-4">
                      {ingredient}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
export default CampaignCard;
