import "./Navbar.css";

import { NavLink } from "react-router-dom";

import { useContext } from "react";

import AppContext from "../../Context/index";

const Header = () => {
  const { setSearchByTitle, setSearchByCategory } = useContext(AppContext);

  return (
    <div className="nav-position">
      <nav className="nav-container">
        <div className="navbar-left">
          <h1>MAGIC FACE</h1>

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
                onClick={() => setSearchByCategory("labiales")}
              >
                Labiales
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <input
            type="text"
            placeholder="Buscar Producto"
            onChange={(event) => setSearchByTitle(event.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
