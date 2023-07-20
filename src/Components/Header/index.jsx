
import "./Navbar.css";

import { NavLink } from "react-router-dom";

import { useContext } from "react";

import AppContext from "../../Context/index";

import MobileMenu from "../MobileMenu";

const Header = () => {
  const {
    setSearchByTitle,
    setSearchByCategory,
    activeMobileMenu,
    setActiveMobileMenu,
  } = useContext(AppContext);

  return (
    <div className="nav-position">
      <nav className="nav-container">
        {activeMobileMenu && <MobileMenu />}

        <div className="navbar-left">
          <div
            className="mobile-icon"
            onClick={() => setActiveMobileMenu(!activeMobileMenu)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="mf-title">MAGIC FACE</h1>

          <ul>
            <li>
              <NavLink to="/mf" onClick={() => setSearchByCategory()}>
                All
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/maquillaje"
                onClick={() => setSearchByCategory("maquillaje")}
              >
                Maquillaje
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/labiales"
                onClick={() => setSearchByCategory("skincare")}
              >
                Skincare
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <input
            type="text"
            placeholder="Buscar Producto"
            onChange={(event) =>
              setSearchByTitle(event.target.value.toLowerCase())
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
