import AppContext from "../../Context/index";

import { useContext } from "react";

import "./LabialCareLips.css";

const ExfolianteLabialCareLips = () => {
  const { varietyImages4, careLipsName, setCareLipsName, setCareLipsImg } =
    useContext(AppContext);

  const Love_click = () => {
    setCareLipsName("strawberry_l");
    setCareLipsImg(varietyImages4[0]);
    console.log(careLipsName);
  };
  const Love_over = () => {
    setCareLipsName("strawberry_l");
  };
  const Love_out = () => {
    setCareLipsName("");
    setCareLipsImg(null);
  };

  const MintFever_click = () => {
    setCareLipsName("mint_f");
    setCareLipsImg(varietyImages4[1]);
    console.log(careLipsName);
  };
  const MintFever_over = () => {
    setCareLipsName("mint_f");
  };
  const MintFever_out = () => {
    setCareLipsName("");
    setCareLipsImg(null);
  };

  const Coffee_click = () => {
    setCareLipsName("coffee_b");
    setCareLipsImg(varietyImages4[2]);
    console.log(careLipsName);
  };
  const Coffee_over = () => {
    setCareLipsName("coffee_b");
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