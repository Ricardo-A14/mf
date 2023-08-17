import AppContext from "../../Context/index";

import { useContext } from "react";

import "./Pestanina.css";

const Pestanina = () => {
  const { varietyImages5, setPestaName, sePestaImg } = useContext(AppContext);

  const Pesta_1_click = () => {
    setPestaName("pesta1");
    sePestaImg(varietyImages5[0]);
  };
  const Pesta_1_over = () => {
    setPestaName("pesta1");
  };
  const Pesta_1_out = () => {
    setPestaName("");
    sePestaImg(null);
  };

  const Pesta_2_click = () => {
    setPestaName("pesta2");
    sePestaImg(varietyImages5[1]);
  };
  const Pesta_2_over = () => {
    setPestaName("pesta2");
  };
  const Pesta_2_out = () => {
    setPestaName("");
    sePestaImg(null);
  };

  const Pesta_3_click = () => {
    setPestaName("pesta3");
    sePestaImg(varietyImages5[2]);
  };
  const Pesta_3_over = () => {
    setPestaName("pesta3");
  };
  const Pesta_3_out = () => {
    setPestaName("");
    sePestaImg(null);
  };

  const Pesta_4_click = () => {
    setPestaName("pesta4");
    sePestaImg(varietyImages5[3]);
  };
  const Pesta_4_over = () => {
    setPestaName("pesta4");
  };
  const Pesta_4_out = () => {
    setPestaName("");
    sePestaImg(null);
  };

  const Pesta_5_click = () => {
    setPestaName("pesta5");
    sePestaImg(varietyImages5[4]);
  };
  const Pesta_5_over = () => {
    setPestaName("pesta5");
  };
  const Pesta_5_out = () => {
    setPestaName("");
    sePestaImg(null);
  };

  return (
    <div className="pestanina">
      <span
        className="pe1"
        onClick={() => Pesta_1_click()}
        onMouseOver={() => Pesta_1_over()}
        onMouseOut={() => Pesta_1_out()}
      ></span>
      <span
        className="pe2"
        onClick={() => Pesta_2_click()}
        onMouseOver={() => Pesta_2_over()}
        onMouseOut={() => Pesta_2_out()}
      ></span>
      <span
        className="pe3"
        onClick={() => Pesta_3_click()}
        onMouseOver={() => Pesta_3_over()}
        onMouseOut={() => Pesta_3_out()}
      ></span>
      <span
        className="pe4"
        onClick={() => Pesta_4_click()}
        onMouseOver={() => Pesta_4_over()}
        onMouseOut={() => Pesta_4_out()}
      ></span>
      <span
        className="pe5"
        onClick={() => Pesta_5_click()}
        onMouseOver={() => Pesta_5_over()}
        onMouseOut={() => Pesta_5_out()}
      ></span>
    </div>
  );
};

export default Pestanina;
