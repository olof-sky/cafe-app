import { React, useContext } from "react";
import { Context } from "../../data/context";
import PageSection from "../PageSection";
import AsideCard from "../cards/AsideCard";
import Loader from "../Loader";

function Aside() {
  const data = useContext(Context);
  return (
    <aside className="hidden 2xl:block">
      <PageSection title="Se mer">
        <section className="mt-16 mb-16 grid grid-cols-1 gap-16">
          {data.asideCards ? (
            Object.keys(data.asideCards).map((entry, i) => {
              return (
                <AsideCard
                  key={i}
                  link={data.asideCards[entry].navLink}
                  img={data.asideCards[entry].img}
                  text={data.asideCards[entry].text}
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
