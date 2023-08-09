import { useContext } from "react";
import AppContext from "../../Context/index";

import UseVariety from "../UseVariety";

import "./ProductDetail.css";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Medium1 from "../PolvoMedium/Medium1";
import Medium2 from "../PolvoMedium/Medium2";
import Medium4 from "../PolvoMedium/Medium4";
import Medium5 from "../PolvoMedium/Medium5";

import Bage2 from "../BaseLiquida/Bage2";
import Bage3 from "../BaseLiquida/Bage3";
import Bage4 from "../BaseLiquida/Bage4";
import Bage5 from "../BaseLiquida/Bage5";
import Bage7 from "../BaseLiquida/Bage7";

import TintJuice from "../GelTint/TintJuice";
import TintRed from "../GelTint/TintRed";
import TintPool from "../GelTint/TintPool";

import CareLipsLove from "../LabialCareLips/CareLipsLove";
import CareLipsCoffee from "../LabialCareLips/CareLipsCoffee";
import CareLipsMintFever from "../LabialCareLips/CareLipsMintFever";

const ProductDetail = () => {
  const {
    setOpenProductDetail,
    productDetails,
    HandleUseVariety,

    setVarietyImages,
    setVarietyImages2,
    setVarietyImages3,
    setVarietyImages4,

    nombrePolvos,
    nombreBases,
    gelTintName,
    careLipsName,

    imagesPo,
    imagesBase,
    gelTintImg,
    careLipsImg,

    newImages,
    newImages2,
    newImages3,
    newImages4,
  } = useContext(AppContext);

  /*-------  UNSTABLE  -------------------- */
  HandleUseVariety(productDetails);

  /*-------  UNSTABLE  -------------------- */

  const HandleVarietyImages = () => {
    if (
      productDetails.image &&
      imagesPo == null &&
      imagesBase == null &&
      careLipsImg === null &&
      gelTintImg == null
    ) {
      // console.log(productDetails.image);
      return <img src={productDetails.image[0]} alt={productDetails.title} />;
    } else if (imagesPo) {
      return <img src={imagesPo} alt={productDetails.title} />;
    } else if (imagesBase) {
      return <img src={imagesBase} alt={productDetails.title} />;
    } else if (gelTintImg) {
      return <img src={gelTintImg} alt={productDetails.title} />;
    } else if (careLipsImg) {
      return <img src={careLipsImg} alt={productDetails.title} />;
    }
  };

  return (
    <aside className="product-detail">
      <div
        className="close-product-detail"
        onClick={() => setOpenProductDetail(false)}
      >
        <XMarkIcon className="icon-x" />
      </div>

      <figure className="product-detail-img">{HandleVarietyImages()}</figure>

      <div className="aside-product-info">
        <span className="title">{productDetails.title}</span>

        <span className="price">$ {productDetails.price}</span>

        <div>
          <div className="variety">
            {nombrePolvos === "medium_1" &&
            productDetails.varietyNumber === 1 ? (
              <Medium1 />
            ) : null}
            {nombrePolvos === "medium_2" &&
            productDetails.varietyNumber === 1 ? (
              <Medium2 />
            ) : null}
            {nombrePolvos === "medium_3" &&
            productDetails.varietyNumber === 1 ? (
              <Medium4 />
            ) : null}
            {nombrePolvos === "medium_4" &&
            productDetails.varietyNumber === 1 ? (
              <Medium5 />
            ) : null}

            {nombreBases === "bage_2" && productDetails.varietyNumber === 2 ? (
              <Bage2 />
            ) : null}
            {nombreBases === "bage_3" && productDetails.varietyNumber === 2 ? (
              <Bage3 />
            ) : null}
            {nombreBases === "bage_4" && productDetails.varietyNumber === 2 ? (
              <Bage4 />
            ) : null}
            {nombreBases === "bage_5" && productDetails.varietyNumber === 2 ? (
              <Bage5 />
            ) : null}
            {nombreBases === "bage_7" && productDetails.varietyNumber === 2 ? (
              <Bage7 />
            ) : null}

            {gelTintName === "tint_red" &&
            productDetails.varietyNumber === 3 ? (
              <TintRed />
            ) : null}
            {gelTintName === "tint_juice" &&
            productDetails.varietyNumber === 3 ? (
              <TintJuice />
            ) : null}
            {gelTintName === "tint_pool" &&
            productDetails.varietyNumber === 3 ? (
              <TintPool />
            ) : null}

            {careLipsName === "strawberry_love" &&
            productDetails.varietyNumber === 4 ? (
              <CareLipsLove />
            ) : null}
            {careLipsName === "mint_fever" &&
            productDetails.varietyNumber === 4 ? (
              <CareLipsMintFever />
            ) : null}
            {careLipsName === "coffee_break" &&
            productDetails.varietyNumber === 4 ? (
              <CareLipsCoffee />
            ) : null}
          </div>
          <div className="variety-container">
            {productDetails.useVariety && <UseVariety />}
            {productDetails.varietyNumber === 1 && setVarietyImages(newImages)}
            {productDetails.varietyNumber === 2 &&
              setVarietyImages2(newImages2)}
            {productDetails.varietyNumber === 3 &&
              setVarietyImages3(newImages3)}
            {productDetails.varietyNumber === 4 &&
              setVarietyImages4(newImages4)}
          </div>
        </div>

        <span className="description">{productDetails.description}</span>
      </div>
    </aside>
  );
};

export default ProductDetail;
