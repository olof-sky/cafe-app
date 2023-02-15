import { Link } from "react-router-dom";
function NoMatch() {
  return (
    <main>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to={process.env.REACT_APP_BASE_URL}>Go to the home page</Link>
      </p>
    </main>
  );
}

export default NoMatch;
