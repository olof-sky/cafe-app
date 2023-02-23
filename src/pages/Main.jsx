import { React, useEffect, useState } from "react";
import PageSection from "../components/PageSection";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import CakeViewer from "../components/CakeViewer";
import CampaignCard from "../components/cards/CampaignCard";
import StandardButton from "../components/buttons/StandardButton";
import { campaignOne } from "../data/data";
import { campaignTwo } from "../data/data";

function Main() {
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
          <CampaignCard
            img={campaignOne.img}
            title={campaignOne.title}
            description={campaignOne.description}
            ingredients={campaignOne.ingredients}
          />
          <CampaignCard
            img={campaignTwo.img}
            title={campaignTwo.title}
            description={campaignTwo.description}
            ingredients={campaignTwo.ingredients}
          />
        </section>
      </PageSection>
      <PageSection title="Våra tårtor">
        <section className="flex justify-center mt-16 mb-16 w-full">
          <CakeViewer></CakeViewer>
        </section>
      </PageSection>
      <AboutSection />
    </div>
  );
}

export default Main;
