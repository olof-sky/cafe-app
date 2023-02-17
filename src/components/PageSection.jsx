//Set children inside <section></section> in parent element.
import SubHeader from "./SubHeader";

function PageSection(props) {
  return (
    <section className="flex flex-col justify-center items-center mt-24 mb-6 container">
      <SubHeader title={props.title} />
      {props.children}
    </section>
  );
}
export default PageSection;
