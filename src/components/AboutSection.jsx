import SubHeader from "./SubHeader";

function AboutSection() {
  return (
    <section className="flex flex-col gap-12 xl:flex-row xl:w-[900px] justify-between items-center mt-24 mb-24 mb-6 container">
      <article className="flex flex-col justify-center items-center w-full xl:w-full sm:w-96 gap-2 bg-red p-6 pb-16 sm:border border-t-2 border-b-2 xl:border border-yellow">
        <SubHeader title="Om oss" />
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p className="mt-4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </article>
      <article className="w-full flex flex-col gap-6 items-center">
        <h2 className="font-subHeader">Öppettider</h2>
        <div className="flex flex-col gap-6">
          <p>
            Måndag-Fredag: <br /> 09:00-18:00
          </p>
          <p>
            Lördag: <br />
            10:00-15:00
          </p>
          <p>
            Söndag och helgdag: <br />
            Stängt
          </p>
        </div>
      </article>
    </section>
  );
}
export default AboutSection;
