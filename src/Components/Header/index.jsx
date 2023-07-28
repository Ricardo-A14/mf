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

    InProductDetailFromHeader,
    InactiveProductDetailFromTitle,
  } = useContext(AppContext);

  return (
    <div className="nav-position">
      <nav className="nav-container">
        {activeMobileMenu && <MobileMenu />}

        <div className="navbar-left">
          <div
            className="mobile-icon"
            onClick={() => InProductDetailFromHeader()}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          <NavLink
            className="mf-title"
            to="/mf/"
            onClick={() => InactiveProductDetailFromTitle()}
          >
            MAGIC FACE
          </NavLink>

          <ul>
            <li>
              <NavLink to="/mf/" onClick={() => setSearchByCategory()}>
                Todos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mf/maquillaje"
                onClick={() => setSearchByCategory("maquillaje")}
              >
                Maquillaje
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mf/skincare"
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
