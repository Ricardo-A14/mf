import AppContext from "../../Context/index";

import { useContext } from "react";

import "./BestBrow.css";

const BestBrow = () => {
  const { varietyImages6, setBestBrowName, setBestBrowImg } =
    useContext(AppContext);

  const Light_brow_click = () => {
    setBestBrowName("light_brow");
    setBestBrowImg(varietyImages6[0]);
  };
  const Light_brow_over = () => {
    setBestBrowName("light_brow");
  };
  const Light_brow_out = () => {
    setBestBrowName("");
    setBestBrowImg(null);
  };

  const Medium_brow_click = () => {
    setBestBrowName("medium_brow");
    setBestBrowImg(varietyImages6[1]);
  };
  const Medium_brow_over = () => {
    setBestBrowName("medium_brow");
  };
  const Medium_brow_out = () => {
    setBestBrowName("");
    setBestBrowImg(null);
  };

  const Dark_brow_click = () => {
    setBestBrowName("dark_brow");
    setBestBrowImg(varietyImages6[2]);
  };
  const Dark_brow_over = () => {
    setBestBrowName("dark_brow");
  };
  const Dark_brow_out = () => {
    setBestBrowName("");
    setBestBrowImg(null);
  };

  return (
    <div className="best_brow">
      <span
        className="light-brow"
        onClick={() => Light_brow_click()}
        onMouseOver={() => Light_brow_over()}
        onMouseOut={() => Light_brow_out()}
      ></span>
      <span
        className="medium-brow"
        onClick={() => Medium_brow_click()}
        onMouseOver={() => Medium_brow_over()}
        onMouseOut={() => Medium_brow_out()}
      ></span>
      <span
        className="dark-brow"
        onClick={() => Dark_brow_click()}
        onMouseOver={() => Dark_brow_over()}
        onMouseOut={() => Dark_brow_out()}
      ></span>
    </div>
  );
};

export default BestBrow;
