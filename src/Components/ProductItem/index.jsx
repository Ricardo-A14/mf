import "./ProductItem.css";

import { useContext } from "react";
import AppContext from "../../Context";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";
import GelTint from "../GelTint";
import LabialCareLips from "../LabialCareLips";

const ProductItem = ({ product }) => {
  const {
    GetProductDetails,

    nombrePolvos,
    nombreBases,
    gelTintName,
    careLipsName,

    setImagesPo,
    setImagesBase,
    setGelTintImg,
    setCareLipsImg,
  } = useContext(AppContext);

  const HandleOnMouseOver = () => {
    setImagesPo(null);
    setImagesBase(null);
    setGelTintImg(null);
    setCareLipsImg(null);
  };

  return (
    <div
      className="item"
      onClick={() => GetProductDetails(product)}
      onMouseOut={() => HandleOnMouseOver()}
    >
      <figure className="product-img">
        <img src={product.image[0]} alt={product.title} />
      </figure>

      <div className="product-info">
        <div className="div-info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
          <div className="variety-product">
            {product.varietyNumber === 1 && <PolvoMedium />}
            {product.varietyNumber === 2 && <BaseLiquida />}
            {product.varietyNumber === 3 && <GelTint />}
            {product.varietyNumber === 4 && <LabialCareLips />}

            {nombrePolvos === "medium_1" && product.varietyNumber === 1 ? (
              <div className="medium_1">MEDIUM 1</div>
            ) : null}
            {nombrePolvos === "medium_2" && product.varietyNumber === 1 ? (
              <div className="medium_2">MEDIUM 2</div>
            ) : null}
            {nombrePolvos === "medium_3" && product.varietyNumber === 1 ? (
              <div className="medium_3">MEDIUM 4</div>
            ) : null}
            {nombrePolvos === "medium_4" && product.varietyNumber === 1 ? (
              <div className="medium_4">MEDIUM 5</div>
            ) : null}

            {nombreBases === "bage_2" && product.varietyNumber === 2 ? (
              <div className="bage_2">BAGE 2</div>
            ) : null}
            {nombreBases === "bage_3" && product.varietyNumber === 2 ? (
              <div className="bage_3">BAGE 3</div>
            ) : null}
            {nombreBases === "bage_4" && product.varietyNumber === 2 ? (
              <div className="bage_4">BAGE 4</div>
            ) : null}
            {nombreBases === "bage_5" && product.varietyNumber === 2 ? (
              <div className="bage_5">BAGE 5</div>
            ) : null}
            {nombreBases === "bage_7" && product.varietyNumber === 2 ? (
              <div className="bage_7">BAGE 7</div>
            ) : null}

            {gelTintName === "tint_red" && product.varietyNumber === 3 ? (
              <div className="tint_red">RED</div>
            ) : null}
            {gelTintName === "tint_juice" && product.varietyNumber === 3 ? (
              <div className="tint_juice">JUICE</div>
            ) : null}
            {gelTintName === "tint_pool" && product.varietyNumber === 3 ? (
              <div className="tint_pool">POOL</div>
            ) : null}

            {careLipsName === "strawberry_love" &&
            product.varietyNumber === 4 ? (
              <div className="strawberry_l">LOVE</div>
            ) : null}
            {careLipsName === "mint_fever" && product.varietyNumber === 4 ? (
              <div className="mint_f">FEVER</div>
            ) : null}
            {careLipsName === "coffee_break" && product.varietyNumber === 4 ? (
              <div className="coffee_b">COFFEE </div>
            ) : null}
          </div>
        </div>

        {/* <figure className="icon-cart">
          <img src="" alt="" />
        </figure> */}
      </div>
    </div>
  );
};

export default ProductItem;
