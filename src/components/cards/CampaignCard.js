import { React, useState } from "react";
import SmallButton from "../buttons/SmallButton";

function CampaignCard(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <article className="container flex flex-col w-fill sm:w-[640px] h-fit lg:w-[500px] border-dashed border-b-2 border-yellow gap-4 bg-red">
      <img
        className="h-60 sm:h-60 w-fill object-cover"
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
      {toggled ? (
        <div className="flex flex-col bg-grey pl-6 pr-6 pt-6 gap-6 pb-6">
          <p>{props.description}</p>
          {props.ingredients ? (
            <div>
              <p>Ingredienser:</p>
              <ul>
                {props.ingredients.map((i) => {
                  return <li className="list-disc ml-4">{i}</li>;
                })}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
export default CampaignCard;
