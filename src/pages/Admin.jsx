import { React, useContext } from "react";
import Loader from "../components/Loader";
import PageSection from "../components/PageSection";
import CreateCampaignCard from "../components/cards/CreateCampaignCard";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../data/context";

function Admin() {
  const { campaigns, updateCampaigns, clear } = useContext(Context);

  const NewCampaignCardButton = () => {
    return (
      <button
        onClick={() => {
          const id = uuidv4();
          const campaign = {
            img: "",
            title: "",
            price: 0,
            description: "",
            ingredients: [],
          };
          campaigns[id] = campaign;
          updateCampaigns(campaigns);
        }}
        className="bg-red text-yellow w-24"
      >
        Ny kampanj
      </button>
    );
  };

  return (
    <div className="container mx-auto">
      <PageSection title="Admin">
        <section className="mt-16 mb-16">
          {campaigns ? (
            Object.keys(campaigns).map((entry, i) => {
              return (
                <CreateCampaignCard
                  key={i}
                  img={campaigns[entry].img}
                  title={campaigns[entry].title}
                  price={campaigns[entry].price}
                  description={campaigns[entry].description}
                  ingredients={campaigns[entry].ingredients}
                />
              );
            })
          ) : (
            <Loader />
          )}
          <NewCampaignCardButton />
          <button className="bg-red text-yellow w-24" onClick={() => clear()}>
            Avbryt
          </button>
        </section>
      </PageSection>
    </div>
  );
}
export default Admin;
