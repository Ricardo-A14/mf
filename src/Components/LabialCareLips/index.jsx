import AppContext from "../../Context/index";

import { useContext } from "react";

import "./LabialCareLips.css";

const ExfolianteLabialCareLips = () => {
  const {
    // Tal vez haga interferencia porque es compartida con productos polvos.
    varietyImages4,

    setCareLipsName,

    setCareLipsImg,
  } = useContext(AppContext);

  const Love_click = () => {
    setCareLipsName("strawberry_love");
    setCareLipsImg(varietyImages4[0]);
  };
  const Love_over = () => {
    setCareLipsName("strawberry_love");
  };
  const Love_out = () => {
    setCareLipsName("");
    setCareLipsImg(null);
  };

  const MintFever_click = () => {
    setCareLipsName("mint_fever");
    setCareLipsImg(varietyImages4[1]);
  };
  const MintFever_over = () => {
    setCareLipsName("mint_fever");
  };
  const MintFever_out = () => {
    setCareLipsName("");
    setCareLipsImg(null);
  };

  const Coffee_click = () => {
    setCareLipsName("coffee_break");
    setCareLipsImg(varietyImages4[2]);
  };
  const Coffee_over = () => {
    setCareLipsName("coffee_break");
  };
  const Coffee_out = () => {
    setCareLipsName("");
    setCareLipsImg(null);
  };

  return (
    <div className="care_lips">
      <span
        className="love"
        onClick={() => Love_click()}
        onMouseOver={() => Love_over()}
        onMouseOut={() => Love_out()}
      ></span>
      <span
        className="fever"
        onClick={() => MintFever_click()}
        onMouseOver={() => MintFever_over()}
        onMouseOut={() => MintFever_out()}
      ></span>
      <span
        className="coffee"
        onClick={() => Coffee_click()}
        onMouseOver={() => Coffee_over()}
        onMouseOut={() => Coffee_out()}
      ></span>
    </div>
  );
};

export default ExfolianteLabialCareLips;
