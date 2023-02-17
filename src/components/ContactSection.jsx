import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function ContactSection() {
  return (
    <section className="flex flex-col gap-4 h-fit">
      <div>
        <h4>Vid beställning:</h4>
        <span className="flex gap-2 items-center">
          <BsFillTelephoneFill className="w-4 h-4 text-yellow" />
          <a href="tel:019-777777">
            <p>019-777777</p>
          </a>
        </span>
      </div>
      <div>
        <h4>Andra ärenden:</h4>
        <span className="flex gap-2 items-center">
          <HiMail className="w-5 h-5 text-yellow" />
          <a href="mailto:kontakt@princesskonditori.com">
            <p>kontakt@princesskonditori.com</p>
          </a>
        </span>
      </div>
    </section>
  );
}

export default ContactSection;
