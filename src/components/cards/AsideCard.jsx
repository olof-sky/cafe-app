import { Link } from "react-router-dom";

function AsideCard(props) {
  return (
    <article className="bg-red w-56 border-dashed border-b-2 border-yellow">
      <Link to={props.link}>
        <img className="w-56 h-56 object-fill" alt="/" src={props.img} />
        <p className="p-4">{props.text}</p>
      </Link>
    </article>
  );
}
export default AsideCard;
