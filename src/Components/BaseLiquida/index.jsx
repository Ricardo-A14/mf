import AppContext from "../../Context/index";

import { useContext } from "react";

import "./BaseLiquida.css";

const BaseLiquida = () => {
  const {
    // Tal vez haga interferencia porque es compartida con productos polvos.
    varietyImages2,

    setNombreBases,

    setImagesBase,
  } = useContext(AppContext);

  const Bage_2_click = () => {
    setNombreBases("bage_2");
    setImagesBase(varietyImages2[0]);
  };
  const Bage_2_over = () => {
    setNombreBases("bage_2");
  };
  const Bage_2_out = () => {
    setNombreBases("");
    setImagesBase(null);
  };

  const Bage_3_click = () => {
    setNombreBases("bage_3");
    setImagesBase(varietyImages2[1]);
  };
  const Bage_3_over = () => {
    setNombreBases("bage_3");
  };
  const Bage_3_out = () => {
    setNombreBases("");
    setImagesBase(null);
  };

  const Bage_4_click = () => {
    setNombreBases("bage_4");
    setImagesBase(varietyImages2[2]);
  };
  const Bage_4_over = () => {
    setNombreBases("bage_4");
  };
  const Bage_4_out = () => {
    setNombreBases("");
    setImagesBase(null);
  };

  const Bage_5_click = () => {
    setNombreBases("bage_5");
    setImagesBase(varietyImages2[3]);
  };
  const Bage_5_over = () => {
    setNombreBases("bage_5");
  };
  const Bage_5_out = () => {
    setNombreBases("");
    setImagesBase(null);
  };
  const Bage_7_click = () => {
    setNombreBases("bage_7");
    setImagesBase(varietyImages2[4]);
  };
  const Bage_7_over = () => {
    setNombreBases("bage_7");
  };
  const Bage_7_out = () => {
    setNombreBases("");
    setImagesBase(null);
  };

  return (
    <div className="base_liquida">
      <span
        className=""
        onClick={() => Bage_2_click()}
        onMouseOver={() => Bage_2_over()}
        onMouseOut={() => Bage_2_out()}
      ></span>
      <span
        className=""
        onClick={() => Bage_3_click()}
        onMouseOver={() => Bage_3_over()}
        onMouseOut={() => Bage_3_out()}
      ></span>
      <span
        className=""
        onClick={() => Bage_4_click()}
        onMouseOver={() => Bage_4_over()}
        onMouseOut={() => Bage_4_out()}
      ></span>
      <span
        className=""
        onClick={() => Bage_5_click()}
        onMouseOver={() => Bage_5_over()}
        onMouseOut={() => Bage_5_out()}
      ></span>
      <span
        className=""
        onClick={() => Bage_7_click()}
        onMouseOver={() => Bage_7_over()}
        onMouseOut={() => Bage_7_out()}
      ></span>
    </div>
  );
};

export default BaseLiquida;
