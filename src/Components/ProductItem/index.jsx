import "./ProductItem.css";

import { useContext } from "react";
import AppContext from "../../Context";

const ProductItem = ({ product }) => {
  const { GetProductDetails } = useContext(AppContext);

  return (
    <div className="item" onClick={() => GetProductDetails(product)}>
      <figure className="product-img">
        <img src={product.image} alt={product.title} />
      </figure>

      <div className="product-info">
        <div className="div-info">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>

        {/* <figure className="icon-cart">
          <img src="" alt="" />
        </figure> */}
      </div>
    </div>
  );
};

export default ProductItem;
