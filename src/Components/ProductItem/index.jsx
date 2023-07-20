import "./ProductItem.css";

import { useContext } from "react";
import AppContext from "../../Context";

const ProductItem = ({ product }) => {
  const { GetProductDetails } = useContext(AppContext);

  return (
    <div className="item" onClick={() => GetProductDetails(product)}>
      <figure className="product-img">
        <img src={product.image[0]} alt={product.title} />
      </figure>

      <div className="product-info">
        <div className="div-info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
        </div>

        {/* <figure className="icon-cart">
          <img src="" alt="" />
        </figure> */}
      </div>
    </div>
  );
};

export default ProductItem;
