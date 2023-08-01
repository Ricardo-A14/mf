import AppContext from "../../Context/index";

import { useContext } from "react";

import "./PolvoMedium.css";

const PolvoMedium = () => {
  const {
    varietyImages,

    setNombrePolvos,

    setImagesPo,
  } = useContext(AppContext);

  const Medium_1_click = () => {
    setNombrePolvos("medium_1");
    setImagesPo(varietyImages[0]);
  };
  const Medium_1_over = () => {
    setNombrePolvos("medium_1");
  };
  const Medium_1_out = () => {
    setNombrePolvos("");
    setImagesPo(null);
  };

  const Medium_2_click = () => {
    setNombrePolvos("medium_2");
    setImagesPo(varietyImages[1]);
  };
  const Medium_2_over = () => {
    setNombrePolvos("medium_2");
  };
  const Medium_2_out = () => {
    setNombrePolvos("");
    setImagesPo(null);
  };

  const Medium_3_click = () => {
    setNombrePolvos("medium_3");
    setImagesPo(varietyImages[2]);
  };
  const Medium_3_over = () => {
    setNombrePolvos("medium_3");
  };
  const Medium_3_out = () => {
    setNombrePolvos("");
    setImagesPo(null);
  };

  const Medium_4_click = () => {
    setNombrePolvos("medium_4");
    setImagesPo(varietyImages[3]);
  };
  const Medium_4_over = () => {
    setNombrePolvos("medium_4");
  };
  const Medium_4_out = () => {
    setNombrePolvos("");
    setImagesPo(null);
  };

  return (
    <div className="polvo_medium">
      <span
        className="m1"
        onClick={() => Medium_1_click()}
        onMouseOver={() => Medium_1_over()}
        onMouseOut={() => Medium_1_out()}
      ></span>
      <span
        className="m2"
        onClick={() => Medium_2_click()}
        onMouseOver={() => Medium_2_over()}
        onMouseOut={() => Medium_2_out()}
      ></span>
      <span
        className="m4"
        onClick={() => Medium_3_click()}
        onMouseOver={() => Medium_3_over()}
        onMouseOut={() => Medium_3_out()}
      ></span>
      <span
        className="m5"
        onClick={() => Medium_4_click()}
        onMouseOver={() => Medium_4_over()}
        onMouseOut={() => Medium_4_out()}
      ></span>
    </div>
  );
};

export default PolvoMedium;
