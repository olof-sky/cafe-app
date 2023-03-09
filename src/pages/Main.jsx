import { React, useContext, useState } from "react";
import PageSection from "../components/PageSection";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import CakeViewer from "../components/CakeViewer";
import CampaignCard from "../components/cards/CampaignCard";
import StandardButton from "../components/buttons/StandardButton";
import Loader from "../components/Loader";
import { Context } from "../data/context";

function Main() {
  const { campaigns, cakes } = useContext(Context);
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="sm:hidden mt-16 flex flex-col items-center justify-center">
        <StandardButton
          event={() => setShowContact(!showContact)}
          text="Kontakt"
        />
        {showContact ? (
          <div className="mt-16">
            <ContactSection />
          </div>
        ) : null}
      </div>
      <PageSection title="Kampanjer">
        <section className="mt-16 mb-16 grid grid-cols-1 xl:grid-cols-2 sm:gap-8 xl:gap-16">
          {campaigns ? (
            Object.keys(campaigns).map((entry, i) => {
              return (
                <CampaignCard
                  key={i}
                  img={campaigns[entry].img}
                  title={campaigns[entry].title}
                  description={campaigns[entry].description}
                  ingredients={campaigns[entry].ingredients}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </section>
      </PageSection>
      <PageSection title="Våra tårtor">
        <section className="flex justify-center mt-16 mb-16 w-full">
          {cakes ? <CakeViewer></CakeViewer> : <Loader />}
        </section>
      </PageSection>
      <AboutSection />
    </div>
  );
}

export default Main;
