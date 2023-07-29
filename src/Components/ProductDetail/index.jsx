import { useContext } from "react";
import AppContext from "../../Context/index";

import UseVariety from "../UseVariety";

import "./ProductDetail.css";

import { XMarkIcon } from "@heroicons/react/24/solid";

import Medium1 from "../PolvoMedium/Medium1";
import Medium2 from "../PolvoMedium/Medium2";
import Medium4 from "../PolvoMedium/Medium4";
import Medium5 from "../PolvoMedium/Medium5";

const ProductDetail = () => {
  const {
    setOpenProductDetail,
    productDetails,
    HandleUseVariety,
    setVarietyImages,
    nombrePolvos,
    imagesPo,
    newImages,
  } = useContext(AppContext);

  /*-------  UNSTABLE  -------------------- */
  HandleUseVariety(productDetails);

  console.log(imagesPo);
  /*-------  UNSTABLE  -------------------- */

  return (
    <aside className="product-detail">
      <div
        className="close-product-detail"
        onClick={() => setOpenProductDetail(false)}
      >
        <XMarkIcon className="icon-x" />
      </div>

      <figure className="product-detail-img">
        {productDetails.image !== null && imagesPo == null ? (
          <img src={productDetails.image[0]} alt={productDetails.title} />
        ) : (
          <img src={imagesPo} alt={productDetails.title} />
        )}
      </figure>

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
          </div>
          <div className="variety-container">
            {productDetails.useVariety && <UseVariety />}
            {setVarietyImages(newImages)}
          </div>
        </div>

        <span className="description">{productDetails.description}</span>
      </div>
    </aside>
  );
};

export default ProductDetail;
