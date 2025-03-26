import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/design" className={location.pathname === '/design' ? 'active' : ''}>
            Design
          </Link>
          <Link to="/photography" className={location.pathname === '/photography' ? 'active' : ''}>
            Photography
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
