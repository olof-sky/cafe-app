import NavButton from "./buttons/NavButton";

function NavBar() {
  return (
    <nav className="flex flex-row flex-wrap justify-center gap-6 p-6 container">
      <NavButton url="/" text="Hem" />
      <NavButton url="/kontakt" text="Kontakt" />
      <NavButton url="/bilder" text="Bilder" />
      <NavButton url="/tartar" text="Tårtor" />
      <NavButton url="/brollop" text="Bröllop" />
    </nav>
  );
}

export default NavBar;
