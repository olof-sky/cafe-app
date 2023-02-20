import React from "react";
import { Link } from "react-router-dom";

function NavButton(props) {
  return (
    <button
      type="button"
      className="rounded border-2 border-yellow bg-red h-12 w-40
  font-medium leading-tight text-yellow transition duration-150 ease-in-out shadow-md
  hover:bg-medium-red
  focus:outline-none focus:ring-0"
    >
      <Link className="w-full h-full" to={props.url}>
        <h4 className="leading-none">{props.text}</h4>
      </Link>
    </button>
  );
}

export default NavButton;
