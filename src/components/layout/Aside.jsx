import { React, useContext } from "react";
import PageSection from "../PageSection";
import AsideCard from "../cards/AsideCard";
import Loader from "../Loader";
import { Context } from "../../data/context";

function Aside() {
  const { asideCards } = useContext(Context);
  return (
    <aside className="hidden 2xl:block">
      <PageSection title="Se mer">
        <section className="mt-16 mb-16 grid grid-cols-1 gap-16">
          {asideCards ? (
            Object.keys(asideCards).map((entry, i) => {
              return (
                <AsideCard
                  key={i}
                  link={asideCards[entry].navLink}
                  img={asideCards[entry].img}
                  text={asideCards[entry].text}
                />
              );
            })
          ) : (
            <Loader />
          )}
        </section>
      </PageSection>
    </aside>
  );
}
export default Aside;
