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
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maquillaje"
            onClick={() => HandleActiveMenu("maquillaje")}
          >
            Maquillaje
          </NavLink>
        </li>

        <li>
          <NavLink to="/labiales" onClick={() => HandleActiveMenu("skincare")}>
            Skincare
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
