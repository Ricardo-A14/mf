import "./Navbar.css";

import { useContext } from "react";

import AppContext from "../../Context/index";

const Header = () => {
  const { GetFilteredValue } = useContext(AppContext);

  return (
    <div className="nav-position">
      <nav className="nav-container">
        <div className="navbar-left">
          <h1>MAGIC FACE</h1>

          <ul>
            <li>
              <a href="">ancle1</a>
            </li>
            <li>
              <a href="">ancle2</a>
            </li>
            <li>
              <a href="">ancle3</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <input
            type="text"
            placeholder="Buscar Producto"
            onChange={(event) => GetFilteredValue(event.target.value)}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
