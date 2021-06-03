import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Go back to the homepage...</Link>
      <p>Or select from the Navigation at the top.</p>
    </div>
  );
}

export default NotFound;