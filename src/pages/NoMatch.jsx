import { Link } from "react-router-dom";
import NavButton from "../components/buttons/NavButton";
function NoMatch() {
  return (
    <div className="container mt-16 flex flex-col text-center align-center">
      <h2>Oops! Sidan du letade efter finns inte..</h2>
    </div>
  );
}

export default NoMatch;
