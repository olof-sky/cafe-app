import CampaignCard from "../components/cards/CampaignCard";
import PageSection from "../components/PageSection";
import shrimpImg from "../assets/shrimp.jpg";
import coffeeAndBread from "../assets/coffee-and-bread.jpg";
import CakeViewer from "../components/CakeViewer";
import AboutSection from "../components/AboutSection";

const campaignOne = {
  title: "Kaffe och räksmörgås 99:-",
  img: shrimpImg,
  description: "Vår dagsfärska räksmörgås med handskalade räkor, inkl. kaffe.",
  ingredients: ["Räkor", "Majonäs", "Gurka", "Tomat", "Sallad", "Bröd"],
};
const campaignTwo = {
  title: "Kaffe med valfri bakelse 69:-",
  img: coffeeAndBread,
  description: "Valfri bakelse från vårt utbud inkl. kaffe.",
};

function Main() {
  return (
    <main className="flex flex-col container min-h-min">
      <PageSection title="Kampanjer">
        <section className="mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 gap-16">
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
    </main>
  );
}

export default Main;
