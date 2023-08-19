import AppContext from "../../Context/index";

import { useContext } from "react";

import "./GelTint.css";

const GelTint = () => {
  const { varietyImages3, setGelTintName, setGelTintImg } =
    useContext(AppContext);

  const Gel_red_click = () => {
    setGelTintName("tint_red");
    setGelTintImg(varietyImages3[0]);
  };
  const Gel_red_over = () => {
    setGelTintName("tint_red");
  };
  const Gel_red_out = () => {
    setGelTintName("");
    setGelTintImg(null);
  };

  const Gel_juice_click = () => {
    setGelTintName("tint_juice");
    setGelTintImg(varietyImages3[1]);
  };
  const Gel_juice_over = () => {
    setGelTintName("tint_juice");
  };
  const Gel_juice_out = () => {
    setGelTintName("");
    setGelTintImg(null);
  };

  const Gel_pool_click = () => {
    setGelTintName("tint_pool");
    setGelTintImg(varietyImages3[2]);
  };
  const Gel_pool_over = () => {
    setGelTintName("tint_pool");
  };
  const Gel_pool_out = () => {
    setGelTintName("");
    setGelTintImg(null);
  };

  return (
    <div className="gel_tint">
      <span
        className="tint-red"
        onClick={() => Gel_red_click()}
        onMouseOver={() => Gel_red_over()}
        onMouseOut={() => Gel_red_out()}
      ></span>
      <span
        className="tint-juice"
        onClick={() => Gel_juice_click()}
        onMouseOver={() => Gel_juice_over()}
        onMouseOut={() => Gel_juice_out()}
      ></span>
      <span
        className="tint-pool"
        onClick={() => Gel_pool_click()}
        onMouseOver={() => Gel_pool_over()}
        onMouseOut={() => Gel_pool_out()}
      ></span>
    </div>
  );
};

export default GelTint;
