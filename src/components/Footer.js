import { React, Fragment } from "react";
import ContactSection from "./ContactSection";
function Footer() {
  return (
    <Fragment>
      <h3 className="w-fill h-40 text-black bg-white justify-center text-center">
        Google maps here
      </h3>
      <footer className="flex flex-col justify-center lg:flex-row lg:gap-16 gap-6 lg:pb-16 lg:pt-12 bg-grey p-6 h-fit">
        <div>
          <h4>Princess konditori</h4>
          <h4>Örebro, Storgatan 47</h4>
          <h4>703 63 Örebro, Sweden</h4>
        </div>
        <ContactSection />
      </footer>
    </Fragment>
  );
}
export default Footer;
