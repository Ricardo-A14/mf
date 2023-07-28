import "./ProductItem.css";

import { useContext } from "react";
import AppContext from "../../Context";

import PolvoMedium from "../PolvoMedium";
import BaseLiquida from "../BaseLiquida";

const ProductItem = ({ product }) => {
  const { GetProductDetails, nombrePolvos } = useContext(AppContext);

  return (
    <div className="item" onClick={() => GetProductDetails(product)}>
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
