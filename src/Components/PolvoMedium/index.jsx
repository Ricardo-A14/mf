import AppContext from "../../Context/index";

import { useContext } from "react";

import "./PolvoMedium.css";

const PolvoMedium = () => {
  const {
    varietyImages,

    setNombrePolvos,

    setImagesPo,
    imagesPo,
  } = useContext(AppContext);

  const Meduim_1_over = () => {
    setNombrePolvos("medium_1");
    setImagesPo(varietyImages.image[0]);
  };
  const Meduim_2_over = () => {
    setNombrePolvos("medium_2");
    setImagesPo(varietyImages.image[1]);
  };
  const Meduim_3_over = () => {
    setNombrePolvos("medium_3");
    setImagesPo(varietyImages.image[2]);
  };
  const Meduim_4_over = () => {
    setNombrePolvos("medium_4");
    setImagesPo(varietyImages.image[3]);
  };

  return (
    <div className="polvo_medium">
      <span className="" onMouseOver={() => Meduim_1_over()}></span>
      <span className="" onMouseOver={() => Meduim_2_over()}></span>
      <span className="" onMouseOver={() => Meduim_3_over()}></span>
      <span className="" onMouseOver={() => Meduim_4_over()}></span>
    </div>
  );
};

export default PolvoMedium;
