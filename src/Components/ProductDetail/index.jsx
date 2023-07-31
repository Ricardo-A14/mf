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

const ProductDetail = () => {
  const {
    setOpenProductDetail,
    productDetails,
    HandleUseVariety,
    setVarietyImages,
    varietyImages,
    setVarietyImages2,
    varietyImages2,
    nombrePolvos,
    nombreBases,
    imagesPo,
    imagesBase,
    setNewImages,
    setNewImages2,
    newImages,
    newImages2,
  } = useContext(AppContext);

  /*-------  UNSTABLE  -------------------- */
  HandleUseVariety(productDetails);

  /*-------  UNSTABLE  -------------------- */

  const HandleVarietyImages = () => {
    if (productDetails.image && imagesPo == null && imagesBase == null) {
      return <img src={productDetails.image[0]} alt={productDetails.title} />;
    } else if (imagesPo && imagesBase === null) {
      return <img src={imagesPo} alt={productDetails.title} />;
    } else if (imagesBase && imagesPo === null) {
      return <img src={imagesBase} alt={productDetails.title} />;
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
          </div>
          <div className="variety-container">
            {productDetails.useVariety && <UseVariety />}
            {productDetails.varietyNumber === 1 && setVarietyImages(newImages)}
            {productDetails.varietyNumber === 2 &&
              setVarietyImages2(newImages2)}
          </div>
        </div>

        <span className="description">{productDetails.description}</span>
      </div>
    </aside>
  );
};

export default ProductDetail;
