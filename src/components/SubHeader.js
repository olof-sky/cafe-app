import { Fragment } from "react";
import rococo from "../assets/rococo.png";

function SubHeader(props) {
  return (
    <Fragment>
      <img src={rococo} className="w-16 h-16" alt="rococo" />
      <h2 className="font-subHeader">{props.title}</h2>
    </Fragment>
  );
}
export default SubHeader;
