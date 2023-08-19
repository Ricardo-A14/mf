import "./ProductItem.css";

import { useContext } from "react";
import AppContext from "../../Context";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";
import GelTint from "../GelTint";
import LabialCareLips from "../LabialCareLips";
import Pestanina from "../Pestanina";
import BestBrow from "../BestBrow";

const ProductItem = ({ product }) => {
  const {
    GetProductDetails,

    nombrePolvos,
    nombreBases,
    gelTintName,
    careLipsName,
    pestaName,
    bestBrowName,

    setImagesPo,
    setImagesBase,
    setGelTintImg,
    setCareLipsImg,
    sePestaImg,
    setBestBrowImg,
  } = useContext(AppContext);

  const HandleOnMouseOver = () => {
    setImagesPo(null);
    setImagesBase(null);
    setGelTintImg(null);
    setCareLipsImg(null);
    sePestaImg(null);
    setBestBrowImg(null);
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
          {console.log(parseFloat(product.price))}
          <div className="variety-product">
            {product.varietyNumber === 1 && <PolvoMedium />}
            {product.varietyNumber === 2 && <BaseLiquida />}
            {product.varietyNumber === 3 && <GelTint />}
            {product.varietyNumber === 4 && <LabialCareLips />}
            {product.varietyNumber === 5 && <Pestanina />}
            {product.varietyNumber === 6 && <BestBrow />}

            {nombrePolvos === "medium_1" && product.varietyNumber === 1 ? (
              <div className="medium_1">Medium 1</div>
            ) : null}
            {nombrePolvos === "medium_2" && product.varietyNumber === 1 ? (
              <div className="medium_2">Medium 2</div>
            ) : null}
            {nombrePolvos === "medium_3" && product.varietyNumber === 1 ? (
              <div className="medium_3">Medium 4</div>
            ) : null}
            {nombrePolvos === "medium_4" && product.varietyNumber === 1 ? (
              <div className="medium_4">Medium 5</div>
            ) : null}

            {nombreBases === "bage_2" && product.varietyNumber === 2 ? (
              <div className="bage_2">Bage 2</div>
            ) : null}
            {nombreBases === "bage_3" && product.varietyNumber === 2 ? (
              <div className="bage_3">Bage 3</div>
            ) : null}
            {nombreBases === "bage_4" && product.varietyNumber === 2 ? (
              <div className="bage_4">Bage 4</div>
            ) : null}
            {nombreBases === "bage_5" && product.varietyNumber === 2 ? (
              <div className="bage_5">Bage 5</div>
            ) : null}
            {nombreBases === "bage_7" && product.varietyNumber === 2 ? (
              <div className="bage_7">Bage 7</div>
            ) : null}

            {gelTintName === "tint_red" && product.varietyNumber === 3 ? (
              <div className="tint_red">Gel tint fresh red</div>
            ) : null}
            {gelTintName === "tint_juice" && product.varietyNumber === 3 ? (
              <div className="tint_juice">Gel tint cranberry Juice</div>
            ) : null}
            {gelTintName === "tint_pool" && product.varietyNumber === 3 ? (
              <div className="tint_pool">Gel tint pitaya Pool</div>
            ) : null}

            {careLipsName === "strawberry_l" && product.varietyNumber === 4 ? (
              <div className="strawberry_l">
                Labial Care Lips Fun Strawberry Love
              </div>
            ) : null}
            {careLipsName === "mint_f" && product.varietyNumber === 4 ? (
              <div className="mint_f">Labial Care Lips Fun Mint Fever</div>
            ) : null}
            {careLipsName === "coffee_b" && product.varietyNumber === 4 ? (
              <div className="coffee_b">Labial care Lips Fun Coffee Break</div>
            ) : null}

            {pestaName === "pesta1" && product.varietyNumber === 5 ? (
              <div className="pesta1">Pestañina voluminosas y curvas</div>
            ) : null}
            {pestaName === "pesta2" && product.varietyNumber === 5 ? (
              <div className="pesta2">Pestañina curvas y volumen expres</div>
            ) : null}
            {pestaName === "pesta3" && product.varietyNumber === 5 ? (
              <div className="pesta3">
                Pestañinas super voluminosas y definidas
              </div>
            ) : null}
            {pestaName === "pesta4" && product.varietyNumber === 5 ? (
              <div className="pesta4">
                Pestañina extra gruesas y covertura negra
              </div>
            ) : null}
            {pestaName === "pesta5" && product.varietyNumber === 5 ? (
              <div className="pesta5">Pestañina alargadas y con volumen</div>
            ) : null}

            {bestBrowName === "light_brow" && product.varietyNumber === 6 ? (
              <div className="light_brow">Pomada para cejas Light</div>
            ) : null}
            {bestBrowName === "medium_brow" && product.varietyNumber === 6 ? (
              <div className="medium_brow">Pomada para cejas Medium</div>
            ) : null}
            {bestBrowName === "dark_brow" && product.varietyNumber === 6 ? (
              <div className="dark_brow">Pomada para cejas Dark</div>
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
