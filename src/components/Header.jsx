import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <div className="search-bar__logo-container"></div>
      <Navbar />

      <Link className="search-bar__carrito-container" to="/carrito">
        Ver carrito
      </Link>
      <div className="menu-toggle">
        <label htmlFor="menu" className="menu-toggle__label">
          <span className="menu-toggle__top-bread"></span>
          <span className="menu-toggle__meat"></span>
          <span className="menu-toggle__bottom-bread"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
