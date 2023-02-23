import { React, useEffect, useState } from "react";
import PageSection from "../PageSection";
import AsideCard from "../cards/AsideCard";
import { asideData } from "../../data/data";

function Aside() {
  const [asideContent, setAsideContent] = useState([]);

  useEffect(() => {
    setAsideContent(asideData);
  }, []);

  return (
    <aside className="hidden 2xl:block">
      <PageSection title="Se mer">
        <section className="mt-16 mb-16 grid grid-cols-1 gap-16">
          {asideContent.map((data, index) => {
            return (
              <AsideCard
                key={index}
                link={data.link}
                img={data.img}
                text={data.text}
              />
            );
          })}
        </section>
      </PageSection>
    </aside>
  );
}
export default Aside;
