import { useContext } from "react";

import AppContext from "../../Context";

import { NavLink } from "react-router-dom";
import "./MobileMenu.css";

const MobileMenu = () => {
  const { HandleActiveMenu } = useContext(AppContext);

  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <NavLink to="/mf/" onClick={() => HandleActiveMenu(null)}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mf/maquillaje"
            onClick={() => HandleActiveMenu("maquillaje")}
          >
            Maquillaje
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/mf/skincare"
            onClick={() => HandleActiveMenu("skincare")}
          >
            Skincare
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
