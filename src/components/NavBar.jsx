import { React, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import NavButton from "./buttons/NavButton";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const LinkButton = (props) => {
    return (
      <Link onClick={() => setShowNav(!showNav)} to={props.link}>
        <h2>{props.text}</h2>
      </Link>
    );
  };

  return (
    <Fragment>
      <nav className="hidden lg:flex flex-row flex-wrap justify-center gap-6 p-6 container">
        <NavButton url="/" text="Hem" />
        <NavButton url="/kontakt" text="Kontakt" />
        <NavButton url="/bilder" text="Bilder" />
        <NavButton url="/tartar" text="Tårtor" />
        <NavButton url="/brollop" text="Bröllop" />
      </nav>
      <nav className="fixed z-10 top-0 right-0 lg:hidden pt-6 pr-16">
        <button className="fixed z-30" onClick={() => setShowNav(!showNav)}>
          <RxHamburgerMenu className="w-10 h-10 text-yellow" />
        </button>
        {showNav ? (
          <div className="fixed flex flex-col items-center gap-6 pt-32 z-20 top-0 left-0 w-screen h-screen bg-black">
            <LinkButton text="Hem" link="/" />
            <LinkButton text="Kontakt" link="/kontakt" />
            <LinkButton text="Tårtor" link="/tartar" />
            <LinkButton text="Bilder" link="/bilder" />
            <LinkButton text="Bröllop" link="/brollop" />
          </div>
        ) : null}
      </nav>
    </Fragment>
  );
}

export default NavBar;
