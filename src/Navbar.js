import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Top Hotels of the World</h1>
      <div className="links">
        <Link to="/">All Hotels</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: 'darkblue',
          borderRadius: '8px'
        }}>New Hotel</Link>
      </div>
    </nav>
  );
}

export default Navbar;